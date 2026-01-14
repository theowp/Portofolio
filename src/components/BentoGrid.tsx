'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '@/lib/data';

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export function BentoGrid() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
            {'<Projects />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="gradient-text">Récents</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Une sélection de projets qui illustrent mon expertise en Data Engineering et développement web.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {projects.map((project, index) => {
            // Determine grid span based on featured status and index
            const isFeatured = project.featured;
            const isWide = isFeatured && index % 3 === 0;
            const isTall = isFeatured && index % 4 === 1;

            return (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className={`
                  group relative glass-card p-6 flex flex-col
                  ${isWide ? 'md:col-span-2' : ''}
                  ${isTall ? 'md:row-span-2' : ''}
                `}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 136, 0.06), transparent 40%)'
                  }}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 text-xs font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 rounded-md border border-[var(--accent-primary)]/20">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Impact metric */}
                  {project.impact && (
                    <div className="mb-4 px-3 py-2 rounded-lg bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10">
                      <span className="text-sm font-mono text-[var(--accent-primary)]">
                        📊 {project.impact}
                      </span>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--border)]">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent-primary)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
