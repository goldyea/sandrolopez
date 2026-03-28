"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, AlertOctagon, MessageCircleWarning, Frown, Users, TrendingDown, Split, Check, X, Languages, Presentation, Heart, RefreshCw } from "lucide-react";

// --- Visual Components for each slide ---

const CoverVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center my-8">
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-24 h-24 bg-indigo-100/80 rounded-3xl flex items-center justify-center border-4 border-white/50 shadow-lg rotate-3"
    >
      <Presentation className="w-12 h-12 text-indigo-500" />
    </motion.div>
  </div>
);

const ChangeVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center gap-6 my-8">
    <motion.div 
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1, 0.9] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 bg-slate-200/80 rounded-full flex items-center justify-center border-2 border-white/50 shadow-inner mb-2">
        <Frown className="w-8 h-8 text-slate-500" />
      </div>
    </motion.div>
    
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
      <RefreshCw className="w-6 h-6 text-blue-400" />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0.8, scale: 1 }}
      animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 bg-pink-100/80 rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg mb-2">
        <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
      </div>
    </motion.div>
  </div>
);

const SquadVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center gap-2 md:gap-4 my-8">
    <div className="flex -space-x-3 md:-space-x-4">
      {['E', 'J', 'P', 'A', 'T'].map((letter, i) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ 
            opacity: { delay: i * 0.1 },
            x: { delay: i * 0.1 },
            y: { duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }
          }}
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
      animate={{ opacity: 1, x: 0, rotate: [0, -10, 10, 0] }}
      transition={{ 
        opacity: { delay: 0.7 },
        x: { delay: 0.7, type: "spring" },
        rotate: { duration: 0.6, repeat: Infinity, repeatDelay: 2, delay: 1.5 }
      }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100/80 backdrop-blur-sm border-2 border-white flex items-center justify-center font-bold text-red-600 shadow-md transform scale-110 relative"
    >
      S
      <motion.span 
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        className="absolute -top-2 -right-2 text-lg origin-bottom-left"
      >
        🇵🇪
      </motion.span>
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
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
        <TrendingDown className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 w-4 h-4" />
      </motion.div>
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
        whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
        transition={{ delay: item.delay }}
        className="flex flex-col items-center p-3 md:p-4 bg-white/40 rounded-2xl shadow-[4px_4px_10px_rgba(163,177,198,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/60 w-24 md:w-28 cursor-pointer"
      >
        <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: item.delay }}>
          <item.icon className="text-red-500 mb-2 w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
        <span className="text-[10px] md:text-xs font-bold text-slate-600 text-center leading-tight">{item.label}</span>
      </motion.div>
    ))}
  </div>
);

const UncomfortableVisual = ({ lang }: { lang: 'en'|'es' }) => (
  <div className="flex items-center justify-center my-8 relative">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
      transition={{ 
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        x: { duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }
      }}
      className="w-24 h-24 bg-slate-200/50 rounded-full flex items-center justify-center border-4 border-white/50 shadow-inner relative overflow-hidden"
    >
      <motion.span 
        animate={{ x: [0, -3, 3, 0], y: [0, 2, -2, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-4xl inline-block"
      >
        😐
      </motion.span>
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
      whileHover={{ scale: 1.05 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-3 p-3 bg-green-100/40 backdrop-blur-sm rounded-2xl border border-green-200/60 shadow-sm cursor-pointer"
    >
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white font-bold shadow-inner"><Check size={16} /></motion.div>
      <span className="text-sm font-bold text-green-800">{lang === 'en' ? "Chill Sandro = Squad" : "Sandro Tranquilo = Escuadrón"}</span>
    </motion.div>
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: 0.3 }}
      className="flex items-center gap-3 p-3 bg-red-100/40 backdrop-blur-sm rounded-2xl border border-red-200/60 shadow-sm cursor-pointer"
    >
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white font-bold shadow-inner"><X size={16} /></motion.div>
      <span className="text-sm font-bold text-red-800">{lang === 'en' ? "Toxic Sandro = We Out" : "Sandro Tóxico = Nos Vamos"}</span>
    </motion.div>
  </div>
);

// --- Slide Data ---

const slides = [
  {
    id: 0,
    title: { en: "Cover", es: "Portada" },
    content: { 
      en: "A quick presentation about our friendship, the good times, and some things we need to talk about.", 
      es: "Una presentación rápida sobre nuestra amistad, los buenos momentos y algunas cosas de las que necesitamos hablar." 
    },
    Visual: CoverVisual
  },
  {
    id: 1,
    title: { en: "The Good", es: "Lo Bueno" },
    content: { 
      en: "Elia, Thar, Paccar, Anthony, Jona... and then you joined us this year, Sandro. You were super chill and nice.", 
      es: "Elia, Thar, Paccar, Anthony, Jona... y luego te uniste a nosotros este año, Sandro. Eras súper buena onda." 
    },
    Visual: SquadVisual
  },
  {
    id: 2,
    title: { en: "The Issues", es: "Los Problemas" },
    content: {
      en: "Lately, the vibes have dropped. The racist jokes, homophobic comments, random anger, and middle fingers when we're just joking around.",
      es: "Últimamente, la vibra ha caído. Las bromas racistas, comentarios homofóbicos, enojo de la nada y los insultos cuando solo bromeamos."
    },
    Visual: FlagsVisual
  },
  {
    id: 3,
    title: { en: "How It Feels", es: "Cómo Se Siente" },
    content: {
      en: "We don't think it's funny. It just makes us uncomfortable. We're telling you this because we actually care.",
      es: "No nos parece gracioso. Solo nos hace sentir incómodos. Te decimos esto porque realmente nos importas."
    },
    Visual: UncomfortableVisual
  },
  {
    id: 4,
    title: { en: "Can People Change?", es: "¿Puede la Gente Cambiar?" },
    content: {
      en: "We believe you can. We want the old, nice Sandro back. It's up to you to drop the toxic habits.",
      es: "Creemos que sí puedes. Queremos de vuelta al Sandro amable de antes. Depende de ti dejar esos hábitos tóxicos."
    },
    Visual: ChangeVisual
  },
  {
    id: 5,
    title: { en: "The Bottom Line", es: "En Conclusión" },
    content: {
      en: "Chill Sandro = Squad.\nToxic Sandro = We Out.\n— Elia & Jona",
      es: "Sandro Tranquilo = Escuadrón.\nSandro Tóxico = Nos Vamos.\n— Elia y Jona"
    },
    Visual: ChoiceVisual
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    y: 20,
    rotate: direction > 0 ? 5 : -5,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    y: -20,
    rotate: direction < 0 ? 5 : -5,
    opacity: 0,
    scale: 0.9,
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
      
      <motion.h2 
        key={`h2-${lang}`}
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight drop-shadow-sm transition-colors duration-300"
      >
        {lang === 'en' ? title.en : title.es}
      </motion.h2>
      
      <motion.p 
        key={`p-${lang}`}
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto whitespace-pre-line transition-colors duration-300"
      >
        {lang === 'en' ? content.en : content.es}
      </motion.p>
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
      <motion.div 
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-red-400/20 rounded-full mix-blend-multiply filter blur-[100px]" 
      />
      <motion.div 
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[5%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white/60 rounded-full mix-blend-overlay filter blur-[80px]" 
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 md:w-3 md:h-3 bg-white/60 rounded-full"
          animate={{
            y: [0, -150],
            x: [0, (i % 2 === 0 ? 50 : -50)],
            opacity: [0, 1, 0],
            scale: [0, Math.random() + 0.5, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 80}%`,
          }}
        />
      ))}

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
          <motion.button
            whileHover={{ scale: page === 0 ? 1 : 1.05 }}
            whileTap={{ scale: page === 0 ? 1 : 0.95 }}
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="p-4 rounded-2xl bg-[#e0e5ec]/80 backdrop-blur-md text-slate-600 shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_4px_4px_10px_rgba(163,177,198,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)]"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2 md:gap-3">
            {slides.map((_, i) => (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
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
          <motion.button
            whileHover={{ scale: page === slides.length - 1 ? 1 : 1.05 }}
            whileTap={{ scale: page === slides.length - 1 ? 1 : 0.95 }}
            onClick={() => paginate(1)}
            disabled={page === slides.length - 1}
            className="p-4 rounded-2xl bg-[#e0e5ec]/80 backdrop-blur-md text-slate-600 shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_4px_4px_10px_rgba(163,177,198,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_10px_rgba(163,177,198,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)]"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
