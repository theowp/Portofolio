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
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { skills, certifications, interests } from '@/lib/data';
import { PageTransition } from '@/components/PageTransition';

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

const categoryLabels: Record<string, { label: string; color: string; description: string }> = {
  data: { label: 'Data & BI', color: 'var(--accent-primary)', description: 'Analyse et visualisation de données' },
  analytics: { label: 'Analytics', color: 'var(--accent-secondary)', description: 'Tracking et mesure de performance' },
  nocode: { label: 'No-Code & Automation', color: '#ffd93d', description: 'Outils d\'automatisation et productivité' },
  frontend: { label: 'Dev & IA', color: '#c084fc', description: 'Développement assisté par IA' },
  soft: { label: 'Soft Skills', color: '#ff6b6b', description: 'Compétences humaines et managériales' }
};

export default function CompetencesPage() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
              {'<Skills />'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mes <span className="gradient-text">Compétences</span>
            </h1>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
              Un mix de compétences Data, No-Code et IA pour transformer vos données en valeur business.
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `${categoryLabels[category].color}15`,
                      border: `1px solid ${categoryLabels[category].color}30`
                    }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ background: categoryLabels[category].color }}
                    />
                  </div>
                  <div>
                    <h2 
                      className="text-xl font-bold"
                      style={{ color: categoryLabels[category].color }}
                    >
                      {categoryLabels[category].label}
                    </h2>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {categoryLabels[category].description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => {
                    const Icon = skillIcons[skill.name] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ 
                          scale: 1.03,
                          borderColor: categoryLabels[category].color
                        }}
                        className="group glass-card p-4 flex items-center gap-3 cursor-default"
                      >
                        <Icon 
                          className="w-5 h-5 shrink-0"
                          style={{ color: categoryLabels[category].color }}
                        />
                        <span className="font-medium text-[var(--foreground)] truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="gradient-text">Certifications & Diplômes</span>
              </h2>
              <p className="text-[var(--foreground-muted)]">
                Formations complémentaires validées
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">
                    {cert.name}
                  </div>
                  <div className="text-sm text-[var(--foreground-muted)] mb-3">
                    {cert.description}
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground-subtle)]">
                    {cert.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="gradient-text">Centres d'intérêt</span>
              </h2>
              <p className="text-[var(--foreground-muted)]">
                Ce qui me passionne au quotidien
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-secondary)] transition-all duration-300"
                >
                  <span className="text-xl">{interest.emoji}</span>
                  <span className="font-medium">{interest.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Water-polo highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-secondary)]/5 to-transparent" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-[var(--accent-secondary)] mb-2">
                    3x Champion Île-de-France
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Water-polo • 12 ans de compétition • Capitaine d'équipe
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[var(--foreground-subtle)]">
                    <span>🤽 Compétition</span>
                    <span>👥 Leadership</span>
                    <span>🎯 Persévérance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
