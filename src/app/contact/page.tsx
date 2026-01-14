'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Calendar, ArrowUpRight, Send } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/data';
import { PageTransition } from '@/components/PageTransition';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: 'var(--accent-primary)',
      description: 'Réponse sous 24h'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Théo Alasseur-Dejoie',
      href: socialLinks.linkedin,
      color: '#0077b5',
      description: 'Connectons-nous'
    }
  ];

  return (
    <PageTransition>
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
              {'<Contact />'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Travaillons <span className="gradient-text">Ensemble</span>
            </h1>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
              Vous cherchez un profil Data & IA pour votre équipe ? Discutons !
            </p>
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-primary)]/20 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-[var(--foreground)]">
                    Recherche d'alternance
                  </h2>
                  <p className="text-[var(--foreground-muted)]">
                    À partir de <span className="text-[var(--accent-primary)] font-semibold">Septembre 2026</span> • Rythme 4j/1j
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-primary)]"></span>
                </span>
                Ouvert aux opportunités
              </div>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group glass-card p-6 flex items-start gap-4"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: `${method.color}15`,
                    border: `1px solid ${method.color}30`
                  }}
                >
                  <method.icon 
                    className="w-5 h-5"
                    style={{ color: method.color }}
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold group-hover:text-[var(--accent-primary)] transition-colors">
                      {method.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[var(--foreground)] truncate mb-1">
                    {method.value}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    {method.description}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center"
              >
                <Send className="w-7 h-7 text-[var(--background)]" />
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Envie d'en savoir plus ?
              </h2>
              
              <p className="text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
                N'hésitez pas à me contacter pour discuter de vos projets Data & IA ou d'opportunités d'alternance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={`mailto:${socialLinks.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[var(--background)] bg-[var(--accent-primary)] hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Envoyer un email
                </motion.a>
                
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-[var(--border)] hover:border-[#0077b5] hover:text-[#0077b5] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--foreground-muted)]"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="hidden sm:block text-[var(--foreground-subtle)]">•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--accent-secondary)]" />
              <span>MSc AI Applied to Business @ Eugenia School</span>
            </div>
          </motion.div>

          {/* Social proof / Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-[var(--foreground-muted)] italic max-w-2xl mx-auto">
              "Passionné par la transformation de données brutes en insights actionnables."
            </blockquote>
            <div className="mt-4 text-sm text-[var(--foreground-subtle)]">
              — {personalInfo.name}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
