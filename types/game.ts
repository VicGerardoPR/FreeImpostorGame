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

// CATEGORÍAS EN ESPAÑOL (100 palabras cada una)
export const CATEGORIES_ES: Record<string, string[]> = {
  'Todas las Categorías': [], // Se llenará dinámicamente
  
  'Animales': [
    'Perro', 'Gato', 'León', 'Tigre', 'Elefante', 'Jirafa', 'Mono', 'Cebra', 'Oso', 'Lobo',
    'Zorro', 'Águila', 'Delfín', 'Tiburón', 'Ballena', 'Pulpo', 'Tortuga', 'Pingüino', 'Cocodrilo', 'Serpiente',
    'Caballo', 'Vaca', 'Cerdo', 'Conejo', 'Ardilla', 'Búho', 'Pato', 'Gallina', 'Pájaro', 'Mariposa',
    'Abeja', 'Hormiga', 'Araña', 'Mosca', 'Mosquito', 'Rana', 'Sapo', 'Lagarto', 'Iguana', 'Camaleón',
    'Canguro', 'Koala', 'Panda', 'Gorila', 'Chimpancé', 'Orangután', 'Rinoceronte', 'Hipopótamo', 'Cebú', 'Bisonte',
    'Alce', 'Venado', 'Reno', 'Antílope', 'Gacela', 'Búfalo', 'Ñu', 'Jaguar', 'Leopardo', 'Pantera',
    'Puma', 'Lince', 'Guepardo', 'Hiena', 'Chacal', 'Mapache', 'Comadreja', 'Nutria', 'Foca', 'Morsa',
    'Orca', 'Cachalote', 'Manatí', 'Dugongo', 'Estrella de Mar', 'Medusa', 'Calamar', 'Erizo de Mar', 'Cangrejo', 'Langosta',
    'Camarón', 'Ostión', 'Mejillón', 'Almeja', 'Caracol', 'Babosa', 'Lombriz', 'Cigarra', 'Grillo', 'Saltamontes',
    'Libélula', 'Escarabajo', 'Mariquita', 'Luciérnaga', 'Polilla', 'Avispa', 'Abejorro', 'Termita', 'Chinche', 'Piojo'
  ],
  
  'Comida y Bebidas': [
    'Pizza', 'Hamburguesa', 'Tacos', 'Sushi', 'Pasta', 'Ensalada', 'Helado', 'Pastel', 'Chocolate', 'Café',
    'Té', 'Jugo', 'Refresco', 'Agua', 'Cerveza', 'Arroz', 'Pan', 'Queso', 'Yogurt', 'Cereal',
    'Sopa', 'Sándwich', 'Perro Caliente', 'Burrito', 'Nachos', 'Palomitas', 'Donas', 'Galletas', 'Panecillos', 'Batido',
    'Manzana', 'Plátano', 'Naranja', 'Uva', 'Fresa', 'Sandía', 'Melón', 'Piña', 'Mango', 'Papaya',
    'Pera', 'Durazno', 'Ciruela', 'Cereza', 'Frambuesa', 'Arándano', 'Mora', 'Kiwi', 'Coco', 'Aguacate',
    'Tomate', 'Pepino', 'Lechuga', 'Zanahoria', 'Cebolla', 'Ajo', 'Papa', 'Camote', 'Maíz', 'Brócoli',
    'Coliflor', 'Espinaca', 'Calabaza', 'Berenjena', 'Pimiento', 'Chile', 'Rábano', 'Nabo', 'Apio', 'Puerro',
    'Pollo', 'Carne', 'Pescado', 'Camarón', 'Jamón', 'Salchicha', 'Tocino', 'Huevo', 'Leche', 'Mantequilla',
    'Crema', 'Nieve', 'Gelatina', 'Flan', 'Pudín', 'Tarta', 'Pie', 'Mermelada', 'Miel', 'Azúcar',
    'Sal', 'Pimienta', 'Canela', 'Vainilla', 'Curry', 'Mostaza', 'Ketchup', 'Mayonesa', 'Salsa', 'Vinagre'
  ],
  
  'Profesiones': [
    'Doctor', 'Enfermera', 'Maestro', 'Ingeniero', 'Abogado', 'Chef', 'Piloto', 'Arquitecto', 'Diseñador', 'Programador',
    'Músico', 'Actor', 'Escritor', 'Policía', 'Bombero', 'Veterinario', 'Dentista', 'Contador', 'Mecánico', 'Electricista',
    'Carpintero', 'Fotógrafo', 'Periodista', 'Científico', 'Psicólogo', 'Artista', 'DJ', 'Youtuber', 'Influencer', 'Emprendedor',
    'Banquero', 'Economista', 'Agricultor', 'Jardinero', 'Florista', 'Panadero', 'Pastelero', 'Carnicero', 'Pescador', 'Minero',
    'Constructor', 'Albañil', 'Pintor', 'Soldador', 'Plomero', 'Cerrajero', 'Tapicero', 'Zapatero', 'Sastre', 'Modista',
    'Peluquero', 'Barbero', 'Estilista', 'Maquillista', 'Esteticista', 'Masajista', 'Entrenador', 'Deportista', 'Atleta', 'Árbitro',
    'Juez', 'Fiscal', 'Notario', 'Secretario', 'Recepcionista', 'Gerente', 'Director', 'Presidente', 'Ministro', 'Diplomático',
    'Traductor', 'Intérprete', 'Bibliotecario', 'Historiador', 'Arqueólogo', 'Geólogo', 'Biólogo', 'Químico', 'Físico', 'Matemático',
    'Astrónomo', 'Meteorólogo', 'Oceanógrafo', 'Botánico', 'Zoólogo', 'Antropólogo', 'Sociólogo', 'Filósofo', 'Teólogo', 'Monje',
    'Sacerdote', 'Pastor', 'Rabino', 'Imán', 'Guía Turístico', 'Azafata', 'Capitán', 'Marinero', 'Astronauta', 'Soldado'
  ],
  
  'Deportes y Actividades': [
    'Fútbol', 'Baloncesto', 'Béisbol', 'Tenis', 'Voleibol', 'Natación', 'Ciclismo', 'Box', 'Atletismo', 'Golf',
    'Hockey', 'Rugby', 'Karate', 'Yoga', 'Crossfit', 'Surf', 'Esquí', 'Snowboard', 'Escalada', 'Parkour',
    'Patinaje', 'Skateboard', 'Gimnasia', 'Esgrima', 'Ajedrez', 'Fútbol Americano', 'Handball', 'Waterpolo', 'Softbol', 'Críquet',
    'Badminton', 'Ping Pong', 'Squash', 'Racquetball', 'Bolos', 'Billar', 'Dardos', 'Tiro con Arco', 'Equitación', 'Polo',
    'Rodeo', 'Taekwondo', 'Judo', 'Jiu Jitsu', 'Kickboxing', 'Lucha Libre', 'Sumo', 'Aikido', 'Kendo', 'Capoeira',
    'Pilates', 'Zumba', 'Spinning', 'Aeróbicos', 'Step', 'Body Pump', 'Body Combat', 'Crossfit', 'Maratón', 'Triatlón',
    'Ciclismo de Montaña', 'BMX', 'Motocross', 'Rally', 'Fórmula 1', 'NASCAR', 'Karting', 'Paracaidismo', 'Ala Delta', 'Parapente',
    'Buceo', 'Snorkel', 'Vela', 'Remo', 'Kayak', 'Rafting', 'Windsurf', 'Kitesurf', 'Stand Up Paddle', 'Pesca',
    'Caza', 'Campamento', 'Senderismo', 'Alpinismo', 'Espeleología', 'Rappel', 'Tirolesa', 'Bungee Jumping', 'Paintball', 'Gotcha',
    'Airsoft', 'Laser Tag', 'Boliche', 'Minigolf', 'Go Karts', 'Trampolín', 'Slackline', 'Parkour', 'Calistenia', 'Halterofilia'
  ],
  
  'Lugares del Mundo': [
    'Playa', 'Montaña', 'Ciudad', 'Bosque', 'Desierto', 'Lago', 'Río', 'Parque', 'Museo', 'Teatro',
    'Restaurante', 'Café', 'Biblioteca', 'Escuela', 'Hospital', 'Aeropuerto', 'Estación', 'Centro Comercial', 'Cine', 'Gimnasio',
    'Hotel', 'Oficina', 'Banco', 'Iglesia', 'Estadio', 'Plaza', 'Mercado', 'Supermercado', 'Farmacia', 'Gasolinera',
    'Zoo', 'Acuario', 'Planetario', 'Observatorio', 'Castillo', 'Palacio', 'Catedral', 'Mezquita', 'Templo', 'Sinagoga',
    'Pirámide', 'Coliseo', 'Torre', 'Puente', 'Túnel', 'Muelle', 'Puerto', 'Marina', 'Faro', 'Isla',
    'Península', 'Bahía', 'Golfo', 'Estrecho', 'Cascada', 'Cañón', 'Cueva', 'Volcán', 'Glaciar', 'Selva',
    'Sabana', 'Tundra', 'Pradera', 'Pantano', 'Manglares', 'Arrecife', 'Atolón', 'Laguna', 'Oasis', 'Duna',
    'Valle', 'Meseta', 'Llanura', 'Colina', 'Montaña', 'Cordillera', 'Sierra', 'Cerro', 'Pico', 'Cumbre',
    'Parque Nacional', 'Reserva Natural', 'Santuario', 'Safari', 'Granja', 'Rancho', 'Hacienda', 'Viñedo', 'Bodega', 'Cervecería',
    'Destilería', 'Fábrica', 'Planta', 'Central', 'Refinería', 'Cantera', 'Mina', 'Pozo', 'Presa', 'Embalse'
  ],
  
  'Tecnología': [
    'Computadora', 'Celular', 'Tablet', 'Laptop', 'Smartwatch', 'Auriculares', 'Teclado', 'Mouse', 'Monitor', 'Impresora',
    'Cámara', 'Drone', 'Router', 'USB', 'Disco Duro', 'Internet', 'WiFi', 'Bluetooth', 'Aplicación', 'Software',
    'Inteligencia Artificial', 'Robot', 'VR', 'Streaming', 'Podcast', 'Email', 'Chat', 'Videollamada', 'Cloud', 'Servidor',
    'Base de Datos', 'Algoritmo', 'Código', 'Bug', 'Hack', 'Antivirus', 'Firewall', 'Backup', 'Update', 'Download',
    'Upload', 'Browser', 'Website', 'App', 'Plugin', 'API', 'HTML', 'CSS', 'JavaScript', 'Python',
    'Java', 'C++', 'PHP', 'SQL', 'Linux', 'Windows', 'MacOS', 'Android', 'iOS', 'Gaming',
    'Console', 'Joystick', 'Streaming', '4K', 'HD', 'LED', 'OLED', 'LCD', 'Plasma', 'Proyector',
    'Bocinas', 'Micrófono', 'Webcam', 'Escáner', 'Fax', 'Teléfono', 'Radio', 'Televisión', 'Satélite', 'Antena',
    'Cable', 'Fibra Óptica', 'Ethernet', 'LAN', 'WAN', '5G', '4G', 'LTE', 'GPS', 'Bluetooth',
    'NFC', 'RFID', 'QR', 'Biometría', 'Huella Digital', 'Reconocimiento Facial', 'Sensor', 'Chip', 'Procesador', 'RAM'
  ],
  
  'Entretenimiento': [
    'Película', 'Serie', 'Videojuego', 'Libro', 'Música', 'Concierto', 'Festival', 'Teatro', 'Comedia', 'Magia',
    'Circo', 'Karaoke', 'Trivias', 'Escape Room', 'Bowling', 'Billar', 'Dardos', 'Cartas', 'Monopoly', 'Ajedrez',
    'Netflix', 'YouTube', 'TikTok', 'Instagram', 'Spotify', 'Disney Plus', 'HBO', 'Amazon Prime', 'Apple TV', 'Hulu',
    'Twitch', 'Facebook', 'Twitter', 'Snapchat', 'WhatsApp', 'Telegram', 'Discord', 'Reddit', 'Pinterest', 'LinkedIn',
    'Drama', 'Acción', 'Terror', 'Suspenso', 'Romance', 'Ciencia Ficción', 'Fantasía', 'Animación', 'Documental', 'Biografía',
    'Western', 'Musical', 'Aventura', 'Misterio', 'Crimen', 'Guerra', 'Histórica', 'Deportiva', 'Familiar', 'Infantil',
    'Rock', 'Pop', 'Jazz', 'Blues', 'Country', 'Reggae', 'Hip Hop', 'Rap', 'Electrónica', 'Dance',
    'Clásica', 'Opera', 'Salsa', 'Merengue', 'Bachata', 'Reggaeton', 'Cumbia', 'Ranchera', 'Mariachi', 'Flamenco',
    'Casino', 'Apuestas', 'Lotería', 'Póker', 'Blackjack', 'Ruleta', 'Slot Machine', 'Bingo', 'Keno', 'Dados',
    'Parque de Diversiones', 'Montaña Rusa', 'Rueda de la Fortuna', 'Carrusel', 'Casa de Espejos', 'Tren Fantasma', 'Feria', 'Kermés', 'Carnaval', 'Halloween'
  ],
  
  'Vehículos': [
    'Carro', 'Moto', 'Bicicleta', 'Avión', 'Helicóptero', 'Barco', 'Yate', 'Lancha', 'Submarino', 'Tren',
    'Metro', 'Autobús', 'Taxi', 'Uber', 'Camión', 'Tractor', 'Ambulancia', 'Patrulla', 'Bomberos', 'Scooter',
    'Patineta', 'Patines', 'Segway', 'Jet Ski', 'Globo', 'Camioneta', 'SUV', 'Sedan', 'Coupe', 'Convertible',
    'Hatchback', 'Station Wagon', 'Pickup', 'Van', 'Minivan', 'Limosina', 'Deportivo', 'Híbrido', 'Eléctrico', 'Diesel',
    'Trailer', 'Remolque', 'Grúa', 'Excavadora', 'Bulldozer', 'Retroexcavadora', 'Aplanadora', 'Mezcladora', 'Volquete', 'Montacargas',
    'Carretilla', 'Triciclo', 'Cuatrimoto', 'Go Kart', 'Kart', 'Moto Acuática', 'Velero', 'Catamarán', 'Ferry', 'Crucero',
    'Portaaviones', 'Acorazado', 'Destructor', 'Fragata', 'Corbeta', 'Patrullera', 'Dragaminas', 'Pesquero', 'Carguero', 'Petrolero',
    'Tanquero', 'Contenedor', 'Jet Privado', 'Bimotor', 'Cessna', 'Ultraligero', 'Planeador', 'Cohete', 'Transbordador', 'Estación Espacial',
    'Rover', 'Lunar', 'Satélite', 'Dron', 'Cuadracóptero', 'Hexacóptero', 'Octocóptero', 'Zepelín', 'Dirigible', 'Parapente',
    'Ala Delta', 'Paracaídas', 'Jetpack', 'Hoverboard', 'Monopatín Eléctrico', 'Bicicleta Eléctrica', 'Moto Eléctrica', 'Carro Eléctrico', 'Tesla', 'Cybertruck'
  ],
  
  'Objetos Cotidianos': [
    'Mesa', 'Silla', 'Cama', 'Sofá', 'Lámpara', 'Espejo', 'Reloj', 'Teléfono', 'Libro', 'Bolígrafo',
    'Cuaderno', 'Mochila', 'Cartera', 'Llave', 'Paraguas', 'Botella', 'Taza', 'Plato', 'Tenedor', 'Cuchillo',
    'Cepillo', 'Peine', 'Jabón', 'Toalla', 'Almohada', 'Sábana', 'Colcha', 'Edredón', 'Cobija', 'Cortina',
    'Alfombra', 'Tapete', 'Florero', 'Cuadro', 'Fotografía', 'Marco', 'Calendario', 'Agenda', 'Folder', 'Carpeta',
    'Tijeras', 'Pegamento', 'Cinta', 'Grapadora', 'Clips', 'Chinches', 'Post-it', 'Marcador', 'Pluma', 'Lápiz',
    'Borrador', 'Sacapuntas', 'Regla', 'Compás', 'Transportador', 'Escuadra', 'Calculadora', 'Diccionario', 'Enciclopedia', 'Atlas',
    'Mapa', 'Globo Terráqueo', 'Telescopio', 'Microscopio', 'Lupa', 'Brújula', 'Linterna', 'Vela', 'Fósforos', 'Encendedor',
    'Cenicero', 'Bote de Basura', 'Escoba', 'Recogedor', 'Trapeador', 'Cubeta', 'Esponja', 'Trapo', 'Desinfectante', 'Cloro',
    'Jabón', 'Detergente', 'Suavizante', 'Shampoo', 'Acondicionador', 'Crema', 'Loción', 'Perfume', 'Desodorante', 'Pasta Dental',
    'Cepillo de Dientes', 'Hilo Dental', 'Enjuague Bucal', 'Navaja', 'Rastrillo', 'Espuma de Afeitar', 'Secadora', 'Plancha', 'Licuadora', 'Batidora'
  ],
  
  'Naturaleza': [
    'Árbol', 'Flor', 'Rosa', 'Girasol', 'Tulipán', 'Pasto', 'Hoja', 'Rama', 'Semilla', 'Fruto',
    'Sol', 'Luna', 'Estrella', 'Nube', 'Lluvia', 'Trueno', 'Relámpago', 'Arcoíris', 'Nieve', 'Viento',
    'Volcán', 'Terremoto', 'Tsunami', 'Huracán', 'Tornado', 'Tormenta', 'Granizo', 'Escarcha', 'Rocío', 'Niebla',
    'Aurora Boreal', 'Eclipse', 'Meteoro', 'Cometa', 'Asteroide', 'Planeta', 'Galaxia', 'Nebulosa', 'Agujero Negro', 'Supernova',
    'Pino', 'Roble', 'Sauce', 'Olivo', 'Palma', 'Cactus', 'Bambú', 'Helecho', 'Musgo', 'Liquen',
    'Orquídea', 'Margarita', 'Clavel', 'Lirio', 'Azucena', 'Violeta', 'Gardenia', 'Jazmín', 'Lavanda', 'Hortensia',
    'Piedra', 'Roca', 'Mineral', 'Cristal', 'Diamante', 'Oro', 'Plata', 'Cobre', 'Hierro', 'Bronce',
    'Arena', 'Arcilla', 'Barro', 'Lodo', 'Tierra', 'Suelo', 'Humus', 'Compost', 'Fertilizante', 'Abono',
    'Marea', 'Ola', 'Corriente', 'Remolino', 'Marejada', 'Resaca', 'Espuma', 'Alga', 'Coral', 'Perla',
    'Concha', 'Caparazón', 'Pluma', 'Escama', 'Piel', 'Pelo', 'Lana', 'Seda', 'Polen', 'Néctar'
  ],
  
  'Emociones y Sentimientos': [
    'Felicidad', 'Tristeza', 'Enojo', 'Miedo', 'Sorpresa', 'Amor', 'Odio', 'Alegría', 'Melancolía', 'Nostalgia',
    'Ansiedad', 'Calma', 'Estrés', 'Paz', 'Esperanza', 'Confianza', 'Duda', 'Orgullo', 'Vergüenza', 'Gratitud',
    'Envidia', 'Celos', 'Compasión', 'Empatía', 'Ternura', 'Asco', 'Disgusto', 'Frustración', 'Desesperación', 'Alivio',
    'Satisfacción', 'Placer', 'Éxtasis', 'Euforia', 'Entusiasmo', 'Emoción', 'Excitación', 'Nerviosismo', 'Inquietud', 'Preocupación',
    'Angustia', 'Agobio', 'Apatía', 'Aburrimiento', 'Desinterés', 'Indiferencia', 'Rechazo', 'Desprecio', 'Rencor', 'Resentimiento',
    'Amargura', 'Hostilidad', 'Ira', 'Furia', 'Rabia', 'Cólera', 'Indignación', 'Irritación', 'Impaciencia', 'Molestia',
    'Desconfianza', 'Sospecha', 'Incertidumbre', 'Confusión', 'Perplejidad', 'Asombro', 'Admiración', 'Fascinación', 'Curiosidad', 'Interés',
    'Motivación', 'Determinación', 'Ambición', 'Pasión', 'Deseo', 'Anhelo', 'Añoranza', 'Soledad', 'Abandono', 'Desolación',
    'Culpa', 'Remordimiento', 'Arrepentimiento', 'Humildad', 'Modestia', 'Soberbia', 'Arrogancia', 'Vanidad', 'Petulancia', 'Prepotencia',
    'Bondad', 'Generosidad', 'Altruismo', 'Egoísmo', 'Avaricia', 'Codicia', 'Ambición', 'Valentía', 'Cobardía', 'Timidez'
  ],
  
  'Colores': [
    'Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Negro', 'Blanco', 'Gris',
    'Café', 'Dorado', 'Plateado', 'Turquesa', 'Violeta', 'Cian', 'Magenta', 'Beige', 'Coral', 'Lavanda',
    'Carmesí', 'Escarlata', 'Bermellón', 'Granate', 'Burdeos', 'Vino', 'Cereza', 'Frambuesa', 'Fresa', 'Sandía',
    'Salmón', 'Melocotón', 'Durazno', 'Albaricoque', 'Mandarina', 'Zanahoria', 'Calabaza', 'Ámbar', 'Miel', 'Mostaza',
    'Limón', 'Banana', 'Crema', 'Marfil', 'Hueso', 'Perla', 'Champagne', 'Oro', 'Bronce', 'Cobre',
    'Herrumbre', 'Terracota', 'Caramelo', 'Canela', 'Chocolate', 'Marrón', 'Caoba', 'Nogal', 'Avellana', 'Arena',
    'Tostado', 'Café con Leche', 'Caqui', 'Oliva', 'Musgo', 'Jade', 'Esmeralda', 'Menta', 'Lima', 'Pistacho',
    'Aguamarina', 'Celeste', 'Cielo', 'Cobalto', 'Zafiro', 'Añil', 'Índigo', 'Azul Marino', 'Azul Eléctrico', 'Azul Real',
    'Lila', 'Malva', 'Púrpura', 'Ciruela', 'Berenjena', 'Uva', 'Amatista', 'Fucsia', 'Magenta', 'Carmín',
    'Ceniza', 'Plomo', 'Acero', 'Carbón', 'Grafito', 'Pizarra', 'Humo', 'Nube', 'Niebla', 'Blanco Roto'
  ],
  
  'Países': [
    'México', 'Estados Unidos', 'Canadá', 'Brasil', 'Argentina', 'España', 'Francia', 'Italia', 'Alemania', 'Reino Unido',
    'Japón', 'China', 'Corea', 'India', 'Australia', 'Rusia', 'Egipto', 'Sudáfrica', 'Colombia', 'Chile',
    'Perú', 'Venezuela', 'Ecuador', 'Uruguay', 'Costa Rica', 'Cuba', 'Guatemala', 'Honduras', 'Nicaragua', 'Panamá',
    'Bolivia', 'Paraguay', 'Haití', 'República Dominicana', 'Jamaica', 'Trinidad y Tobago', 'Bahamas', 'Barbados', 'Belice', 'El Salvador',
    'Portugal', 'Grecia', 'Turquía', 'Suiza', 'Austria', 'Bélgica', 'Holanda', 'Suecia', 'Noruega', 'Dinamarca',
    'Finlandia', 'Irlanda', 'Islandia', 'Polonia', 'República Checa', 'Hungría', 'Rumania', 'Bulgaria', 'Croacia', 'Serbia',
    'Ucrania', 'Kazajistán', 'Uzbekistán', 'Pakistán', 'Bangladesh', 'Tailandia', 'Vietnam', 'Filipinas', 'Indonesia', 'Malasia',
    'Singapur', 'Myanmar', 'Camboya', 'Laos', 'Nepal', 'Sri Lanka', 'Maldivas', 'Mongolia', 'Corea del Norte', 'Corea del Sur',
    'Arabia Saudita', 'Emiratos Árabes', 'Qatar', 'Kuwait', 'Bahréin', 'Omán', 'Yemen', 'Irak', 'Irán', 'Israel',
    'Jordania', 'Líbano', 'Siria', 'Afganistán', 'Marruecos', 'Argelia', 'Túnez', 'Libia', 'Kenia', 'Tanzania'
  ],
  
  'Instrumentos Musicales': [
    'Piano', 'Guitarra', 'Bajo', 'Batería', 'Violín', 'Trompeta', 'Saxofón', 'Flauta', 'Clarinete', 'Armónica',
    'Ukelele', 'Arpa', 'Acordeón', 'Maracas', 'Tambor', 'Xilófono', 'Teclado', 'Sintetizador', 'DJ Mixer', 'Micrófono',
    'Viola', 'Violonchelo', 'Contrabajo', 'Banjo', 'Mandolina', 'Laúd', 'Cítara', 'Balalaica', 'Sitar', 'Shamisen',
    'Oboe', 'Fagot', 'Corno Inglés', 'Tuba', 'Trombón', 'Corneta', 'Trompa', 'Fliscorno', 'Bombardino', 'Helicón',
    'Ocarina', 'Flauta Dulce', 'Flauta Traversa', 'Piccolo', 'Gaita', 'Didgeridoo', 'Pandereta', 'Bongos', 'Congas', 'Timbales',
    'Cajón', 'Djembe', 'Darbuka', 'Tabla', 'Gong', 'Campanas', 'Triángulo', 'Platillos', 'Bombo', 'Redoblante',
    'Tom-Tom', 'Hi-Hat', 'Ride', 'Crash', 'Splash', 'China', 'Cowbell', 'Claves', 'Güiro', 'Cabasa',
    'Shaker', 'Cascabeles', 'Sonaja', 'Castañuelas', 'Palo de Lluvia', 'Vibráfono', 'Marimba', 'Glockenspiel', 'Celesta', 'Campanas Tubulares',
    'Theremin', 'Ondes Martenot', 'Mellotron', 'Vocoder', 'Sampler', 'Drum Machine', 'Looper', 'Pedal de Efectos', 'Amplificador', 'Pedalera',
    'Metrónomo', 'Afinador', 'Diapasón', 'Partituras', 'Atril', 'Plectro', 'Púa', 'Baquetas', 'Mazas', 'Arco'
  ],
  
  'Redes Sociales y Apps': [
    'Facebook', 'Instagram', 'Twitter', 'TikTok', 'YouTube', 'WhatsApp', 'Telegram', 'Discord', 'Snapchat', 'LinkedIn',
    'Reddit', 'Pinterest', 'Twitch', 'Spotify', 'Netflix', 'Uber', 'Rappi', 'Amazon', 'Zoom', 'Google Meet',
    'Skype', 'Teams', 'Slack', 'Gmail', 'Outlook', 'Yahoo', 'Hotmail', 'iCloud', 'Dropbox', 'Google Drive',
    'OneDrive', 'WeTransfer', 'Mega', 'MediaFire', 'GitHub', 'GitLab', 'Bitbucket', 'Stack Overflow', 'Medium', 'WordPress',
    'Blogger', 'Tumblr', 'Flickr', 'DeviantArt', 'Behance', 'Dribbble', 'Figma', 'Canva', 'Adobe', 'Photoshop',
    'Illustrator', 'InDesign', 'Premiere', 'After Effects', 'Lightroom', 'Audacity', 'FL Studio', 'Ableton', 'Logic Pro', 'GarageBand',
    'iMovie', 'Final Cut', 'DaVinci Resolve', 'OBS Studio', 'StreamLabs', 'Restream', 'Discord', 'TeamSpeak', 'Ventrilo', 'Mumble',
    'Steam', 'Epic Games', 'Origin', 'Uplay', 'Battle.net', 'GOG', 'PlayStation', 'Xbox', 'Nintendo', 'Roblox',
    'Minecraft', 'Fortnite', 'League of Legends', 'Valorant', 'PUBG', 'Call of Duty', 'FIFA', 'NBA 2K', 'Madden', 'GTA',
    'Tinder', 'Bumble', 'Hinge', 'OkCupid', 'Match', 'Plenty of Fish', 'Badoo', 'Happn', 'Grindr', 'Her'
  ]
};

// CATEGORÍAS EN INGLÉS (100 palabras cada una)
export const CATEGORIES_EN: Record<string, string[]> = {
  'All Categories': [], // Se llenará dinámicamente
  
  'Animals': [
    'Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Monkey', 'Zebra', 'Bear', 'Wolf',
    'Fox', 'Eagle', 'Dolphin', 'Shark', 'Whale', 'Octopus', 'Turtle', 'Penguin', 'Crocodile', 'Snake',
    'Horse', 'Cow', 'Pig', 'Rabbit', 'Squirrel', 'Owl', 'Duck', 'Chicken', 'Bird', 'Butterfly',
    'Bee', 'Ant', 'Spider', 'Fly', 'Mosquito', 'Frog', 'Toad', 'Lizard', 'Iguana', 'Chameleon',
    'Kangaroo', 'Koala', 'Panda', 'Gorilla', 'Chimpanzee', 'Orangutan', 'Rhinoceros', 'Hippopotamus', 'Zebu', 'Bison',
    'Moose', 'Deer', 'Reindeer', 'Antelope', 'Gazelle', 'Buffalo', 'Wildebeest', 'Jaguar', 'Leopard', 'Panther',
    'Cougar', 'Lynx', 'Cheetah', 'Hyena', 'Jackal', 'Raccoon', 'Weasel', 'Otter', 'Seal', 'Walrus',
    'Orca', 'Sperm Whale', 'Manatee', 'Dugong', 'Starfish', 'Jellyfish', 'Squid', 'Sea Urchin', 'Crab', 'Lobster',
    'Shrimp', 'Oyster', 'Mussel', 'Clam', 'Snail', 'Slug', 'Worm', 'Cicada', 'Cricket', 'Grasshopper',
    'Dragonfly', 'Beetle', 'Ladybug', 'Firefly', 'Moth', 'Wasp', 'Bumblebee', 'Termite', 'Bedbug', 'Louse'
  ],
  
  'Food and Drinks': [
    'Pizza', 'Hamburger', 'Tacos', 'Sushi', 'Pasta', 'Salad', 'Ice Cream', 'Cake', 'Chocolate', 'Coffee',
    'Tea', 'Juice', 'Soda', 'Water', 'Beer', 'Rice', 'Bread', 'Cheese', 'Yogurt', 'Cereal',
    'Soup', 'Sandwich', 'Hot Dog', 'Burrito', 'Nachos', 'Popcorn', 'Donuts', 'Cookies', 'Muffins', 'Smoothie',
    'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Watermelon', 'Melon', 'Pineapple', 'Mango', 'Papaya',
    'Pear', 'Peach', 'Plum', 'Cherry', 'Raspberry', 'Blueberry', 'Blackberry', 'Kiwi', 'Coconut', 'Avocado',
    'Tomato', 'Cucumber', 'Lettuce', 'Carrot', 'Onion', 'Garlic', 'Potato', 'Sweet Potato', 'Corn', 'Broccoli',
    'Cauliflower', 'Spinach', 'Pumpkin', 'Eggplant', 'Pepper', 'Chili', 'Radish', 'Turnip', 'Celery', 'Leek',
    'Chicken', 'Meat', 'Fish', 'Shrimp', 'Ham', 'Sausage', 'Bacon', 'Egg', 'Milk', 'Butter',
    'Cream', 'Ice Cream', 'Snow', 'Jello', 'Flan', 'Pudding', 'Pie', 'Tart', 'Jam', 'Honey',
    'Sugar', 'Salt', 'Pepper', 'Cinnamon', 'Vanilla', 'Curry', 'Mustard', 'Ketchup', 'Mayo', 'Sauce'
  ],
  
  'Professions': [
    'Doctor', 'Nurse', 'Teacher', 'Engineer', 'Lawyer', 'Chef', 'Pilot', 'Architect', 'Designer', 'Programmer',
    'Musician', 'Actor', 'Writer', 'Police', 'Firefighter', 'Veterinarian', 'Dentist', 'Accountant', 'Mechanic', 'Electrician',
    'Carpenter', 'Photographer', 'Journalist', 'Scientist', 'Psychologist', 'Artist', 'DJ', 'Youtuber', 'Influencer', 'Entrepreneur',
    'Banker', 'Economist', 'Farmer', 'Gardener', 'Florist', 'Baker', 'Pastry Chef', 'Butcher', 'Fisherman', 'Miner',
    'Builder', 'Bricklayer', 'Painter', 'Welder', 'Plumber', 'Locksmith', 'Upholsterer', 'Shoemaker', 'Tailor', 'Dressmaker',
    'Hairdresser', 'Barber', 'Stylist', 'Makeup Artist', 'Esthetician', 'Masseur', 'Coach', 'Athlete', 'Sportsman', 'Referee',
    'Judge', 'Prosecutor', 'Notary', 'Secretary', 'Receptionist', 'Manager', 'Director', 'President', 'Minister', 'Diplomat',
    'Translator', 'Interpreter', 'Librarian', 'Historian', 'Archeologist', 'Geologist', 'Biologist', 'Chemist', 'Physicist', 'Mathematician',
    'Astronomer', 'Meteorologist', 'Oceanographer', 'Botanist', 'Zoologist', 'Anthropologist', 'Sociologist', 'Philosopher', 'Theologian', 'Monk',
    'Priest', 'Pastor', 'Rabbi', 'Imam', 'Tour Guide', 'Flight Attendant', 'Captain', 'Sailor', 'Astronaut', 'Soldier'
  ]
};

// Llenar "Todas las Categorías" dinámicamente
const fillAllCategories = () => {
  const allWordsES: string[] = [];
  const allWordsEN: string[] = [];
  
  Object.keys(CATEGORIES_ES).forEach(key => {
    if (key !== 'Todas las Categorías') {
      allWordsES.push(...CATEGORIES_ES[key]);
    }
  });
  
  Object.keys(CATEGORIES_EN).forEach(key => {
    if (key !== 'All Categories') {
      allWordsEN.push(...CATEGORIES_EN[key]);
    }
  });
  
  CATEGORIES_ES['Todas las Categorías'] = allWordsES;
  CATEGORIES_EN['All Categories'] = allWordsEN;
};

fillAllCategories();

export const AVATARS = [
  '😎', '😊', '🤓', '😺', '🦊', '🐶', '🐼', '🦁',
  '🐯', '🐨', '🦄', '🐸', '🐙', '🦉', '🐧', '🦆'
];
