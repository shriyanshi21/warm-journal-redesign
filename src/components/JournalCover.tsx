import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const JournalCover = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center p-8 overflow-hidden">
      {/* Dictionary Navigation Button */}
      <Button
        onClick={() => navigate("/dictionary")}
        variant="ghost"
        className="absolute top-6 right-6 gap-2 hover:bg-accent/20 backdrop-blur-sm z-10"
      >
        <BookOpen className="h-4 w-4" />
        My Vocabulary
      </Button>
      {/* Main journal card */}
      <div className="relative w-full max-w-md aspect-[3/4]">
        {/* 3D Book Effect - Spine/Binding */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(350,85%,65%)] to-[hsl(350,85%,75%)] rounded-l-2xl shadow-2xl" />
        
        {/* Main book cover with gradient */}
        <div className="absolute inset-0 left-8 bg-gradient-warm rounded-r-2xl shadow-deep overflow-hidden">
          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-serif-display text-5xl font-light text-white tracking-wide text-center px-12 leading-tight">
              write here to find your force
            </h1>
          </div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-30 rounded-r-2xl pointer-events-none" />
        </div>
        
        {/* Enhanced shadow for 3D effect */}
        <div className="absolute inset-0 left-8 rounded-r-2xl shadow-[0_30px_80px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
};
