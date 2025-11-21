import { useState } from "react";
import { Book, ArrowLeft, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

interface Word {
  term: string;
  pronunciation?: string;
  definition: string;
  examples?: string[];
}

const vocabulary: Word[] = [
  {
    term: "Free rein",
    pronunciation: "/friː reɪn/",
    definition: "Unrestricted liberty of action or decision",
    examples: [
      "The director gave the designer free rein to create whatever they envisioned.",
      "With free rein over the project, she explored bold new ideas."
    ]
  },
  {
    term: "Ethos",
    pronunciation: "/ˈiːθɒs/",
    definition: "The characteristic spirit of a culture, era, or community as manifested in its beliefs and aspirations; character",
    examples: [
      "The company's ethos centered on sustainability and innovation.",
      "Her work reflected the ethos of minimalism and intentionality."
    ]
  },
  {
    term: "Through the Looking Glass",
    pronunciation: "/θruː ðə ˈlʊkɪŋ ɡlɑːs/",
    definition: "A phrase one might use to describe a setting or situation that is unfamiliar or abnormal",
    examples: [
      "Stepping into the virtual world felt like going through the looking glass.",
      "The pandemic took us through the looking glass into a new reality."
    ]
  },
  {
    term: "Stochastic",
    pronunciation: "/stəˈkastɪk/",
    definition: "Having a random probability distribution or pattern that may be analysed statistically but may not be predicted precisely",
    examples: [
      "The stock market follows stochastic patterns that defy exact prediction.",
      "Machine learning often deals with stochastic processes."
    ]
  },
  {
    term: "Non-deterministic",
    pronunciation: "/nɒn dɪˌtɜːmɪˈnɪstɪk/",
    definition: "Producing a different result each time the same piece of data is entered",
    examples: [
      "The algorithm is non-deterministic, yielding varied outputs with identical inputs.",
      "Quantum computing leverages non-deterministic behavior."
    ]
  },
  {
    term: "Duck and weave",
    pronunciation: "/dʌk ənd wiːv/",
    definition: "To move quickly and skillfully to avoid obstacles or difficulties; to navigate through challenges with agility",
    examples: [
      "She had to duck and weave her way through the crowded marketplace.",
      "In business, you learn to duck and weave around unexpected obstacles."
    ]
  },
  {
    term: "Hedonia",
    pronunciation: "/hɪˈdoʊniə/",
    definition: "Pleasure or happiness derived from enjoyable experiences; the pursuit of pleasure and sensory gratification",
    examples: [
      "The vacation was pure hedonia—beaches, food, and relaxation.",
      "Finding balance between hedonia and meaningful work is key."
    ]
  },
  {
    term: "Eudaimonia",
    pronunciation: "/juːdaɪˈmoʊniə/",
    definition: "A state of flourishing and living well through virtue, purpose, and self-realization; true human fulfillment",
    examples: [
      "She sought eudaimonia through creative work and deep relationships.",
      "Aristotle believed eudaimonia comes from living virtuously."
    ]
  },
  {
    term: "Shed every inhibition",
    pronunciation: "/ʃɛd ˈɛvri ˌɪnhɪˈbɪʃən/",
    definition: "To let go of all restraints, fears, or self-imposed limitations that one has historically carried",
    examples: [
      "On stage, she shed every inhibition and performed freely.",
      "Travel helped him shed every inhibition he'd held onto for years."
    ]
  }
];

const Dictionary = () => {
  const [selectedWord, setSelectedWord] = useState<Word | null>(vocabulary[0]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center gap-4 border-b border-border/20 bg-background/30 backdrop-blur-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="hover:bg-accent/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3">
          <Book className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-serif-display font-semibold text-foreground">
            My Vocabulary
          </h1>
        </div>
        <span className="ml-auto text-sm text-muted-foreground">
          {vocabulary.length} words collected
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Word List - Left Panel */}
        <div className="w-80 border-r border-border/20 bg-card/30 backdrop-blur-sm">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-2">
              {vocabulary.map((word) => (
                <button
                  key={word.term}
                  onClick={() => setSelectedWord(word)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedWord?.term === word.term
                      ? "bg-primary/10 border border-primary/20 shadow-soft"
                      : "bg-background/40 hover:bg-background/60 border border-transparent"
                  }`}
                >
                  <h3 className="font-serif-display text-lg font-medium text-foreground">
                    {word.term}
                  </h3>
                  {word.pronunciation && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {word.pronunciation}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Word Details - Right Panel */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            {selectedWord ? (
              <div className="p-12 max-w-3xl mx-auto animate-fade-in">
                <div className="glass-effect p-8 rounded-2xl">
                  {/* Word Header */}
                  <div className="mb-8">
                    <h2 className="text-4xl font-serif-display font-bold text-foreground mb-3">
                      {selectedWord.term}
                    </h2>
                    {selectedWord.pronunciation && (
                      <div className="flex items-center gap-3">
                        <span className="text-lg text-muted-foreground">
                          {selectedWord.pronunciation}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-accent/20"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Definition */}
                  <div className="mb-8">
                    <h3 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
                      Definition
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {selectedWord.definition}
                    </p>
                  </div>

                  {/* Examples */}
                  {selectedWord.examples && selectedWord.examples.length > 0 && (
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
                        Examples
                      </h3>
                      <div className="space-y-3">
                        {selectedWord.examples.map((example, index) => (
                          <div
                            key={index}
                            className="pl-4 border-l-2 border-accent/30 py-2"
                          >
                            <p className="text-foreground/80 italic leading-relaxed">
                              "{example}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                Select a word to view its details
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
