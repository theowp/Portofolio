'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Leaf, Factory, ArrowRightLeft, BarChart3, Search, Database, Shield } from 'lucide-react';
import { projects } from '@/lib/data';
import { PageTransition } from '@/components/PageTransition';

// Visual mockup of Interpol Scraper
function InterpolScraperVisual() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] border border-[#3b3b5c]/30 p-5">
      <div className="relative flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#ef4444]/20 flex items-center justify-center border border-[#ef4444]/30">
            <Shield className="w-4 h-4 text-[#ef4444]" />
          </div>
          <div className="font-bold text-white font-mono text-sm">INTERPOL</div>
        </div>
        <span className="text-xs text-[#22c55e] font-mono">● ONLINE</span>
      </div>

      <div className="bg-black/50 rounded-lg p-2 mb-3 font-mono text-xs border border-white/10">
        <div className="text-[#22c55e]">$ extracting 1,247 records...</div>
        <div className="text-[#22c55e]">[SUCCESS] ✓</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#ef4444]/10 rounded p-2 border border-[#ef4444]/20 text-center">
          <div className="text-sm font-bold text-white">194</div>
          <div className="text-xs text-white/50">Pays</div>
        </div>
        <div className="bg-[#3b82f6]/10 rounded p-2 border border-[#3b82f6]/20 text-center">
          <div className="text-sm font-bold text-white">1.2K</div>
          <div className="text-xs text-white/50">Fiches</div>
        </div>
        <div className="bg-[#22c55e]/10 rounded p-2 border border-[#22c55e]/20 text-center">
          <div className="text-sm font-bold text-white">15</div>
          <div className="text-xs text-white/50">Tables</div>
        </div>
      </div>
    </div>
  );
}

// Visual mockup of Carbon Balance dashboard
function CarbonBalanceVisual() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1a2f1a] to-[#0d1f0d] border border-[#2d5a2d]/30 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#4ade80]/20 flex items-center justify-center">
          <Leaf className="w-4 h-4 text-[#4ade80]" />
        </div>
        <div className="font-bold text-white text-sm">CARBON BALANCE</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="bg-[#4ade80]/10 rounded p-2 border border-[#4ade80]/20">
          <div className="text-xs text-[#4ade80]/70">Quota</div>
          <div className="text-sm font-bold text-[#4ade80]">568K</div>
        </div>
        <div className="bg-[#fbbf24]/10 rounded p-2 border border-[#fbbf24]/20">
          <div className="text-xs text-[#fbbf24]/70">Utilisé</div>
          <div className="text-sm font-bold text-[#fbbf24]">506K</div>
        </div>
        <div className="bg-white/5 rounded p-2 border border-white/10">
          <div className="text-xs text-white/50">Restant</div>
          <div className="text-sm font-bold text-white">68K</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-1 text-xs">
        <span className="text-red-400">🏭-12</span>
        <ArrowRightLeft className="w-3 h-3 text-[#4ade80]" />
        <span className="text-[#4ade80]">+12🏭</span>
      </div>
    </div>
  );
}

export default function ProjetsPage() {
  const interpolProject = projects.find(p => p.id === 'interpol');
  const carbonProject = projects.find(p => p.id === '0');
  const otherProjects = projects.filter(p => !['interpol', '0'].includes(p.id));

  return (
    <PageTransition>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
              {'<Projects />'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h1>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
              Une sélection de projets Data, IA et analyse qui illustrent mon expertise.
            </p>
          </motion.div>

          {/* Featured Project 1 - Interpol Scraper */}
          {interpolProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="glass-card p-6 md:p-8 relative overflow-hidden border-[#ef4444]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/50 via-transparent to-[#1a1a2e]/50 pointer-events-none" />
                
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#ef4444] bg-[#ef4444]/10 rounded-full border border-[#ef4444]/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
                  </span>
                  Projet Data
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <InterpolScraperVisual />
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/20">
                      <Search className="w-4 h-4 text-[#ef4444]" />
                      <span className="text-sm font-medium text-[#ef4444]">Web Scraping</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className="text-[#ef4444]">Interpol</span> Data Scraper
                    </h2>
                    <p className="text-[var(--foreground-muted)] mb-4 italic">
                      "Extraction et structuration de données publiques"
                    </p>
                    
                    <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                      {interpolProject.description}
                    </p>

                    <div className="mb-6 px-5 py-4 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🔍</span>
                        <div>
                          <div className="text-2xl font-bold text-[#ef4444]">
                            {interpolProject.impact}
                          </div>
                          <div className="text-sm text-[var(--foreground-muted)]">
                            Données structurées en base SQL
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: Search, text: 'Scraping automatisé' },
                        { icon: Database, text: 'Stockage SQL' },
                        { icon: BarChart3, text: 'Visualisation' },
                        { icon: Shield, text: 'Données publiques' }
                      ].map((feature) => (
                        <div key={feature.text} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                          <feature.icon className="w-4 h-4 text-[#ef4444]" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {interpolProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#0a0a1a] border border-[#ef4444]/30 text-[#fca5a5]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {interpolProject.demoUrl && (
                      <motion.a
                        href={interpolProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#ef4444] hover:bg-[#dc2626] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir la présentation
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Featured Project 2 - Carbon Balance */}
          {carbonProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-16"
            >
              <div className="glass-card p-6 md:p-8 relative overflow-hidden border-[#4ade80]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f1a]/50 via-transparent to-[#0d1f0d]/50 pointer-events-none" />
                
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#4ade80] bg-[#4ade80]/10 rounded-full border border-[#4ade80]/30">
                  <Leaf className="w-4 h-4" />
                  Full-Stack
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-1 lg:order-1">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
                      <Leaf className="w-4 h-4 text-[#4ade80]" />
                      <span className="text-sm font-medium text-[#4ade80]">Comptabilité Carbone</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className="text-[#4ade80]">Carbon</span> Balance
                    </h2>
                    <p className="text-[var(--foreground-muted)] mb-4 italic">
                      "Une solution complète pour la gestion des émissions"
                    </p>
                    
                    <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                      {carbonProject.description}
                    </p>

                    <div className="mb-6 px-5 py-4 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/20">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🌱</span>
                        <div>
                          <div className="text-2xl font-bold text-[#4ade80]">
                            {carbonProject.impact}
                          </div>
                          <div className="text-sm text-[var(--foreground-muted)]">
                            Par rapport aux méthodes Excel traditionnelles
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: Factory, text: 'Scopes 1, 2 & 3' },
                        { icon: ArrowRightLeft, text: 'Transferts inter-filiales' },
                        { icon: BarChart3, text: 'Dashboard temps réel' },
                        { icon: Database, text: 'Pipeline de données' }
                      ].map((feature) => (
                        <div key={feature.text} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                          <feature.icon className="w-4 h-4 text-[#4ade80]" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {carbonProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#0d1f0d] border border-[#4ade80]/30 text-[#86efac]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {carbonProject.demoUrl && (
                      <motion.a
                        href={carbonProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#4ade80] hover:bg-[#22c55e] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir la présentation
                      </motion.a>
                    )}
                  </div>

                  <div className="order-2 lg:order-2">
                    <CarbonBalanceVisual />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px flex-grow bg-gradient-to-r from-[var(--accent-primary)]/50 to-transparent" />
                <h3 className="text-lg font-semibold text-[var(--foreground-muted)]">Autres projets</h3>
                <div className="h-px flex-grow bg-gradient-to-l from-[var(--accent-secondary)]/50 to-transparent" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="group glass-card p-6 relative overflow-hidden flex flex-col"
                  >
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      {project.impact && (
                        <div className="mb-4 px-3 py-2 rounded-lg bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10">
                          <span className="text-xs font-mono text-[var(--accent-primary)]">📊 {project.impact}</span>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tech-badge text-xs py-1 px-2">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-16"
          >
            <p className="text-[var(--foreground-muted)] mb-4">
              Intéressé par une collaboration ?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[var(--background)] bg-[var(--accent-primary)]"
            >
              Discutons de votre projet
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
