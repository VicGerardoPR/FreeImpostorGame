export type GamePhase = 'setup' | 'reveal' | 'playing' | 'results';
export type Language = 'es' | 'en';

export interface Player {
  id: number;
  name: string;
  isImpostor: boolean;
  word: string;
  hasRevealed: boolean;
}

export interface GameSettings {
  numPlayers: number;
  numImpostors: number;
  showHints: boolean;
  category: string;
  timeLimit: boolean;
  duration: number;
  language: Language;
}

// Helper function to get all words from all categories
const getAllWords = (categories: Record<string, string[]>): string[] => {
  const allWords: string[] = [];
  Object.keys(categories).forEach(key => {
    if (key !== 'Todas las Categorías' && key !== 'All Categories') {
      allWords.push(...categories[key]);
    }
  });
  return allWords;
};

// Base categories without "All Categories"
const BASE_CATEGORIES_ES: Record<string, string[]> = {
  'Animales': [
    'Perro', 'Gato', 'León', 'Tigre', 'Elefante', 'Jirafa', 'Mono', 'Cebra', 'Oso', 'Lobo',
    'Zorro', 'Águila', 'Delfín', 'Tiburón', 'Ballena', 'Pulpo', 'Tortuga', 'Pingüino', 'Cocodrilo', 'Serpiente',
    'Caballo', 'Vaca', 'Cerdo', 'Conejo', 'Ardilla', 'Búho', 'Pato', 'Gallina', 'Pájaro', 'Mariposa',
    'Abeja', 'Hormiga', 'Araña', 'Mosca', 'Mosquito', 'Rana', 'Sapo', 'Lagarto', 'Iguana', 'Camaleón',
    'Canguro', 'Koala', 'Panda', 'Gorila', 'Chimpancé', 'Orangután', 'Rinoceronte', 'Hipopótamo', 'Cebú', 'Bisonte'
  ],
  'Comida y Bebidas': [
    'Pizza', 'Hamburguesa', 'Tacos', 'Sushi', 'Pasta', 'Ensalada', 'Helado', 'Pastel', 'Chocolate', 'Café',
    'Té', 'Jugo', 'Refresco', 'Agua', 'Cerveza', 'Arroz', 'Pan', 'Queso', 'Yogurt', 'Cereal',
    'Sopa', 'Sándwich', 'Perro Caliente', 'Burrito', 'Nachos', 'Palomitas', 'Donas', 'Galletas', 'Panecillos', 'Batido',
    'Manzana', 'Plátano', 'Naranja', 'Uva', 'Fresa', 'Sandía', 'Melón', 'Piña', 'Mango', 'Papaya',
    'Pera', 'Durazno', 'Ciruela', 'Cereza', 'Frambuesa', 'Arándano', 'Mora', 'Kiwi', 'Coco', 'Aguacate'
  ],
  'Profesiones': [
    'Doctor', 'Enfermera', 'Maestro', 'Ingeniero', 'Abogado', 'Chef', 'Piloto', 'Arquitecto', 'Diseñador', 'Programador',
    'Músico', 'Actor', 'Escritor', 'Policía', 'Bombero', 'Veterinario', 'Dentista', 'Contador', 'Mecánico', 'Electricista',
    'Carpintero', 'Fotógrafo', 'Periodista', 'Científico', 'Psicólogo', 'Artista', 'DJ', 'Youtuber', 'Influencer', 'Emprendedor',
    'Banquero', 'Economista', 'Agricultor', 'Jardinero', 'Florista', 'Panadero', 'Pastelero', 'Carnicero', 'Pescador', 'Minero',
    'Constructor', 'Albañil', 'Pintor', 'Soldador', 'Plomero', 'Cerrajero', 'Tapicero', 'Zapatero', 'Sastre', 'Modista'
  ],
  'Deportes y Actividades': [
    'Fútbol', 'Baloncesto', 'Béisbol', 'Tenis', 'Voleibol', 'Natación', 'Ciclismo', 'Box', 'Atletismo', 'Golf',
    'Hockey', 'Rugby', 'Karate', 'Yoga', 'Crossfit', 'Surf', 'Esquí', 'Snowboard', 'Escalada', 'Parkour',
    'Patinaje', 'Skateboard', 'Gimnasia', 'Esgrima', 'Ajedrez', 'Fútbol Americano', 'Handball', 'Waterpolo', 'Softbol', 'Críquet',
    'Badminton', 'Ping Pong', 'Squash', 'Racquetball', 'Bolos', 'Billar', 'Dardos', 'Tiro con Arco', 'Equitación', 'Polo',
    'Rodeo', 'Taekwondo', 'Judo', 'Jiu Jitsu', 'Kickboxing', 'Lucha Libre', 'Sumo', 'Aikido', 'Kendo', 'Capoeira'
  ],
  'Lugares del Mundo': [
    'Playa', 'Montaña', 'Ciudad', 'Bosque', 'Desierto', 'Lago', 'Río', 'Parque', 'Museo', 'Teatro',
    'Restaurante', 'Café', 'Biblioteca', 'Escuela', 'Hospital', 'Aeropuerto', 'Estación', 'Centro Comercial', 'Cine', 'Gimnasio',
    'Hotel', 'Oficina', 'Banco', 'Iglesia', 'Estadio', 'Plaza', 'Mercado', 'Supermercado', 'Farmacia', 'Gasolinera',
    'Zoo', 'Acuario', 'Planetario', 'Observatorio', 'Castillo', 'Palacio', 'Catedral', 'Mezquita', 'Templo', 'Sinagoga',
    'Pirámide', 'Coliseo', 'Torre', 'Puente', 'Túnel', 'Muelle', 'Puerto', 'Marina', 'Faro', 'Isla'
  ],
  'Tecnología': [
    'Computadora', 'Celular', 'Tablet', 'Laptop', 'Smartwatch', 'Auriculares', 'Teclado', 'Mouse', 'Monitor', 'Impresora',
    'Cámara', 'Drone', 'Router', 'USB', 'Disco Duro', 'Internet', 'WiFi', 'Bluetooth', 'Aplicación', 'Software',
    'Inteligencia Artificial', 'Robot', 'VR', 'Streaming', 'Podcast', 'Email', 'Chat', 'Videollamada', 'Cloud', 'Servidor',
    'Base de Datos', 'Algoritmo', 'Código', 'Bug', 'Hack', 'Antivirus', 'Firewall', 'Backup', 'Update', 'Download',
    'Upload', 'Browser', 'Website', 'App', 'Plugin', 'API', 'HTML', 'CSS', 'JavaScript', 'Python'
  ],
  'Entretenimiento': [
    'Película', 'Serie', 'Videojuego', 'Libro', 'Música', 'Concierto', 'Festival', 'Teatro', 'Comedia', 'Magia',
    'Circo', 'Karaoke', 'Trivias', 'Escape Room', 'Bowling', 'Billar', 'Dardos', 'Cartas', 'Monopoly', 'Ajedrez',
    'Netflix', 'YouTube', 'TikTok', 'Instagram', 'Spotify', 'Disney Plus', 'HBO', 'Amazon Prime', 'Apple TV', 'Hulu',
    'Twitch', 'Facebook', 'Twitter', 'Snapchat', 'WhatsApp', 'Telegram', 'Discord', 'Reddit', 'Pinterest', 'LinkedIn',
    'Drama', 'Acción', 'Terror', 'Suspenso', 'Romance', 'Ciencia Ficción', 'Fantasía', 'Animación', 'Documental', 'Biografía'
  ],
  'Vehículos': [
    'Carro', 'Moto', 'Bicicleta', 'Avión', 'Helicóptero', 'Barco', 'Yate', 'Lancha', 'Submarino', 'Tren',
    'Metro', 'Autobús', 'Taxi', 'Uber', 'Camión', 'Tractor', 'Ambulancia', 'Patrulla', 'Bomberos', 'Scooter',
    'Patineta', 'Patines', 'Segway', 'Jet Ski', 'Globo', 'Camioneta', 'SUV', 'Sedan', 'Coupe', 'Convertible',
    'Hatchback', 'Station Wagon', 'Pickup', 'Van', 'Minivan', 'Limosina', 'Deportivo', 'Híbrido', 'Eléctrico', 'Diesel',
    'Trailer', 'Remolque', 'Grúa', 'Excavadora', 'Bulldozer', 'Retroexcavadora', 'Aplanadora', 'Mezcladora', 'Volquete', 'Montacargas'
  ],
  'Objetos Cotidianos': [
    'Mesa', 'Silla', 'Cama', 'Sofá', 'Lámpara', 'Espejo', 'Reloj', 'Teléfono', 'Libro', 'Bolígrafo',
    'Cuaderno', 'Mochila', 'Cartera', 'Llave', 'Paraguas', 'Botella', 'Taza', 'Plato', 'Tenedor', 'Cuchillo',
    'Cepillo', 'Peine', 'Jabón', 'Toalla', 'Almohada', 'Sábana', 'Colcha', 'Edredón', 'Cobija', 'Cortina',
    'Alfombra', 'Tapete', 'Florero', 'Cuadro', 'Fotografía', 'Marco', 'Calendario', 'Agenda', 'Folder', 'Carpeta',
    'Tijeras', 'Pegamento', 'Cinta', 'Grapadora', 'Clips', 'Chinches', 'Post-it', 'Marcador', 'Pluma', 'Lápiz'
  ],
  'Naturaleza': [
    'Árbol', 'Flor', 'Rosa', 'Girasol', 'Tulipán', 'Pasto', 'Hoja', 'Rama', 'Semilla', 'Fruto',
    'Sol', 'Luna', 'Estrella', 'Nube', 'Lluvia', 'Trueno', 'Relámpago', 'Arcoíris', 'Nieve', 'Viento',
    'Volcán', 'Terremoto', 'Tsunami', 'Huracán', 'Tornado', 'Tormenta', 'Granizo', 'Escarcha', 'Rocío', 'Niebla',
    'Aurora Boreal', 'Eclipse', 'Meteoro', 'Cometa', 'Asteroide', 'Planeta', 'Galaxia', 'Nebulosa', 'Agujero Negro', 'Supernova',
    'Pino', 'Roble', 'Sauce', 'Olivo', 'Palma', 'Cactus', 'Bambú', 'Helecho', 'Musgo', 'Liquen'
  ],
  'Emociones y Sentimientos': [
    'Felicidad', 'Tristeza', 'Enojo', 'Miedo', 'Sorpresa', 'Amor', 'Odio', 'Alegría', 'Melancolía', 'Nostalgia',
    'Ansiedad', 'Calma', 'Estrés', 'Paz', 'Esperanza', 'Confianza', 'Duda', 'Orgullo', 'Vergüenza', 'Gratitud',
    'Envidia', 'Celos', 'Compasión', 'Empatía', 'Ternura', 'Asco', 'Disgusto', 'Frustración', 'Desesperación', 'Alivio',
    'Satisfacción', 'Placer', 'Éxtasis', 'Euforia', 'Entusiasmo', 'Emoción', 'Excitación', 'Nerviosismo', 'Inquietud', 'Preocupación',
    'Angustia', 'Agobio', 'Apatía', 'Aburrimiento', 'Desinterés', 'Indiferencia', 'Rechazo', 'Desprecio', 'Rencor', 'Resentimiento'
  ],
  'Colores': [
    'Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Negro', 'Blanco', 'Gris',
    'Café', 'Dorado', 'Plateado', 'Turquesa', 'Violeta', 'Cian', 'Magenta', 'Beige', 'Coral', 'Lavanda',
    'Carmesí', 'Escarlata', 'Bermellón', 'Granate', 'Burdeos', 'Vino', 'Cereza', 'Frambuesa', 'Fresa', 'Sandía',
    'Salmón', 'Melocotón', 'Durazno', 'Albaricoque', 'Mandarina', 'Zanahoria', 'Calabaza', 'Ámbar', 'Miel', 'Mostaza',
    'Limón', 'Banana', 'Crema', 'Marfil', 'Hueso', 'Perla', 'Champagne', 'Oro', 'Bronce', 'Cobre'
  ],
  'Países': [
    'México', 'Estados Unidos', 'Canadá', 'Brasil', 'Argentina', 'España', 'Francia', 'Italia', 'Alemania', 'Reino Unido',
    'Japón', 'China', 'Corea', 'India', 'Australia', 'Rusia', 'Egipto', 'Sudáfrica', 'Colombia', 'Chile',
    'Perú', 'Venezuela', 'Ecuador', 'Uruguay', 'Costa Rica', 'Cuba', 'Guatemala', 'Honduras', 'Nicaragua', 'Panamá',
    'Bolivia', 'Paraguay', 'Haití', 'República Dominicana', 'Jamaica', 'Trinidad y Tobago', 'Bahamas', 'Barbados', 'Belice', 'El Salvador',
    'Portugal', 'Grecia', 'Turquía', 'Suiza', 'Austria', 'Bélgica', 'Holanda', 'Suecia', 'Noruega', 'Dinamarca'
  ],
  'Instrumentos Musicales': [
    'Piano', 'Guitarra', 'Bajo', 'Batería', 'Violín', 'Trompeta', 'Saxofón', 'Flauta', 'Clarinete', 'Armónica',
    'Ukelele', 'Arpa', 'Acordeón', 'Maracas', 'Tambor', 'Xilófono', 'Teclado', 'Sintetizador', 'DJ Mixer', 'Micrófono',
    'Viola', 'Violonchelo', 'Contrabajo', 'Banjo', 'Mandolina', 'Laúd', 'Cítara', 'Balalaica', 'Sitar', 'Shamisen',
    'Oboe', 'Fagot', 'Corno Inglés', 'Tuba', 'Trombón', 'Corneta', 'Trompa', 'Fliscorno', 'Bombardino', 'Helicón',
    'Ocarina', 'Flauta Dulce', 'Flauta Traversa', 'Piccolo', 'Gaita', 'Didgeridoo', 'Pandereta', 'Bongos', 'Congas', 'Timbales'
  ],
  'Redes Sociales y Apps': [
    'Facebook', 'Instagram', 'Twitter', 'TikTok', 'YouTube', 'WhatsApp', 'Telegram', 'Discord', 'Snapchat', 'LinkedIn',
    'Reddit', 'Pinterest', 'Twitch', 'Spotify', 'Netflix', 'Uber', 'Rappi', 'Amazon', 'Zoom', 'Google Meet',
    'Skype', 'Teams', 'Slack', 'Gmail', 'Outlook', 'Yahoo', 'Hotmail', 'iCloud', 'Dropbox', 'Google Drive',
    'OneDrive', 'WeTransfer', 'Mega', 'MediaFire', 'GitHub', 'GitLab', 'Bitbucket', 'Stack Overflow', 'Medium', 'WordPress',
    'Blogger', 'Tumblr', 'Flickr', 'DeviantArt', 'Behance', 'Dribbble', 'Figma', 'Canva', 'Adobe', 'Photoshop'
  ]
};

// Base categories in English without "All Categories"
const BASE_CATEGORIES_EN: Record<string, string[]> = {
  'Animals': [
    'Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Monkey', 'Zebra', 'Bear', 'Wolf',
    'Fox', 'Eagle', 'Dolphin', 'Shark', 'Whale', 'Octopus', 'Turtle', 'Penguin', 'Crocodile', 'Snake',
    'Horse', 'Cow', 'Pig', 'Rabbit', 'Squirrel', 'Owl', 'Duck', 'Chicken', 'Bird', 'Butterfly',
    'Bee', 'Ant', 'Spider', 'Fly', 'Mosquito', 'Frog', 'Toad', 'Lizard', 'Iguana', 'Chameleon',
    'Kangaroo', 'Koala', 'Panda', 'Gorilla', 'Chimpanzee', 'Orangutan', 'Rhinoceros', 'Hippopotamus', 'Zebu', 'Bison'
  ],
  'Food and Drinks': [
    'Pizza', 'Hamburger', 'Tacos', 'Sushi', 'Pasta', 'Salad', 'Ice Cream', 'Cake', 'Chocolate', 'Coffee',
    'Tea', 'Juice', 'Soda', 'Water', 'Beer', 'Rice', 'Bread', 'Cheese', 'Yogurt', 'Cereal',
    'Soup', 'Sandwich', 'Hot Dog', 'Burrito', 'Nachos', 'Popcorn', 'Donuts', 'Cookies', 'Muffins', 'Smoothie',
    'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Watermelon', 'Melon', 'Pineapple', 'Mango', 'Papaya',
    'Pear', 'Peach', 'Plum', 'Cherry', 'Raspberry', 'Blueberry', 'Blackberry', 'Kiwi', 'Coconut', 'Avocado'
  ],
  'Professions': [
    'Doctor', 'Nurse', 'Teacher', 'Engineer', 'Lawyer', 'Chef', 'Pilot', 'Architect', 'Designer', 'Programmer',
    'Musician', 'Actor', 'Writer', 'Police', 'Firefighter', 'Veterinarian', 'Dentist', 'Accountant', 'Mechanic', 'Electrician',
    'Carpenter', 'Photographer', 'Journalist', 'Scientist', 'Psychologist', 'Artist', 'DJ', 'Youtuber', 'Influencer', 'Entrepreneur',
    'Banker', 'Economist', 'Farmer', 'Gardener', 'Florist', 'Baker', 'Pastry Chef', 'Butcher', 'Fisherman', 'Miner',
    'Builder', 'Bricklayer', 'Painter', 'Welder', 'Plumber', 'Locksmith', 'Upholsterer', 'Shoemaker', 'Tailor', 'Dressmaker'
  ],
  'Sports and Activities': [
    'Football', 'Basketball', 'Baseball', 'Tennis', 'Volleyball', 'Swimming', 'Cycling', 'Boxing', 'Athletics', 'Golf',
    'Hockey', 'Rugby', 'Karate', 'Yoga', 'Crossfit', 'Surfing', 'Skiing', 'Snowboarding', 'Climbing', 'Parkour',
    'Skating', 'Skateboarding', 'Gymnastics', 'Fencing', 'Chess', 'American Football', 'Handball', 'Water Polo', 'Softball', 'Cricket',
    'Badminton', 'Ping Pong', 'Squash', 'Racquetball', 'Bowling', 'Billiards', 'Darts', 'Archery', 'Horseback Riding', 'Polo',
    'Rodeo', 'Taekwondo', 'Judo', 'Jiu Jitsu', 'Kickboxing', 'Wrestling', 'Sumo', 'Aikido', 'Kendo', 'Capoeira'
  ],
  'Places in the World': [
    'Beach', 'Mountain', 'City', 'Forest', 'Desert', 'Lake', 'River', 'Park', 'Museum', 'Theater',
    'Restaurant', 'Cafe', 'Library', 'School', 'Hospital', 'Airport', 'Station', 'Mall', 'Cinema', 'Gym',
    'Hotel', 'Office', 'Bank', 'Church', 'Stadium', 'Square', 'Market', 'Supermarket', 'Pharmacy', 'Gas Station',
    'Zoo', 'Aquarium', 'Planetarium', 'Observatory', 'Castle', 'Palace', 'Cathedral', 'Mosque', 'Temple', 'Synagogue',
    'Pyramid', 'Colosseum', 'Tower', 'Bridge', 'Tunnel', 'Pier', 'Port', 'Marina', 'Lighthouse', 'Island'
  ],
  'Technology': [
    'Computer', 'Phone', 'Tablet', 'Laptop', 'Smartwatch', 'Headphones', 'Keyboard', 'Mouse', 'Monitor', 'Printer',
    'Camera', 'Drone', 'Router', 'USB', 'Hard Drive', 'Internet', 'WiFi', 'Bluetooth', 'App', 'Software',
    'Artificial Intelligence', 'Robot', 'VR', 'Streaming', 'Podcast', 'Email', 'Chat', 'Video Call', 'Cloud', 'Server',
    'Database', 'Algorithm', 'Code', 'Bug', 'Hack', 'Antivirus', 'Firewall', 'Backup', 'Update', 'Download',
    'Upload', 'Browser', 'Website', 'Application', 'Plugin', 'API', 'HTML', 'CSS', 'JavaScript', 'Python'
  ],
  'Entertainment': [
    'Movie', 'Series', 'Video Game', 'Book', 'Music', 'Concert', 'Festival', 'Theater', 'Comedy', 'Magic',
    'Circus', 'Karaoke', 'Trivia', 'Escape Room', 'Bowling', 'Billiards', 'Darts', 'Cards', 'Monopoly', 'Chess',
    'Netflix', 'YouTube', 'TikTok', 'Instagram', 'Spotify', 'Disney Plus', 'HBO', 'Amazon Prime', 'Apple TV', 'Hulu',
    'Twitch', 'Facebook', 'Twitter', 'Snapchat', 'WhatsApp', 'Telegram', 'Discord', 'Reddit', 'Pinterest', 'LinkedIn',
    'Drama', 'Action', 'Horror', 'Thriller', 'Romance', 'Science Fiction', 'Fantasy', 'Animation', 'Documentary', 'Biography'
  ],
  'Vehicles': [
    'Car', 'Motorcycle', 'Bicycle', 'Airplane', 'Helicopter', 'Boat', 'Yacht', 'Speedboat', 'Submarine', 'Train',
    'Subway', 'Bus', 'Taxi', 'Uber', 'Truck', 'Tractor', 'Ambulance', 'Police Car', 'Fire Truck', 'Scooter',
    'Skateboard', 'Roller Skates', 'Segway', 'Jet Ski', 'Hot Air Balloon', 'Pickup Truck', 'SUV', 'Sedan', 'Coupe', 'Convertible',
    'Hatchback', 'Station Wagon', 'Van', 'Minivan', 'Limousine', 'Sports Car', 'Hybrid', 'Electric Car', 'Diesel', 'Trailer',
    'Tow Truck', 'Crane', 'Excavator', 'Bulldozer', 'Backhoe', 'Road Roller', 'Cement Mixer', 'Dump Truck', 'Forklift', 'Cart'
  ],
  'Everyday Objects': [
    'Table', 'Chair', 'Bed', 'Sofa', 'Lamp', 'Mirror', 'Clock', 'Phone', 'Book', 'Pen',
    'Notebook', 'Backpack', 'Wallet', 'Key', 'Umbrella', 'Bottle', 'Cup', 'Plate', 'Fork', 'Knife',
    'Brush', 'Comb', 'Soap', 'Towel', 'Pillow', 'Sheet', 'Blanket', 'Duvet', 'Comforter', 'Curtain',
    'Carpet', 'Rug', 'Vase', 'Picture', 'Photo', 'Frame', 'Calendar', 'Planner', 'Folder', 'Binder',
    'Scissors', 'Glue', 'Tape', 'Stapler', 'Clips', 'Pushpins', 'Post-it', 'Marker', 'Pen', 'Pencil'
  ],
  'Nature': [
    'Tree', 'Flower', 'Rose', 'Sunflower', 'Tulip', 'Grass', 'Leaf', 'Branch', 'Seed', 'Fruit',
    'Sun', 'Moon', 'Star', 'Cloud', 'Rain', 'Thunder', 'Lightning', 'Rainbow', 'Snow', 'Wind',
    'Volcano', 'Earthquake', 'Tsunami', 'Hurricane', 'Tornado', 'Storm', 'Hail', 'Frost', 'Dew', 'Fog',
    'Aurora Borealis', 'Eclipse', 'Meteor', 'Comet', 'Asteroid', 'Planet', 'Galaxy', 'Nebula', 'Black Hole', 'Supernova',
    'Pine', 'Oak', 'Willow', 'Olive', 'Palm', 'Cactus', 'Bamboo', 'Fern', 'Moss', 'Lichen'
  ],
  'Emotions and Feelings': [
    'Happiness', 'Sadness', 'Anger', 'Fear', 'Surprise', 'Love', 'Hate', 'Joy', 'Melancholy', 'Nostalgia',
    'Anxiety', 'Calm', 'Stress', 'Peace', 'Hope', 'Trust', 'Doubt', 'Pride', 'Shame', 'Gratitude',
    'Envy', 'Jealousy', 'Compassion', 'Empathy', 'Tenderness', 'Disgust', 'Aversion', 'Frustration', 'Despair', 'Relief',
    'Satisfaction', 'Pleasure', 'Ecstasy', 'Euphoria', 'Enthusiasm', 'Emotion', 'Excitement', 'Nervousness', 'Restlessness', 'Worry',
    'Anguish', 'Overwhelm', 'Apathy', 'Boredom', 'Disinterest', 'Indifference', 'Rejection', 'Contempt', 'Grudge', 'Resentment'
  ],
  'Colors': [
    'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White', 'Gray',
    'Brown', 'Gold', 'Silver', 'Turquoise', 'Violet', 'Cyan', 'Magenta', 'Beige', 'Coral', 'Lavender',
    'Crimson', 'Scarlet', 'Vermillion', 'Maroon', 'Burgundy', 'Wine', 'Cherry', 'Raspberry', 'Strawberry', 'Watermelon',
    'Salmon', 'Peach', 'Apricot', 'Tangerine', 'Carrot', 'Pumpkin', 'Amber', 'Honey', 'Mustard', 'Lemon',
    'Banana', 'Cream', 'Ivory', 'Bone', 'Pearl', 'Champagne', 'Gold', 'Bronze', 'Copper', 'Rust'
  ],
  'Countries': [
    'Mexico', 'United States', 'Canada', 'Brazil', 'Argentina', 'Spain', 'France', 'Italy', 'Germany', 'United Kingdom',
    'Japan', 'China', 'Korea', 'India', 'Australia', 'Russia', 'Egypt', 'South Africa', 'Colombia', 'Chile',
    'Peru', 'Venezuela', 'Ecuador', 'Uruguay', 'Costa Rica', 'Cuba', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama',
    'Bolivia', 'Paraguay', 'Haiti', 'Dominican Republic', 'Jamaica', 'Trinidad and Tobago', 'Bahamas', 'Barbados', 'Belize', 'El Salvador',
    'Portugal', 'Greece', 'Turkey', 'Switzerland', 'Austria', 'Belgium', 'Netherlands', 'Sweden', 'Norway', 'Denmark'
  ],
  'Musical Instruments': [
    'Piano', 'Guitar', 'Bass', 'Drums', 'Violin', 'Trumpet', 'Saxophone', 'Flute', 'Clarinet', 'Harmonica',
    'Ukulele', 'Harp', 'Accordion', 'Maracas', 'Drum', 'Xylophone', 'Keyboard', 'Synthesizer', 'DJ Mixer', 'Microphone',
    'Viola', 'Cello', 'Double Bass', 'Banjo', 'Mandolin', 'Lute', 'Zither', 'Balalaika', 'Sitar', 'Shamisen',
    'Oboe', 'Bassoon', 'English Horn', 'Tuba', 'Trombone', 'Cornet', 'French Horn', 'Flugelhorn', 'Euphonium', 'Helicon',
    'Ocarina', 'Recorder', 'Transverse Flute', 'Piccolo', 'Bagpipes', 'Didgeridoo', 'Tambourine', 'Bongos', 'Congas', 'Timbales'
  ],
  'Social Media and Apps': [
    'Facebook', 'Instagram', 'Twitter', 'TikTok', 'YouTube', 'WhatsApp', 'Telegram', 'Discord', 'Snapchat', 'LinkedIn',
    'Reddit', 'Pinterest', 'Twitch', 'Spotify', 'Netflix', 'Uber', 'Rappi', 'Amazon', 'Zoom', 'Google Meet',
    'Skype', 'Teams', 'Slack', 'Gmail', 'Outlook', 'Yahoo', 'Hotmail', 'iCloud', 'Dropbox', 'Google Drive',
    'OneDrive', 'WeTransfer', 'Mega', 'MediaFire', 'GitHub', 'GitLab', 'Bitbucket', 'Stack Overflow', 'Medium', 'WordPress',
    'Blogger', 'Tumblr', 'Flickr', 'DeviantArt', 'Behance', 'Dribbble', 'Figma', 'Canva', 'Adobe', 'Photoshop'
  ]
};

// Export final categories with "All Categories" included
export const CATEGORIES_ES: Record<string, string[]> = {
  'Todas las Categorías': getAllWords(BASE_CATEGORIES_ES),
  ...BASE_CATEGORIES_ES
};

export const CATEGORIES_EN: Record<string, string[]> = {
  'All Categories': getAllWords(BASE_CATEGORIES_EN),
  ...BASE_CATEGORIES_EN
};

export const AVATARS = [
  '😎', '😊', '🤓', '😺', '🦊', '🐶', '🐼', '🦁',
  '🐯', '🐨', '🦄', '🐸', '🐙', '🦉', '🐧', '🦆'
];
