'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Check, Lightbulb, ArrowRight, Shield, Server, Users, Eye } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

function HeroBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="mb-12">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent 
                     border border-cyan-500/20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{block.title}</h2>
        <p className="text-lg text-slate-300 leading-relaxed">{block.content}</p>
      </div>
    </motion.div>
  );
}

function WarningBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="mb-8">
      <div className="flex gap-4 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-amber-400 font-semibold">{block.title}</span>
          <p className="mt-2 text-slate-300">{block.content}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SectionBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
          <span className="text-cyan-400 font-bold text-sm">#</span>
        </span>
        {block.title}
      </h2>
      
      <p className="text-slate-300 text-lg leading-relaxed mb-6">{block.content}</p>
      
      {block.highlight && (
        <div className="my-6 p-4 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-400">
          <Lightbulb className="w-5 h-5 text-cyan-400 mb-2" />
          <p className="text-cyan-100 font-medium">{block.highlight}</p>
        </div>
      )}

      {block.warning && (
        <div className="my-6 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400">
          <p className="text-amber-200">{block.warning}</p>
        </div>
      )}

      {block.keyPoint && (
        <div className="my-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <p className="text-purple-200 font-medium">{block.keyPoint}</p>
        </div>
      )}

      {block.points && (
        <div className="grid sm:grid-cols-2 gap-3 my-6">
          {block.points.map((point, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
              <span className="text-lg">{point.icon}</span>
              <span className="text-slate-300">{point.text}</span>
            </div>
          ))}
        </div>
      )}

      {block.quote && (
        <blockquote className="my-8 pl-6 border-l-4 border-cyan-500/50 py-2">
          <p className="text-xl text-white italic leading-relaxed">"{block.quote.text}"</p>
          <cite className="block mt-3 text-sm text-cyan-400 not-italic">— {block.quote.source}</cite>
        </blockquote>
      )}

      {block.table && (
        <div className="my-8 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-white/[0.05]">
                {block.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-sm text-slate-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {block.subsections && block.subsections.map((sub, i) => (
        <div key={i} className="mt-8 mb-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">{sub.title}</h3>
          <ul className="space-y-2">
            {sub.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-slate-300">
                <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {block.result && (
        <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-green-300 font-medium">{block.result}</p>
        </div>
      )}

      {block.alternatives && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {block.alternatives.map((alt, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/20
                                    hover:bg-white/[0.05] transition-colors">
              <h4 className="text-cyan-400 font-semibold mb-2">{alt.category}</h4>
              <p className="text-slate-400 text-sm">{alt.tools}</p>
            </div>
          ))}
        </div>
      )}

      {block.challenges && (
        <div className="space-y-3 my-6">
          {block.challenges.map((challenge, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center 
                              text-amber-400 text-sm font-bold shrink-0">
                {i + 1}
              </span>
              <span className="text-slate-300">{challenge}</span>
            </div>
          ))}
        </div>
      )}

      {block.pillars && (
        <div className="grid sm:grid-cols-3 gap-4 my-8">
          {block.pillars.map((pillar, i) => {
            const icons = [Shield, Server, Eye];
            const Icon = icons[i] || Lightbulb;
            return (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 
                                      border border-cyan-500/20 text-center">
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{pillar.title}</h4>
                <p className="text-slate-400 text-sm">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      )}

      {block.steps && (
        <div className="my-8">
          <div className="grid gap-4">
            {block.steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center
                               text-cyan-400 font-bold text-lg shrink-0"
                >
                  {step.num}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {block.note && (
        <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-blue-200">{block.note}</p>
        </div>
      )}
    </motion.div>
  );
}

function ComparisonBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="my-12">
      <h3 className="text-xl font-bold text-white mb-6">{block.title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="text-red-400 font-semibold">{block.before.label}</span>
          </div>
          <p className="text-red-200 font-medium text-lg">{block.before.value}</p>
        </div>
        <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-green-400 font-semibold">{block.after.label}</span>
          </div>
          <p className="text-green-200 font-medium text-lg">{block.after.value}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ChecklistBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="my-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">{block.title}</h3>
      <div className="space-y-3">
        {block.items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
            <div className="w-6 h-6 rounded border-2 border-slate-600 flex items-center justify-center shrink-0
                           hover:border-cyan-400 transition-colors">
              <Check className="w-3.5 h-3.5 text-cyan-400 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CtaBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="my-12">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/10 
                     border border-cyan-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">{block.title}</h3>
        <p className="text-slate-300 text-lg mb-6">{block.content}</p>

        {block.steps && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {block.steps.map((step, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center
                                 text-cyan-300 font-bold text-sm mx-auto mb-3"
                >
                  {step.num}
                </span>
                <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                <p className="text-slate-400 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ConclusionBlock({ block }) {
  return (
    <motion.div variants={itemVariants} className="my-12">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 
                     border border-cyan-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        <h2 className="text-2xl font-bold text-white mb-4 relative">
          {block.title}
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6 relative">
          {block.content}
        </p>

        {block.signature && (
          <p className="text-cyan-400 font-medium relative">{block.signature}</p>
        )}
      </div>
    </motion.div>
  );
}

const blockComponents = {
  hero: HeroBlock,
  warning: WarningBlock,
  section: SectionBlock,
  comparison: ComparisonBlock,
  checklist: ChecklistBlock,
  cta: CtaBlock,
  conclusion: ConclusionBlock
};

export default function BlogContent({ content }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {content.map((block, index) => {
        const Component = blockComponents[block.type] || SectionBlock;
        return <Component key={index} block={block} />;
      })}
    </motion.div>
  );
}
