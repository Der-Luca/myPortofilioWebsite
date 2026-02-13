---
title: "OpenClaw kosteneffizient betreiben – Modellkosten intelligent optimieren"
date: "2026-02-13"
description: "Wie Sie OpenClaw so konfigurieren, dass Sie maximale Leistung bei minimalen API-Kosten erhalten. Kontextgröße, Modellwahl, Fallback-Strategien und Best Practices für ein professionelles Setup."
slug: "openclaw-kosteneffizient-betreiben"
---

# OpenClaw kosteneffizient betreiben – meine Learnings nach einer Woche

---

## 🚀 Der Anfang: Das teure Abenteuer

Ich nutze OpenClaw jetzt seit ungefähr einer Woche. Am Anfang habe ich einfach meinen normalen Claude Code / Cloud-Token verwendet. Dazu hatte ich als Fallback **OpenAI Codex** konfiguriert. Das lief technisch super: Wenn Anthropic ins Rate-Limit lief, ist einfach OpenAI eingesprungen.

**Ergebnis:** Stabil und vermutlich **~20–30 € im Monat** 💸

### ⚠️ Das Problem

Aber so ist das nicht gedacht – und das mag Anthropic verständlicherweise nicht. Also habe ich auf einen sauberen API-Key umgestellt. 

**Und da wurde es plötzlich *richtig* teuer.**

> 💰 **Wenn man standardmäßig Opus als Primary-Modell laufen lässt** (was viele machen, weil „bestes Modell"), dann wird OpenClaw sehr schnell unbequem im Preis.

---

## 💡 Meine konkreten Empfehlungen

### 1️⃣ Heartbeat unbedingt günstiger konfigurieren

Standardmäßig läuft der Heartbeat oft viel zu aggressiv. Ich habe das geändert auf:

```yaml
Heartbeat-Modell: Haiku
Intervall: 60 Minuten (statt 30)
```

#### 🎯 Warum das wichtig ist

**Heartbeat braucht *keine* Intelligenz.** Der soll nur prüfen, ob der Agent noch lebt. 

- ❌ **Opus für Heartbeat**: Kompletter Overkill
- ✅ **Haiku für Heartbeat**: Perfekt ausreichend

**Allein das spart dauerhaft signifikante API-Kosten ein.**

---

### 2️⃣ Kontext aktiv begrenzen

Das war mein **größtes Learning**. Ich habe im System-Prompt explizit ergänzt:

> 💬 _„Nimm nicht automatisch den gesamten bisherigen Kontext mit. Verwende nur relevanten Kontext und lade zusätzlichen Kontext nur auf Nachfrage."_

#### 🔥 Das verändert das Verhalten massiv

OpenClaw schickt sonst bei längeren Sessions **absurd viele Tokens** mit. 

> ⚡ **Die Moral:** Es ist nicht die Modellwahl, sondern die **Kontextgröße**, die teuer wird.

**Das ist der Hidden Cost** – nicht primär das Modell selbst!

---

### 3️⃣ Modell-Hierarchie richtig wählen

Ich fahre aktuell diese Strategie:

```
🐇 Haiku → 🧠 Sonnet → 🚀 Opus
```

| Modell | Use Case | Kosten |
|--------|----------|--------|
| **Haiku** | Standard-Arbeitspferd | 💰 |
| **Sonnet** | Mittlere Komplexität | 💰💰 |
| **Opus** | Wirklich komplexe Tasks | 💰💰💰 |

#### 🎓 Kernidee

> **Du brauchst keinen Anwalt für Sekretariatsaufgaben.**

#### ✅ Wann Haiku völlig ausreicht:

- Kleine Code-Änderungen
- Dateioperationen  
- Git-Management
- Einfache Refactorings
- Routine-Automatisierung
- Heartbeat-Checks

#### 🚀 Wann du Opus brauchst:

- Komplexe Architektur-Entscheidungen
- Multi-File-Refactorings mit Abhängigkeiten
- Debugging schwieriger Bugs
- Strategische Code-Reviews

**Opus ist großartig** – aber als Default schlicht *unnötig teuer*.

---

### 4️⃣ Cloud Code clever weiterverwenden

Was ich weiterhin mache: **Claude Code lokal installieren** und meinem OpenClaw-Agent sagen:

> _„Benutze Cloud Code zum Coden."_

#### 🎨 Wie das funktioniert

Das funktioniert erstaunlich gut. Rechenintensive Coding-Aufgaben laufen dann über **Claude Code** – und **OpenClaw bleibt der Orchestrator**.

```
OpenClaw (Haiku) → "Ich brauche Code" → Claude Code (lokal)
                     ↓
                  Result zurück
                     ↓
              OpenClaw integriert
```

**Resultat:** 
- ✅ Massiv gesparte API-Kosten  
- ✅ Bessere Spezialisierung  
- ✅ Schnellere Code-Generierung

---

## 📊 Meine aktuelle Konfiguration

| Bereich | Einstellung | Grund |
|---------|------------|-------|
| **API-Zugang** | Sauberer API-Key | Kein Token-Sharing |
| **Heartbeat-Modell** | 🐇 Haiku | Keine Intelligenz nötig |
| **Heartbeat-Intervall** | ⏱️ 60 Minuten | Weniger Polls = weniger Kosten |
| **Standard-Modell** | 🐇 Haiku | 80% der Tasks brauchen nicht mehr |
| **Eskalation** | 🧠 Sonnet → 🚀 Opus | Nur bei echtem Bedarf |
| **Kontext** | 📉 Bewusst begrenzt | System-Prompt-Anweisung |
| **Coding** | 💻 Claude Code (lokal) | Intensive Tasks auslagern |

---

## 🎯 Fazit

**OpenClaw ist brutal stark.** Aber wenn man einfach Opus als Default laufen lässt, wird es teuer.

Mit meiner Konfiguration ist das Ganze deutlich entspannter – auch finanziell.

### 📈 Vorher vs. Nachher

- **Vorher (Opus Default):** ~100–150 € / Monat ❌
- **Nachher (Haiku + Smart Escalation):** ~20–30 € / Monat ✅

> 🔑 **Die wichtigste Erkenntnis:**  
> OpenClaw ist kein Autopilot. Man muss ihn konfigurieren wie ein **System** – nicht wie ein Spielzeug.

### 🛠️ Quick-Start Checklist

- [ ] Heartbeat auf Haiku umstellen
- [ ] Heartbeat-Intervall auf 60 min erhöhen
- [ ] System-Prompt mit Kontext-Begrenzung ergänzen
- [ ] Standard-Modell auf Haiku setzen
- [ ] Opus nur für komplexe Tasks reservieren
- [ ] Claude Code lokal für intensive Coding-Tasks nutzen

---

**Happy Optimizing! 🚀**
