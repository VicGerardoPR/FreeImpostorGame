'use client';

import { motion } from 'framer-motion';
import { Users, Ghost, Lightbulb, Grid3x3, Clock, Timer, Globe } from 'lucide-react';
import { GameSettings, CATEGORIES_ES, CATEGORIES_EN } from '@/types/game';

interface GameSetupProps {
  settings: GameSettings;
  onUpdateSettings: (settings: Partial<GameSettings>) => void;
  onStartGame: () => void;
}

export default function GameSetup({ settings, onUpdateSettings, onStartGame }: GameSetupProps) {
  const CATEGORIES = settings.language === 'es' ? CATEGORIES_ES : CATEGORIES_EN;
  const categoryKeys = Object.keys(CATEGORIES);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-impostor-primary via-impostor-light to-impostor-dark flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-7xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Impostor
          </h1>
          <p className="text-white text-lg opacity-90">por Arcano Intelligence</p>
          <p className="text-white text-sm opacity-75">Creado por Víctor Gerardo</p>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-impostor-bg rounded-3xl p-6 mb-6"
        >
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="text-white" size={32} />
              <span className="text-white font-medium text-lg">Idioma / Language</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onUpdateSettings({ 
                    language: 'es',
                    category: settings.language === 'en' ? 'Todas las Categorías' : settings.category
                  });
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  settings.language === 'es'
                    ? 'bg-white text-impostor-primary'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                🇲🇽 Español
              </button>
              <button
                onClick={() => {
                  onUpdateSettings({ 
                    language: 'en',
                    category: settings.language === 'es' ? 'All Categories' : settings.category
                  });
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  settings.language === 'en'
                    ? 'bg-white text-impostor-primary'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                🇺🇸 English
              </button>
            </div>
          </div>
        </motion.div>

        {/* Settings Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-impostor-bg rounded-3xl p-6 mb-6 space-y-4"
        >
          {/* Players */}
          <div 
            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => {}}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl">☝️</div>
              <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Jugadores' : 'Players'}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateSettings({ numPlayers: Math.max(3, settings.numPlayers - 1) });
                }}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                -
              </button>
              <span className="text-white text-xl w-8 text-center">{settings.numPlayers}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateSettings({ numPlayers: Math.min(16, settings.numPlayers + 1) });
                }}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Impostors */}
          <div 
            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => {}}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl">👻</div>
              <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Impostores' : 'Impostors'}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateSettings({ numImpostors: Math.max(1, settings.numImpostors - 1) });
                }}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                -
              </button>
              <span className="text-white text-xl w-8 text-center">{settings.numImpostors}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateSettings({ numImpostors: Math.min(settings.numPlayers - 2, settings.numImpostors + 1) });
                }}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Hints Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🔍</div>
              <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Pistas para Impostor' : 'Hints for Impostor'}</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ showHints: !settings.showHints })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                settings.showHints ? 'bg-green-500' : 'bg-white/20'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ left: settings.showHints ? '28px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          {/* Categories */}
          <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">🎭</div>
              <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Categorías' : 'Categories'}</span>
            </div>
            <select
              value={settings.category}
              onChange={(e) => onUpdateSettings({ category: e.target.value })}
              className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
              style={{ 
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '20px',
                paddingRight: '40px'
              }}
            >
              {categoryKeys.map(category => (
                <option key={category} value={category} className="bg-impostor-dark text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Timer Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-impostor-bg rounded-3xl p-6 mb-6 space-y-4"
        >
          {/* Time Limit Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⏰</div>
              <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Límite de tiempo' : 'Time limit'}</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ timeLimit: !settings.timeLimit })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                settings.timeLimit ? 'bg-green-500' : 'bg-white/20'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ left: settings.timeLimit ? '28px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          {/* Duration */}
          {settings.timeLimit && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => {
                const durations = [1, 2, 3, 5, 10];
                const currentIndex = durations.indexOf(settings.duration);
                const nextIndex = (currentIndex + 1) % durations.length;
                onUpdateSettings({ duration: durations[nextIndex] });
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">⏱️</div>
                <span className="text-white font-medium text-lg">{settings.language === 'es' ? 'Duración' : 'Duration'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-sm">{settings.duration} {settings.language === 'es' ? (settings.duration !== 1 ? 'minutos' : 'minuto') : (settings.duration !== 1 ? 'minutes' : 'minute')}</span>
                <span className="text-white">→</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white text-base mb-6 px-4"
        >
          {settings.language === 'es' 
            ? 'Establece las reglas del juego. Luego todos sacan su carta y comienza la desconfianza.'
            : 'Set the game rules. Then everyone draws their card and the mistrust begins.'}
        </motion.p>

        {/* Start Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartGame}
          className="w-full bg-impostor-bg text-white py-5 rounded-full text-xl font-semibold shadow-2xl hover:bg-black transition-all"
        >
          {settings.language === 'es' ? 'Iniciar Juego' : 'Start Game'}
        </motion.button>
      </div>
    </motion.div>
  );
}
