# Impostor - Juego de Deducción Social

Un emocionante juego de engaño y deducción social donde los jugadores deben encontrar al impostor antes de que sea demasiado tarde.

**Creado por Arcano Intelligence - Víctor Gerardo**

## 🎮 Características

- **Multijugador Local**: 3-16 jugadores en un solo dispositivo
- **Múltiples Impostores**: Configura de 1 a varios impostores
- **16 Categorías Variadas**: 
  - **Todas las Categorías** (¡NUEVO! - Mezcla todas las palabras)
  - Animales
  - Comida y Bebidas
  - Profesiones
  - Deportes y Actividades
  - Lugares del Mundo
  - Tecnología
  - Entretenimiento
  - Vehículos
  - Objetos Cotidianos
  - Naturaleza
  - Emociones y Sentimientos
  - Colores
  - Países
  - Instrumentos Musicales
  - Redes Sociales y Apps
- **Más de 400 Palabras**: Gran variedad de contenido para horas de diversión
- **Selector Desplegable**: Elige fácilmente tu categoría favorita
- **Temporizador Opcional**: Añade presión con límites de tiempo configurables
- **Pistas Configurables**: Decide si los impostores reciben pistas
- **Animaciones Fluidas**: Experiencia visual moderna con Framer Motion
- **Diseño Responsive**: Juega en cualquier dispositivo
- **Tema Verde Olivo**: Diseño elegante y distintivo

## 🚀 Instalación y Ejecución

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Compilar para Producción

```bash
# Compilar
npm run build

# Ejecutar versión de producción
npm start
```

## 📦 Despliegue en Vercel

### Opción 1: Desde la Interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Importa el repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Haz clic en "Deploy"

### Opción 2: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Configuración en Vercel

No se necesita configuración especial. Vercel detectará automáticamente:
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`

## 🎯 Cómo Jugar

1. **Configuración**: 
   - Selecciona el número de jugadores (3-16)
   - Elige cuántos impostores habrá
   - Activa/desactiva pistas para impostores
   - Selecciona una categoría de palabras
   - Configura el temporizador (opcional)

2. **Revelación**:
   - Cada jugador revela su carta individualmente
   - Los inocentes reciben la misma palabra
   - Los impostores reciben una palabra diferente (o pista)
   - ¡Mantén tu palabra en secreto!

3. **Juego**:
   - Los jugadores se turnan haciendo preguntas
   - Intenta descubrir quién es el impostor
   - Los impostores intentan mezclarse sin ser descubiertos

4. **Resultados**:
   - Detén el juego cuando creas haber encontrado al impostor
   - Revela quiénes eran los impostores
   - ¡Juega de nuevo!

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Estilos utilitarios modernos
- **Framer Motion**: Animaciones fluidas y profesionales
- **Lucide React**: Iconos modernos y consistentes

## 📱 Características Técnicas

- Server Components y Client Components optimizados
- Animaciones de página completa con AnimatePresence
- Estado global manejado con React Hooks
- Sistema de tipos robusto con TypeScript
- Diseño mobile-first completamente responsive
- Optimizado para rendimiento en Vercel

## 🎨 Personalización

Puedes personalizar fácilmente:

- **Colores**: Edita `tailwind.config.js`
- **Categorías**: Añade más en `types/game.ts`
- **Avatares**: Modifica el array AVATARS en `types/game.ts`
- **Duración**: Ajusta las opciones en GameSetup

## 📄 Estructura del Proyecto

```
impostor-game/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── GameSetup.tsx
│   ├── PlayerReveal.tsx
│   ├── GamePlay.tsx
│   └── GameResults.tsx
├── types/
│   └── game.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego:

1. Haz un fork del proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Créditos

**Creado por Arcano Intelligence**  
Desarrollado por Víctor Gerardo

Arcano Intelligence - Tecnología especializada en automatización con IA para pequeños negocios, desarrollo web, aplicaciones móviles, diseño de logos y diseño gráfico.

---

**¡Diviértete jugando Impostor!** 🎉
