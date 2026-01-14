'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Calendar, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { personalInfo, socialLinks, projects } from '@/lib/data';
import { PageTransition } from '@/components/PageTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 136, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Alternance badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 py-3 mb-8 rounded-2xl border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
              </span>
              <span className="text-sm text-[var(--accent-primary)] font-semibold">
                Recherche Alternance
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[var(--border)]" />
            <div className="flex items-center gap-4 text-sm text-[var(--foreground-muted)]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Septembre 2026
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">
                4j / 1j
              </span>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="block text-[var(--foreground)]">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-2xl md:text-4xl font-bold gradient-text-animated">
              {personalInfo.title}
            </span>
            <div className="flex items-center justify-center gap-2 mt-3 text-[var(--foreground-muted)]">
              <GraduationCap className="w-4 h-4 text-[var(--accent-secondary)]" />
              <span className="text-sm md:text-base">{personalInfo.subtitle}</span>
              <span className="text-[var(--foreground-subtle)]">•</span>
              <span className="text-sm font-medium text-[var(--accent-secondary)]">Eugenia School</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-10 text-sm text-[var(--foreground-subtle)]"
          >
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/projets">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-[var(--background)] bg-[var(--accent-primary)] overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 cursor-pointer"
              >
                Me contacter
              </motion.div>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
            target="_blank"
            rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Projets <span className="gradient-text">à la une</span>
              </h2>
              <p className="text-[var(--foreground-muted)] mt-2">
                Quelques réalisations récentes
              </p>
            </div>
            <Link href="/projets">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-[var(--accent-primary)] font-medium cursor-pointer"
              >
                Voir tout
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  {project.isNew ? (
                    <>
                      <span className="text-sm">🆕</span>
                      <span className="text-xs font-medium text-[#00ff88]">Nouveau projet</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="text-xs font-medium text-[var(--accent-primary)]">Featured</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge text-xs py-1 px-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/projets', label: 'Projets', count: '6+', icon: '📁' },
              { href: '/competences', label: 'Compétences', count: '20+', icon: '🛠️' },
              { href: '/parcours', label: 'Expériences', count: '4', icon: '💼' },
              { href: '/contact', label: 'Contact', count: '→', icon: '✉️' },
            ].map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'var(--accent-primary)' }}
                  className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-[var(--accent-primary)] font-mono">{item.count}</div>
                </motion.div>
              </Link>
            ))}
          </div>
    </div>
      </section>
    </PageTransition>
  );
}
