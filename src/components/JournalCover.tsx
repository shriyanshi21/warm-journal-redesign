import { Button } from "@/components/ui/button";
import { Heart, Star, Quote, Image as ImageIcon, BookOpen } from "lucide-react";

interface JournalCoverProps {
  userName?: string;
  userHandle?: string;
  month?: string;
  year?: string;
  quote?: string;
  subtitle?: string;
}

export const JournalCover = ({
  userName = "Shriyanshi Shikha",
  userHandle = "@shriyanshi_shikha",
  month = "November",
  year = "2025",
  quote = "Every story you write, Shriyanshi, becomes part of your legacy.",
  subtitle = "A journey of thoughts and memories"
}: JournalCoverProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-warm flex items-center justify-center p-8 overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Collection header */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <h2 className="text-foreground/70 text-lg font-light tracking-wide">A collection of Journal</h2>
      </div>

      {/* Main journal card */}
      <div className="relative w-full max-w-2xl">
        {/* Glass card container with refined shadows */}
        <div className="relative bg-gradient-glass glass-effect rounded-3xl shadow-deep border border-white/40 p-12 transition-smooth hover:shadow-deep hover:scale-[1.02]">
          
          {/* Corner decorations */}
          <Star className="absolute top-6 left-6 w-6 h-6 text-accent/40" strokeWidth={1.5} />
          <Heart className="absolute top-6 right-6 w-6 h-6 text-accent/40" strokeWidth={1.5} />
          
          {/* Title section */}
          <div className="text-center mb-12 space-y-2">
            <h1 className="font-serif-display text-4xl font-light text-muted-foreground tracking-wider">
              My Personal
            </h1>
            <h2 className="font-serif-display text-7xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
              Journal
            </h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
            </div>
          </div>

          {/* Profile card with glassmorphism */}
          <div className="relative bg-gradient-to-br from-secondary/90 to-muted/80 glass-effect rounded-2xl p-8 mb-8 shadow-soft border border-white/30 transition-smooth hover:shadow-medium">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
            
            <div className="relative flex flex-col items-center gap-4">
              {/* Avatar with gold ring */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-secondary shadow-medium border-4 border-primary/40 flex items-center justify-center transition-smooth hover:scale-105 hover:shadow-glow">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/60 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent shadow-glow" />
              </div>
              
              <div className="text-center">
                <h3 className="font-serif-display text-3xl font-semibold text-foreground mb-1">
                  {userName}
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide">
                  {userHandle}
                </p>
              </div>
            </div>
          </div>

          {/* Quote section */}
          <div className="mb-8 text-center px-6">
            <Quote className="w-8 h-8 text-accent/50 mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-serif-display text-lg text-muted-foreground/80 italic leading-relaxed">
              "{quote}"
            </p>
          </div>

          {/* Date and subtitle */}
          <div className="text-center space-y-2 mb-8">
            <h4 className="font-serif-display text-3xl font-light text-muted-foreground/70 tracking-wider">
              {month} {year}
            </h4>
            <p className="text-sm text-muted-foreground/60 tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-center">
            <Button 
              variant="outline" 
              className="bg-white/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-white/70 hover:border-primary/50 shadow-soft transition-smooth hover:shadow-medium hover:scale-105 rounded-full px-6"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Change Background
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-soft transition-smooth hover:shadow-glow hover:scale-105 rounded-full px-6"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Gallery View
            </Button>
          </div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-40 rounded-3xl pointer-events-none" />
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-2 border-b-2 border-accent/20 rounded-bl-3xl" />
        <div className="absolute -top-2 -right-2 w-16 h-16 border-r-2 border-t-2 border-accent/20 rounded-tr-3xl" />
      </div>
    </div>
  );
};
