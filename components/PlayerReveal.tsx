'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Player, AVATARS } from '@/types/game';

interface PlayerRevealProps {
  player: Player;
  totalPlayers: number;
  onReveal: () => void;
  onClose: () => void;
}

export default function PlayerReveal({ player, totalPlayers, onReveal, onClose }: PlayerRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(() => {
      onReveal();
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-impostor-primary via-impostor-light to-impostor-dark z-50 flex flex-col items-center justify-center p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full p-2 transition-colors"
      >
        <X size={32} />
      </button>

      <h2 className="text-white text-2xl mb-8 font-medium">Impostor</h2>

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="card-front"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md"
          >
            <div className="bg-gradient-to-br from-impostor-orange via-orange-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col items-center justify-center space-y-6">
                <h3 className="text-white text-6xl font-bold">Jugador {player.id}</h3>
                
                <div className="text-9xl animate-float">
                  {AVATARS[player.id - 1] || '😎'}
                </div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-white text-4xl">↑</div>
                  <p className="text-white text-xl font-semibold">Desliza para revelar</p>
                </motion.div>
              </div>
            </div>

            <button
              onClick={handleReveal}
              className="absolute inset-0 w-full h-full cursor-pointer"
              style={{ background: 'transparent' }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="card-back"
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <div className={`${
              player.isImpostor 
                ? 'bg-gradient-to-br from-red-600 via-red-700 to-black' 
                : 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500'
            } rounded-3xl p-8 shadow-2xl`}>
              <div className="flex flex-col items-center justify-center space-y-8 min-h-[400px]">
                <div className="text-9xl animate-float">
                  {player.isImpostor ? '😈' : '😇'}
                </div>
                
                <h3 className="text-white text-4xl font-bold text-center">
                  {player.isImpostor ? '¡Eres el IMPOSTOR!' : '¡Eres INOCENTE!'}
                </h3>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 w-full">
                  <p className="text-white text-sm mb-2 text-center opacity-80">Tu palabra:</p>
                  <p className="text-white text-5xl font-bold text-center">
                    {player.word}
                  </p>
                </div>

                {player.isImpostor && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-center text-sm opacity-90 px-4"
                  >
                    💡 Pista: Intenta descubrir la palabra sin ser descubierto
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white text-center mt-8 text-base"
      >
        {isRevealed 
          ? 'Memoriza tu palabra. Pasa el dispositivo al siguiente jugador en 3 segundos...'
          : 'Arrastra tu carta hacia arriba para revelar la palabra. Asegúrate de que nadie más la vea.'
        }
      </motion.p>
    </motion.div>
  );
}
