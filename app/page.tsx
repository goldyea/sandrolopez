"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, AlertOctagon, MessageCircleWarning, Frown, Users, TrendingDown, Split, Check, X, Languages } from "lucide-react";

// --- Visual Components for each slide ---

const SquadVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center gap-2 md:gap-4 my-8">
    <div className="flex -space-x-3 md:-space-x-4">
      {['E', 'J', 'P', 'A', 'T'].map((letter, i) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          key={letter} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100/80 backdrop-blur-sm border-2 border-white flex items-center justify-center font-bold text-blue-600 shadow-sm z-10"
        >
          {letter}
        </motion.div>
      ))}
    </div>
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <ArrowRight className="text-slate-400 animate-pulse mx-2" />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, type: "spring" }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100/80 backdrop-blur-sm border-2 border-white flex items-center justify-center font-bold text-red-600 shadow-md transform scale-110 relative"
    >
      S
      <span className="absolute -top-2 -right-2 text-lg">🇵🇪</span>
    </motion.div>
  </div>
);

const ChartVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="w-full max-w-[240px] mx-auto h-32 bg-white/30 rounded-2xl p-4 flex items-end justify-between gap-2 relative border border-white/50 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.05)] my-8">
    <div className="absolute top-3 left-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{lang === 'en' ? 'Chill Vibes' : 'Buenas Vibras'}</div>
    <motion.div initial={{height: 0}} animate={{height: '100%'}} transition={{delay: 0.1, duration: 0.5}} className="w-full bg-green-400/60 rounded-t-md border-t border-white/50" />
    <motion.div initial={{height: 0}} animate={{height: '70%'}} transition={{delay: 0.2, duration: 0.5}} className="w-full bg-green-300/60 rounded-t-md border-t border-white/50" />
    <motion.div initial={{height: 0}} animate={{height: '40%'}} transition={{delay: 0.3, duration: 0.5}} className="w-full bg-yellow-400/60 rounded-t-md border-t border-white/50" />
    <motion.div initial={{height: 0}} animate={{height: '15%'}} transition={{delay: 0.4, duration: 0.5}} className="w-full bg-red-400/60 rounded-t-md border-t border-white/50 relative">
      <TrendingDown className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 w-4 h-4" />
    </motion.div>
    <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-slate-500 font-bold uppercase">
      <span>{lang === 'en' ? 'Start of Year' : 'Inicio de Año'}</span>
      <span>{lang === 'en' ? 'Now' : 'Ahora'}</span>
    </div>
  </div>
);

const FlagsVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex justify-center gap-3 my-8">
    {[
      { icon: AlertOctagon, label: lang === 'en' ? "Racism" : "Racismo", delay: 0.1 },
      { icon: Frown, label: lang === 'en' ? "Anger" : "Enojo", delay: 0.2 },
      { icon: MessageCircleWarning, label: lang === 'en' ? "Insults" : "Insultos", delay: 0.3 }
    ].map((item, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: item.delay }}
        className="flex flex-col items-center p-3 md:p-4 bg-white/40 rounded-2xl shadow-[4px_4px_10px_rgba(163,177,198,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/60 w-24 md:w-28"
      >
        <item.icon className="text-red-500 mb-2 w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[10px] md:text-xs font-bold text-slate-600 text-center leading-tight">{item.label}</span>
      </motion.div>
    ))}
  </div>
);

const UncomfortableVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center my-8 relative">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-24 h-24 bg-slate-200/50 rounded-full flex items-center justify-center border-4 border-white/50 shadow-inner relative overflow-hidden"
    >
      <span className="text-4xl">😐</span>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute h-1.5 bg-red-500/80 rotate-45"
      />
    </motion.div>
  </div>
);

const ChoiceVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex flex-col gap-3 my-8 w-full max-w-[280px] mx-auto">
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-3 p-3 bg-green-100/40 backdrop-blur-sm rounded-2xl border border-green-200/60 shadow-sm"
    >
      <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white font-bold shadow-inner"><Check size={16} /></div>
      <span className="text-sm font-bold text-green-800">{lang === 'en' ? "Chill Sandro = Squad" : "Sandro Tranquilo = Escuadrón"}</span>
    </motion.div>
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex items-center gap-3 p-3 bg-red-100/40 backdrop-blur-sm rounded-2xl border border-red-200/60 shadow-sm"
    >
      <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white font-bold shadow-inner"><X size={16} /></div>
      <span className="text-sm font-bold text-red-800">{lang === 'en' ? "Toxic Sandro = We Out" : "Sandro Tóxico = Nos Vamos"}</span>
    </motion.div>
  </div>
);

// --- Slide Data ---

const slides = [
  {
    id: 0,
    title: { en: "The Squad", es: "El Escuadrón" },
    content: { 
      en: "Elia, Thar, Paccar, Anthony, Jona... and then you joined us this year, Sandro. We welcomed you in.", 
      es: "Elia, Thar, Paccar, Anthony, Jona... y luego te uniste a nosotros este año, Sandro. Te dimos la bienvenida." 
    },
    Visual: SquadVisual
  },
  {
    id: 1,
    title: { en: "The Drop-off", es: "La Caída" },
    content: {
      en: "When you first joined, you were super chill and nice. But lately, the vibes have been dropping fast.",
      es: "Cuando te uniste, eras súper buena onda. Pero últimamente, la buena vibra ha ido cayendo rápido."
    },
    Visual: ChartVisual
  },
  {
    id: 2,
    title: { en: "The Red Flags", es: "Las Banderas Rojas" },
    content: {
      en: "The racist jokes, the homophobic comments, the random anger, and the middle fingers when we're just trying to joke around.",
      es: "Las bromas racistas, los comentarios homofóbicos, el enojo de la nada y los insultos cuando solo intentamos bromear."
    },
    Visual: FlagsVisual
  },
  {
    id: 3,
    title: { en: "It's Not Funny", es: "No Es Gracioso" },
    content: {
      en: "We don't think it's funny. It just makes us uncomfortable. We're telling you this because we actually care.",
      es: "No nos parece gracioso. Solo nos hace sentir incómodos. Te decimos esto porque realmente nos importas."
    },
    Visual: UncomfortableVisual
  },
  {
    id: 4,
    title: { en: "Your Call", es: "Tu Decisión" },
    content: {
      en: "We want the old, nice Sandro back. If you can drop the toxic habits, we're good. The ball is in your court.\n\n— Elia & Jona",
      es: "Queremos de vuelta al Sandro amable de antes. Si puedes dejar esos hábitos tóxicos, todo bien. La decisión es tuya.\n\n— Elia y Jona"
    },
    Visual: ChoiceVisual
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
};

// --- Translator Component ---

const TranslateSlide = ({ title, content, Visual }: { title: {en: string, es: string}, content: {en: string, es: string}, Visual: React.FC<{lang: 'en'|'es'}> }) => {
  const [lang, setLang] = useState<'en'|'es'>('en');
  
  return (
    <div 
      className="relative cursor-help group p-4 md:p-6 rounded-3xl hover:bg-white/30 transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-[inset_2px_2px_10px_rgba(255,255,255,0.8)] w-full"
      onMouseEnter={() => setLang('es')}
      onMouseLeave={() => setLang('en')}
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
    >
      <div className="absolute -top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-bold text-red-500 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-red-100 z-20">
        <Languages className="w-3 h-3" /> Español
      </div>
      
      {/* Visual Element */}
      <div className="w-full h-[180px] flex items-center justify-center mb-2">
        <Visual lang={lang} />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight drop-shadow-sm transition-colors duration-300">
        {lang === 'en' ? title.en : title.es}
      </h2>
      
      <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto whitespace-pre-line transition-colors duration-300">
        {lang === 'en' ? content.en : content.es}
      </p>
    </div>
  );
};

export default function SandroSlideshow() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    if (page + newDirection < 0 || page + newDirection >= slides.length) return;
    setDirection(newDirection);
    setPage(page + newDirection);
  };

  const CurrentVisual = slides[page].Visual;

  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-4 overflow-hidden relative font-sans">
      {/* Decorative background elements for glassmorphism to blur */}
      <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-red-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-[5%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white/60 rounded-full mix-blend-overlay filter blur-[80px]" />

      {/* Main Glassmorphic Container */}
      <div className="relative w-full max-w-2xl h-[650px] md:h-[600px] bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col p-4 md:p-8">
        
        {/* Hint Banner */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest bg-white/30 px-4 py-1.5 rounded-full border border-white/50 shadow-sm z-20">
          <Languages className="w-3 h-3" /> Hover text to translate
        </div>

        {/* Slides Area */}
        <div className="relative flex-1 w-full overflow-hidden mt-12">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 md:px-8"
            >
              
              {/* Translatable Slide Block */}
              <TranslateSlide 
                title={slides[page].title} 
                content={slides[page].content} 
                Visual={CurrentVisual}
              />

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Area */}
        <div className="mt-4 flex items-center justify-between w-full px-4 md:px-8 pb-4">
          {/* Prev Button (Neumorphic) */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="p-4 rounded-2xl bg-[#e0e5ec]/80 backdrop-blur-md text-slate-600 shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_4px_4px_10px_rgba(163,177,198,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)]"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 md:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  i === page 
                    ? 'bg-red-400 scale-150 shadow-[0_0_10px_rgba(248,113,113,0.6)]' 
                    : 'bg-[#e0e5ec] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button (Neumorphic) */}
          <button
            onClick={() => paginate(1)}
            disabled={page === slides.length - 1}
            className="p-4 rounded-2xl bg-[#e0e5ec]/80 backdrop-blur-md text-slate-600 shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_4px_4px_10px_rgba(163,177,198,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)]"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
