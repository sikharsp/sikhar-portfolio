import { Suspense } from 'react';
import Scene3D from '@/components/3d/Scene3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

function LoadingFallback() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="font-display text-sm text-muted-foreground animate-pulse">Loading Experience...</p>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <Scene3D />
      </Suspense>
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
