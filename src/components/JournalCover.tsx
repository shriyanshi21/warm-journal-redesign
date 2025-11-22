import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const JournalCover = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-gradient-warm">
      {/* Dictionary Navigation Button */}
      <Button
        onClick={() => navigate("/dictionary")}
        variant="ghost"
        className="absolute top-6 right-6 gap-2 glass-effect text-white hover:bg-white/20 z-10"
      >
        <BookOpen className="h-4 w-4" />
        My Vocabulary
      </Button>

      {/* Main journal card with glassmorphism */}
      <div className="relative w-full max-w-md aspect-[3/4] animate-fade-in">
        {/* 3D Book Effect - Spine/Binding with glass */}
        <div className="absolute left-0 top-0 bottom-0 w-12 glass-heavy rounded-l-3xl shadow-2xl border-r-0" />
        
        {/* Main book cover with liquid glass effect */}
        <div className="absolute inset-0 left-8 glass-heavy rounded-r-3xl overflow-hidden group transition-all duration-500 hover:scale-[1.02]">
          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <h1 className="font-serif-display text-5xl font-light text-white tracking-wide text-center leading-tight drop-shadow-lg">
              write here to find your force
            </h1>
          </div>
          
          {/* Subtle shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Inner glow border effect */}
          <div className="absolute inset-0 rounded-r-3xl ring-1 ring-inset ring-white/30 pointer-events-none" />
        </div>
        
        {/* Ambient shadow for depth */}
        <div className="absolute inset-0 left-8 rounded-r-3xl shadow-[0_35px_90px_rgba(0,0,0,0.2)]" />
      </div>
    </div>
  );
};
