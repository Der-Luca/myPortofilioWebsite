#!/usr/bin/env bash

set -Eeuo pipefail

PROJECT_DIR="/home/luca/services/myPortfolio"
COMPOSE_SERVICES=(app seo-scheduler)
ROLLBACK_IMAGE="plessing-portfolio:rollback"

cd "$PROJECT_DIR"

git fetch --quiet origin main

current_commit="$(git rev-parse HEAD)"
target_commit="$(git rev-parse origin/main)"

if [[ "$current_commit" == "$target_commit" ]]; then
  exit 0
fi

echo "[$(date --iso-8601=seconds)] Deploying portfolio ${current_commit:0:7} -> ${target_commit:0:7}"

docker image tag plessing-portfolio:latest "$ROLLBACK_IMAGE"
git reset --hard "$target_commit"

rollback() {
  echo "[$(date --iso-8601=seconds)] Deployment failed; restoring ${current_commit:0:7}"
  git reset --hard "$current_commit"
  docker image tag "$ROLLBACK_IMAGE" plessing-portfolio:latest
  docker compose up -d --no-build --force-recreate "${COMPOSE_SERVICES[@]}"
}

if ! docker compose build app; then
  rollback
  exit 1
fi

if ! docker compose up -d "${COMPOSE_SERVICES[@]}"; then
  rollback
  exit 1
fi

for _ in {1..30}; do
  if curl --fail --silent --show-error http://127.0.0.1:3003/api/health >/dev/null; then
    echo "[$(date --iso-8601=seconds)] Portfolio deployment healthy at ${target_commit:0:7}"
    exit 0
  fi
  sleep 2
done

rollback
exit 1
