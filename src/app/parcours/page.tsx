'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin, ArrowRight, Building2, Award, BookOpen, Users, TrendingUp, Sparkles, Code, Brain, BarChart3, Heart, Music, Camera, Waves, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';
import { experiences, education, certifications, interests } from '@/lib/data';
import { PageTransition } from '@/components/PageTransition';

// Animated progress bar component
function ProgressBar({ progress, color, delay }: { progress: number; color: string; delay: number }) {
  return (
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function ParcoursPage() {
  return (
    <PageTransition>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with animated background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[var(--accent-primary)]/10 via-[var(--accent-secondary)]/10 to-[var(--accent-primary)]/10 blur-3xl rounded-full" />
            </div>
            
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
              {'<Journey />'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mon <span className="gradient-text">Parcours</span>
            </h1>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
              Une évolution constante entre Data, Business et terrain.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { value: '4', label: 'Expériences', icon: Briefcase, color: '#3b82f6' },
              { value: '2', label: 'Diplômes', icon: GraduationCap, color: '#8b5cf6' },
              { value: '5+', label: 'Années d\'études', icon: BookOpen, color: '#22c55e' },
              { value: '∞', label: 'Curiosité', icon: Sparkles, color: '#f59e0b' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 text-center group cursor-default"
              >
                <div 
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* ===================== FORMATION SECTION ===================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/20">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Formation</h2>
                <p className="text-[var(--foreground-muted)]">Mon parcours académique</p>
              </div>
            </div>

            {/* Education Cards - Large Visual */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* MSc Card - Featured */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a3e] via-[#0f0f2d] to-[#1a1a3e] border border-[#8b5cf6]/30 p-8 md:p-10">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5cf6]/10 blur-3xl rounded-full" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6366f1]/10 blur-3xl rounded-full" />
                  
                  {/* Current badge */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full border border-[#8b5cf6]/30 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]"></span>
                    </span>
                    En cours
                  </div>

                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      {/* School Logo Placeholder */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">E</span>
                        </div>
                        <div>
                          <div className="text-xs font-mono text-[#a5b4fc] mb-1">2025 - 2027</div>
                          <h3 className="text-2xl font-bold text-white">Eugenia School</h3>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 mb-6">
                        <Award className="w-4 h-4 text-[#a5b4fc]" />
                        <span className="text-[#a5b4fc] font-semibold">MSc AI Applied to Business</span>
                      </div>

                      <p className="text-white/70 leading-relaxed mb-6">
                        Formation d'excellence combinant Intelligence Artificielle et stratégie Business. 
                        Apprentissage des outils et méthodes pour transformer la data en décisions.
                      </p>

                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Paris
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Alternance
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-[#a5b4fc] mb-4 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Programme & Compétences
                      </h4>
                      
                      {[
                        { name: 'Business Analytics', progress: 90, icon: BarChart3 },
                        { name: 'Data Visualisation', progress: 85, icon: TrendingUp },
                        { name: 'CRM & Marketing', progress: 80, icon: Users },
                        { name: 'No-Code & Automation', progress: 95, icon: Code },
                        { name: 'AI & Machine Learning', progress: 75, icon: Brain }
                      ].map((skill, i) => (
                        <motion.div 
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-white/80">
                              <skill.icon className="w-3.5 h-3.5 text-[#8b5cf6]" />
                              {skill.name}
                            </div>
                            <span className="text-[#a5b4fc] font-mono text-xs">{skill.progress}%</span>
                          </div>
                          <ProgressBar progress={skill.progress} color="#8b5cf6" delay={0.8 + i * 0.1} />
                        </motion.div>
                      ))}

                      <div className="flex flex-wrap gap-2 mt-6">
                        {['Python', 'SQL', 'Power BI', 'Hubspot', 'Dataiku'].map((tool) => (
                          <span key={tool} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dauphine Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="lg:col-span-1"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a5f] via-[#0a1628] to-[#1e3a5f] border border-[#3b82f6]/30 p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/10 blur-2xl rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center">
                        <span className="text-lg font-bold text-[#60a5fa]">D</span>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#60a5fa]">2021 - 2025</div>
                        <h3 className="font-bold text-white">Université Paris-Dauphine</h3>
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 inline-block mb-4">
                      <span className="text-sm text-[#60a5fa]">Licence Sciences des Organisations</span>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Formation d'excellence combinant économie, gestion et outils quantitatifs. 
                      Développement d'une vision stratégique et analytique, capacités de synthèse 
                      et expression orale à travers de nombreux projets en groupe.
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {['Analyse stratégique', 'Macroéconomie', 'Finance', 'Statistiques', 'Expression orale'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/50">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-4 right-4 text-4xl opacity-10">🎓</div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications Card - Real certifications from CV */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="lg:col-span-1"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1f1a] to-[#1a0d0d] border border-[#ef4444]/30 p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/10 blur-2xl rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ef4444]/20 border border-[#ef4444]/30 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-[#f87171]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Certifications</h3>
                        <p className="text-xs text-[#f87171]">Secourisme & Sauvetage</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {certifications.map((cert, i) => (
                        <motion.div 
                          key={cert.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + i * 0.1 }}
                          className="p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-white">{cert.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#ef4444]/20 text-[#f87171]">
                              {cert.year}
                            </span>
                          </div>
                          <p className="text-xs text-white/50">{cert.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="absolute bottom-4 right-4 text-4xl opacity-10">🚒</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interests Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#fbbf24]" />
                </div>
                <h3 className="text-xl font-bold">Centres d'intérêt</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {interests.map((interest, i) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 text-center group cursor-default"
                  >
                    <div className="text-3xl mb-2">{interest.emoji}</div>
                    <div className="text-sm font-semibold text-white mb-1">{interest.name}</div>
                    <div className="text-xs text-[var(--foreground-muted)] leading-tight">{interest.detail}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ===================== EXPERIENCE SECTION ===================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-[#3b82f6]/20">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Expérience Professionnelle</h2>
                <p className="text-[var(--foreground-muted)]">Mon parcours en entreprise</p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-6 top-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.15, type: "spring" }}
                        className={`w-4 h-4 rounded-full border-2 ${
                          index === 0 
                            ? 'bg-[#3b82f6] border-[#3b82f6] shadow-[0_0_15px_#3b82f6]' 
                            : 'bg-[var(--background)] border-[#8b5cf6]'
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 8, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass-card p-6 relative overflow-hidden group"
                    >
                      {/* Current badge */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22c55e]"></span>
                          </span>
                          En cours
                        </div>
                      )}

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-primary)]">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--accent-primary)] transition-colors pr-20">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 text-[var(--foreground-muted)] mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-badge text-xs py-1.5 px-3">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Decorative gradient */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--accent-primary)]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/10 via-[var(--surface)] to-[var(--accent-secondary)]/10 border border-[var(--border)] p-10 md:p-14">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Prêt à collaborer ?
                </h3>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
                  Je suis disponible pour une alternance à partir de <span className="text-[var(--accent-primary)] font-semibold">Septembre 2026</span>.
                </p>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] shadow-lg shadow-[var(--accent-primary)]/20 cursor-pointer"
                  >
                    Me contacter
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
