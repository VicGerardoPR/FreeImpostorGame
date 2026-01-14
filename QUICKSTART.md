# 🎮 Inicio Rápido - Impostor Game

## Instalación y Ejecución Local

```bash
# 1. Navega al directorio del proyecto
cd impostor-game

# 2. Instala las dependencias
npm install

# 3. Ejecuta el servidor de desarrollo
npm run dev

# 4. Abre tu navegador en http://localhost:3000
```

## Despliegue Rápido en Vercel

### Método 1: Click Deploy (Más Rápido)

1. Sube el proyecto a GitHub
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa el repositorio
4. Haz clic en "Deploy"
5. ¡Listo!

### Método 2: CLI

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel

# Para producción
vercel --prod
```

## Estructura de Archivos

```
impostor-game/
├── app/              # Aplicación Next.js
│   ├── page.tsx      # Página principal con lógica del juego
│   ├── layout.tsx    # Layout raíz
│   └── globals.css   # Estilos globales
├── components/       # Componentes del juego
│   ├── WelcomeScreen.tsx
│   ├── GameSetup.tsx
│   ├── PlayerReveal.tsx
│   ├── GamePlay.tsx
│   └── GameResults.tsx
├── types/           # Definiciones TypeScript
│   └── game.ts
└── package.json     # Dependencias
```

## Tecnologías Incluidas

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ Lucide Icons
- ✅ Completamente Responsive

## Personalización Rápida

### Cambiar Colores

Edita `tailwind.config.js`:
```js
colors: {
  'impostor-red': '#TU_COLOR',
  'impostor-dark': '#TU_COLOR',
}
```

### Añadir Categorías

Edita `types/game.ts`:
```typescript
export const CATEGORIES = {
  'Tu Categoría': ['Palabra1', 'Palabra2', ...],
  // ...
}
```

### Cambiar Avatares

Edita `types/game.ts`:
```typescript
export const AVATARS = [
  '🎭', '🎪', '🎨', // ... tus emojis
];
```

## Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Compilar
npm start        # Producción
npm run lint     # Verificar código
```

## Requerimientos

- Node.js 18.17 o superior
- npm 9 o superior

## Solución de Problemas

**Error al instalar:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error de TypeScript:**
```bash
npm run build
# Revisa los errores mostrados
```

## ¿Necesitas Ayuda?

- Lee el README.md completo
- Revisa DEPLOYMENT.md para despliegue
- Documentación: [nextjs.org/docs](https://nextjs.org/docs)

---

**¡Disfruta creando partidas épicas de Impostor!** 🎉😈😇
