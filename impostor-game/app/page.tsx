'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from '@/components/WelcomeScreen';
import GameSetup from '@/components/GameSetup';
import PlayerReveal from '@/components/PlayerReveal';
import GamePlay from '@/components/GamePlay';
import GameResults from '@/components/GameResults';
import { GamePhase, GameSettings, Player, CATEGORIES_ES, CATEGORIES_EN } from '@/types/game';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [currentRevealingPlayer, setCurrentRevealingPlayer] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);
  
  const [settings, setSettings] = useState<GameSettings>({
    numPlayers: 3,
    numImpostors: 1,
    showHints: true,
    category: 'Todas las Categorías',
    timeLimit: true,
    duration: 3,
    language: 'es',
  });

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const initializePlayers = () => {
    const CATEGORIES = settings.language === 'es' ? CATEGORIES_ES : CATEGORIES_EN;
    const categoryWords = CATEGORIES[settings.category as keyof typeof CATEGORIES];
    
    // Select a random word for normal players
    const normalWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
    
    // Select a different random word for impostors (or give them a hint)
    let impostorWord = normalWord;
    if (settings.showHints) {
      // Give impostors a related but different word
      const differentWords = categoryWords.filter(w => w !== normalWord);
      impostorWord = differentWords[Math.floor(Math.random() * differentWords.length)];
    } else {
      impostorWord = '???';
    }

    // Create array of player indices and shuffle
    const playerIndices = Array.from({ length: settings.numPlayers }, (_, i) => i);
    const shuffled = playerIndices.sort(() => Math.random() - 0.5);
    
    // First N players are impostors
    const impostorIndices = new Set(shuffled.slice(0, settings.numImpostors));

    // Create player objects
    const newPlayers: Player[] = Array.from({ length: settings.numPlayers }, (_, i) => ({
      id: i + 1,
      name: `${settings.language === 'es' ? 'Jugador' : 'Player'} ${i + 1}`,
      isImpostor: impostorIndices.has(i),
      word: impostorIndices.has(i) ? impostorWord : normalWord,
      hasRevealed: false,
    }));

    setPlayers(newPlayers);
  };

  const startGame = () => {
    initializePlayers();
    setGamePhase('reveal');
    setCurrentRevealingPlayer(0);
  };

  const handlePlayerReveal = () => {
    const nextPlayer = currentRevealingPlayer + 1;
    
    if (nextPlayer < settings.numPlayers) {
      setCurrentRevealingPlayer(nextPlayer);
    } else {
      // All players have revealed, start the game
      setGamePhase('playing');
    }
  };

  const handleEndGame = (foundImpostor: boolean) => {
    setGamePhase('results');
  };

  const playAgain = () => {
    setGamePhase('setup');
    setCurrentRevealingPlayer(0);
    setPlayers([]);
  };

  const backToMenu = () => {
    setGamePhase('setup');
    setCurrentRevealingPlayer(0);
    setPlayers([]);
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen
            key="welcome"
            onStart={() => setShowWelcome(false)}
          />
        ) : (
          <>
            {gamePhase === 'setup' && (
              <GameSetup
                key="setup"
                settings={settings}
                onUpdateSettings={updateSettings}
                onStartGame={startGame}
              />
            )}

            {gamePhase === 'reveal' && players[currentRevealingPlayer] && (
              <PlayerReveal
                key={`reveal-${currentRevealingPlayer}`}
                player={players[currentRevealingPlayer]}
                totalPlayers={settings.numPlayers}
                onReveal={handlePlayerReveal}
                onClose={backToMenu}
              />
            )}

            {gamePhase === 'playing' && (
              <GamePlay
                key="playing"
                players={players}
                duration={settings.duration}
                timeLimit={settings.timeLimit}
                onEndGame={handleEndGame}
                onClose={backToMenu}
              />
            )}

            {gamePhase === 'results' && (
              <GameResults
                key="results"
                players={players}
                onPlayAgain={playAgain}
                onBackToMenu={backToMenu}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
