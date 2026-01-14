'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Pause, Play } from 'lucide-react';
import { Player } from '@/types/game';

interface GamePlayProps {
  players: Player[];
  duration: number;
  timeLimit: boolean;
  onEndGame: (foundImpostor: boolean) => void;
  onClose: () => void;
}

export default function GamePlay({ players, duration, timeLimit, onEndGame, onClose }: GamePlayProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    if (!timeLimit || isPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLimit, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndGame = () => {
    onEndGame(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-impostor-primary via-impostor-light to-impostor-dark z-50 flex flex-col items-center justify-center p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full p-2 transition-colors"
      >
        <X size={32} />
      </button>

      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-white text-5xl font-bold mb-12"
        >
          Jugador {currentPlayer} comienza!
        </motion.h2>

        {timeLimit && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-white text-xl mb-4 text-center">Temporizador</p>
            <div className="text-white text-8xl font-bold text-center">
              {formatTime(timeLeft)}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full space-y-4"
        >
          {timeLimit && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-full bg-impostor-bg text-white py-6 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
            >
              {isPaused ? <Play size={24} /> : <Pause size={24} />}
              {isPaused ? 'Reanudar' : 'Pausar'}
            </button>
          )}

          <button
            onClick={handleEndGame}
            className="w-full bg-impostor-bg text-white py-6 rounded-full text-xl font-semibold hover:bg-black transition-all shadow-xl"
          >
            Detener Juego
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-center mt-12 text-base px-4"
        >
          {timeLimit 
            ? 'Detén el temporizador cuando creas que has encontrado al Impostor.'
            : 'Discute y encuentra al impostor. Presiona "Detener" cuando estés listo para votar.'
          }
        </motion.p>

        {/* Quick Player Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 w-full"
        >
          <p className="text-white text-sm mb-3 text-center">Turno actual:</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {players.map((player) => (
              <button
                key={player.id}
                onClick={() => setCurrentPlayer(player.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  currentPlayer === player.id
                    ? 'bg-white text-impostor-primary scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {player.id}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
