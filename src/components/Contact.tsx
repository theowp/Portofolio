'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Send, Phone, Calendar } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: 'var(--accent-primary)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connectons-nous',
      href: socialLinks.linkedin,
      color: '#0077b5'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Voir mon code',
      href: socialLinks.github,
      color: '#ffffff'
    }
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(0, 255, 136, 0.05) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
            {'<Contact />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Vous cherchez un profil Data & IA pour votre équipe ? Discutons de votre projet d'alternance !
          </p>
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Disponible pour une alternance</h3>
                <p className="text-sm text-[var(--foreground-muted)]">À partir de Septembre 2026 • Rythme 4j/1j</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
              </span>
              Ouvert aux opportunités
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-card p-6 text-center"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: `${link.color}10`,
                  border: `1px solid ${link.color}30`
                }}
              >
                <link.icon 
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: link.color }}
                />
              </div>

              {/* Label */}
              <h3 className="font-semibold mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                {link.label}
              </h3>

              {/* Value */}
              <p className="text-sm text-[var(--foreground-muted)] flex items-center justify-center gap-1">
                {link.value}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
            
            <div className="relative z-10">
              <Send className="w-10 h-10 mx-auto mb-6 text-[var(--accent-primary)]" />
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Envie d'en savoir plus ?
              </h3>
              
              <p className="text-[var(--foreground-muted)] mb-8">
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
                  href={`tel:${personalInfo.phone?.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  {personalInfo.phone}
                </motion.a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[var(--foreground-subtle)]">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
