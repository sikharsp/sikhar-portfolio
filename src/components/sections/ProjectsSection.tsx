import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
{
  title: 'Quick Meals',
  description: 'A user-friendly online food ordering app with fast navigation, responsive design, and a delicious visual showcase.',
  tech: ['React', 'Vite', 'Tailwind CSS', 'PHP'],
  image: 'https://trangotech.com/mobile/wp-content/uploads/2025/01/quick-meals.webp',
  github: 'https://github.com/sikharsp/food-ordering', 
  demo: 'https://food-ordering-beta-taupe.vercel.app/',
},
{
  title: 'Future Mail',
  description: 'A modern email application built for performance and scalability. Features clean UI, enhanced user experience, and efficient mail handling.',
  tech: ['React', 'Vite', 'Tailwind CSS', 'PHP'],
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAKu2ZtaYsDG6HknODTZKiejJvAG0hDP1WA&s',
  github: 'https://github.com/sikharsp/future-mail',
  demo: 'https://future-mail-psi.vercel.app/',
}

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card neon-border rounded-full text-sm font-body text-muted-foreground mb-6">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Projects
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating innovative digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group glass-card neon-border rounded-2xl overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-body bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
