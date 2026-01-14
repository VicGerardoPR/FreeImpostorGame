'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Home } from 'lucide-react';
import { Player, AVATARS } from '@/types/game';

interface GameResultsProps {
  players: Player[];
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

export default function GameResults({ players, onPlayAgain, onBackToMenu }: GameResultsProps) {
  const impostors = players.filter(p => p.isImpostor);
  const innocents = players.filter(p => !p.isImpostor);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-impostor-primary via-impostor-light to-impostor-dark flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl font-bold text-white mb-4">¡Juego Terminado!</h1>
          <p className="text-white text-xl opacity-90">Aquí están los resultados</p>
        </motion.div>

        {/* Impostors */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-impostor-bg rounded-3xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">😈</span>
            <h2 className="text-white text-2xl font-bold">Los Impostores</h2>
          </div>
          <div className="space-y-3">
            {impostors.map((impostor, index) => (
              <motion.div
                key={impostor.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-red-600/30 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{AVATARS[impostor.id - 1]}</span>
                  <span className="text-white font-medium text-lg">Jugador {impostor.id}</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-white text-sm">Palabra: </span>
                  <span className="text-white font-bold">{impostor.word}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innocents */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-impostor-bg rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">😇</span>
            <h2 className="text-white text-2xl font-bold">Los Inocentes</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {innocents.map((innocent, index) => (
              <motion.div
                key={innocent.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="bg-green-600/20 rounded-xl p-4 flex flex-col items-center gap-2"
              >
                <span className="text-3xl">{AVATARS[innocent.id - 1]}</span>
                <span className="text-white font-medium">Jugador {innocent.id}</span>
                <span className="text-white/70 text-xs">{innocent.word}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={onPlayAgain}
            className="w-full bg-impostor-bg text-white py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
          >
            <RotateCcw size={24} />
            Jugar de Nuevo
          </button>
          <button
            onClick={onBackToMenu}
            className="w-full bg-white/10 backdrop-blur-sm text-white py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
          >
            <Home size={24} />
            Menú Principal
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-white/70 text-sm mt-6"
        >
          Gracias por jugar Impostor
        </motion.p>
      </div>
    </motion.div>
  );
}
