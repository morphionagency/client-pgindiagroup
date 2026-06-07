import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | PG India Group',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-soft-ivory flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-forest-green/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-olive/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Custom SVG: Leaf forming a question mark */}
        <div className="w-64 h-64 mb-8 text-spice-green relative">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
            {/* The Dot of the Question Mark as a small leaf seed */}
            <path d="M100 160 C105 160, 110 165, 105 170 C100 175, 95 170, 100 160 Z" fill="currentColor" />
            
            {/* The Main Stem/Curve of the Question Mark resembling a growing vine/leaf */}
            <path 
              d="M60 80 C60 40, 140 40, 140 80 C140 110, 100 120, 100 145" 
              stroke="currentColor" 
              strokeWidth="12" 
              strokeLinecap="round" 
              className="drop-shadow-md"
            />
            
            {/* Leaf Accents branching off the main curve */}
            <path d="M140 80 C160 70, 170 90, 150 100 C145 90, 140 85, 140 80 Z" fill="var(--color-cardamom)" />
            <path d="M75 55 C60 40, 45 60, 65 75 C70 65, 75 60, 75 55 Z" fill="var(--color-olive)" />
            <path d="M125 50 C140 30, 160 40, 145 60 C140 50, 130 45, 125 50 Z" fill="var(--color-muted-gold)" />
          </svg>
        </div>

        <h1 className="text-6xl font-serif text-export-dark-green mb-4">404</h1>
        <h2 className="text-2xl font-serif text-export-dark-green mb-6">Terrain Uncharted</h2>
        
        <p className="text-export-dark-green/70 mb-10 max-w-md">
          The page you are looking for has been moved, removed, or might never have existed. Let us guide you back to familiar grounds.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-export-dark-green text-soft-ivory px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-spice-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Global Hub
        </Link>
      </div>
    </main>
  );
}
