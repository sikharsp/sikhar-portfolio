import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    icon: Cpu,
    title: 'Performance',
    description: 'Optimizing every millisecond for the smoothest user experience.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Building inclusive experiences that work for everyone.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technologies.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 glass-card neon-border rounded-full text-sm font-body text-muted-foreground mb-6">
              Who I Am
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">About</span> Me
            </h2>
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with a deep love for creating immersive digital experiences. 
                Based in the intersection of creativity and technology, I specialize in building applications 
                that are not just functional, but truly memorable.
              </p>
              <p>
                With expertise spanning from React and Node.js to Three.js and WebGL, I bring ideas to life 
                through clean code and innovative design. My journey in tech has been driven by curiosity 
                and a relentless pursuit of excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving deep into the latest in AI and machine learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-card neon-border rounded-2xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
