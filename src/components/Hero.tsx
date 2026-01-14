'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="block text-[var(--foreground)]">{personalInfo.name}</span>
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
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
          className="text-base md:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8 leading-relaxed"
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
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl font-semibold text-[var(--background)] bg-[var(--accent-primary)] overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Voir mes projets
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            href={`mailto:${socialLinks.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
          >
            Me contacter
          </motion.a>
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={floatingAnimation}
          className="flex flex-col items-center gap-2 text-[var(--foreground-subtle)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
