'use client';

import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-impostor-primary via-impostor-light to-impostor-dark flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 200 + 30,
              height: Math.random() * 200 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Logo/Title - Responsive sizes */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Impostor
          </motion.h1>
        </motion.div>

        {/* Subtitle - Responsive */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 opacity-90 text-center"
        >
          por Arcano Intelligence
        </motion.p>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-75 text-center"
        >
          Creado por Víctor Gerardo
        </motion.p>

        {/* Emojis - Responsive sizes */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            😈
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            😇
          </motion.div>
        </motion.div>

        {/* Tagline - Responsive */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center mb-6 sm:mb-8 md:mb-12 max-w-sm sm:max-w-md px-4"
        >
          Un juego de engaño, mentiras y deducción social
        </motion.p>

        {/* Start Button - Responsive */}
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-impostor-bg text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold shadow-2xl hover:bg-black transition-all relative overflow-hidden"
        >
          <motion.span
            className="relative z-10"
          >
            Comenzar
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.button>

        {/* Features - Responsive grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-2xl px-4"
        >
          {[
            '3-16 Jugadores',
            'Múltiples Categorías',
            'Temporizador',
            'Pistas Opcionales',
          ].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1, type: 'spring' }}
              className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-white text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
