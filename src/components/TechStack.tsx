'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  Code2, 
  BarChart3,
  Zap,
  Users,
  Brain,
  PieChart,
  Table2,
  Workflow,
  MessageSquare,
  Layout,
  Settings,
  TrendingUp,
  Sparkles,
  Heart
} from 'lucide-react';
import { skills, certifications, interests } from '@/lib/data';

// Icon mapping for skills
const skillIcons: Record<string, React.ElementType> = {
  'Python': Code2,
  'SQL': Database,
  'Power BI': BarChart3,
  'Excel': Table2,
  'Dataiku': Brain,
  'Google Analytics': TrendingUp,
  'Business Analytics': PieChart,
  'Data Visualisation': BarChart3,
  'Airtable': Table2,
  'Notion': Layout,
  'Zapier': Zap,
  'Hubspot': MessageSquare,
  'Cursor': Sparkles,
  'ChatGPT': Brain,
  'Next.js': Code2,
  'Tailwind CSS': Code2,
  'Leadership': Users,
  'Gestion de crise': Zap,
  'Communication': MessageSquare,
  'Coordination d\'équipe': Users
};

const categoryLabels: Record<string, { label: string; color: string }> = {
  data: { label: 'Data & BI', color: 'var(--accent-primary)' },
  analytics: { label: 'Analytics', color: 'var(--accent-secondary)' },
  nocode: { label: 'No-Code & Automation', color: '#ffd93d' },
  frontend: { label: 'Dev & IA', color: '#c084fc' },
  soft: { label: 'Soft Skills', color: '#ff6b6b' }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export function TechStack() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-[var(--accent-primary)] border border-[var(--border-accent)] rounded-full bg-[var(--surface)]">
            {'<Skills />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="gradient-text">Techniques</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Un mix de compétences Data, No-Code et IA pour transformer vos données en valeur business.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="h-px flex-grow max-w-[60px]"
                  style={{ background: categoryLabels[category].color }}
                />
                <h3 
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: categoryLabels[category].color }}
                >
                  {categoryLabels[category].label}
                </h3>
                <div 
                  className="h-px flex-grow"
                  style={{ background: `linear-gradient(to right, ${categoryLabels[category].color}, transparent)` }}
                />
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {categorySkills.map((skill) => {
                  const Icon = skillIcons[skill.name] || Code2;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: categoryLabels[category].color
                      }}
                      className="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] backdrop-blur-sm cursor-default transition-all duration-300 hover:bg-[var(--surface-hover)]"
                    >
                      {/* Icon */}
                      <Icon 
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: categoryLabels[category].color }}
                      />
                      
                      {/* Skill Name */}
                      <span className="font-medium text-[var(--foreground)]">
                        {skill.name}
                      </span>

                      {/* Hover glow */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          boxShadow: `0 0 20px ${categoryLabels[category].color}20`
                        }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            <span className="gradient-text">Certifications & Diplômes</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -4 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-[var(--accent-primary)] mb-1">
                  {cert.name}
                </div>
                <div className="text-xs text-[var(--foreground-muted)] mb-2">
                  {cert.description}
                </div>
                <div className="text-xs font-mono text-[var(--foreground-subtle)]">
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            <span className="gradient-text">Centres d'intérêt</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-secondary)] transition-all duration-300"
              >
                <span className="text-xl">{interest.emoji}</span>
                <span className="font-medium text-[var(--foreground)]">{interest.name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Water-polo highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30">
              <span className="text-2xl">🏆</span>
              <span className="text-sm text-[var(--foreground-muted)]">
                <span className="font-semibold text-[var(--accent-secondary)]">3x Champion Île-de-France</span> en Water-polo • 12 ans de compétition • Capitaine d'équipe
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
