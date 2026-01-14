'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { experiences, education } from '@/lib/data';

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 px-6" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
            {'<Parcours />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="gradient-text">Parcours</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Une évolution constante entre Data, Business et terrain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-xl font-bold">Expérience Professionnelle</h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Animated Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]">
                <motion.div
                  style={{ height: lineHeight }}
                  className="w-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                />
              </div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative pl-8"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="timeline-dot"
                      />
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="glass-card p-5 relative group"
                    >
                      {/* Period badge */}
                      <div className="flex items-center gap-2 text-xs text-[var(--accent-primary)] mb-2">
                        <Calendar className="w-3 h-3" />
                        <span className="font-mono">{exp.period}</span>
                      </div>

                      {/* Title & Company */}
                      <h4 className="text-lg font-bold mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                        {exp.title}
                      </h4>
                      <div className="text-sm text-[var(--foreground-muted)] mb-3">
                        {exp.company}
                      </div>

                      {/* Description */}
                      <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-badge text-xs py-1 px-2">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[var(--accent-secondary)]" />
              </div>
              <h3 className="text-xl font-bold">Formation</h3>
            </motion.div>

            {/* Education Items */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 relative group"
                >
                  {/* Current indicator for first item */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 text-xs font-medium text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 rounded-md border border-[var(--accent-secondary)]/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-secondary)]"></span>
                      </span>
                      En cours
                    </div>
                  )}

                  {/* Period */}
                  <div className="text-xs font-mono text-[var(--accent-secondary)] mb-2">
                    {edu.period}
                  </div>

                  {/* School & Degree */}
                  <h4 className="text-lg font-bold mb-1 group-hover:text-[var(--accent-secondary)] transition-colors">
                    {edu.school}
                  </h4>
                  <div className="text-sm text-[var(--foreground)] mb-3">
                    {edu.degree}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Key courses highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-secondary)]/5 to-[var(--accent-primary)]/5 border border-[var(--border)]"
            >
              <h4 className="text-sm font-semibold mb-4 text-[var(--accent-secondary)]">
                📚 Cours principaux MSc AI
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Business Analytics', 'Data Visualisation', 'CRM', 'No-Code', 'Marketing Analytique'].map((course) => (
                  <span key={course} className="px-3 py-1.5 text-xs rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground-muted)]">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
