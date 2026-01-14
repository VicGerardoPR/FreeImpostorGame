# 🚀 Guía de Despliegue en Vercel

## Pasos para Desplegar

### 1. Preparar el Proyecto

Asegúrate de que todo el código esté en un repositorio de Git:

```bash
cd impostor-game
git init
git add .
git commit -m "Initial commit - Impostor Game"
```

### 2. Subir a GitHub

```bash
# Crea un nuevo repositorio en GitHub primero
# Luego conecta tu repositorio local:
git remote add origin https://github.com/TU-USUARIO/impostor-game.git
git branch -M main
git push -u origin main
```

### 3. Desplegar en Vercel

#### Opción A: Desde la Web de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Selecciona el repositorio `impostor-game`
5. Vercel detectará automáticamente Next.js
6. Haz clic en "Deploy"
7. ¡Listo! Tu juego estará disponible en unos minutos

#### Opción B: Desde la Terminal

```bash
# Instala Vercel CLI globalmente
npm install -g vercel

# Autentícate
vercel login

# Despliega el proyecto
cd impostor-game
vercel

# Para producción
vercel --prod
```

### 4. Configuración Automática

Vercel detectará automáticamente:
- ✅ Framework: Next.js 14
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`
- ✅ Development Command: `npm run dev`

**No necesitas configurar nada más** - Vercel se encarga de todo.

### 5. Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade las variables que necesites

Para este juego no se requieren variables de entorno.

### 6. Dominio Personalizado (Opcional)

1. Ve a Settings → Domains
2. Añade tu dominio personalizado
3. Sigue las instrucciones de Vercel para configurar los DNS

## Actualizar el Juego

Cada vez que hagas cambios y los subas a GitHub:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel automáticamente:
- Detectará el nuevo commit
- Construirá el proyecto
- Lo desplegará en producción
- Te enviará una notificación

## URLs del Proyecto

Después del despliegue tendrás:

- **Producción**: `https://impostor-game.vercel.app`
- **Preview**: Una URL única para cada branch/commit
- **Local**: `http://localhost:3000`

## Resolución de Problemas

### Build Fallido

Si el build falla, revisa:
1. Los logs en el Dashboard de Vercel
2. Ejecuta `npm run build` localmente para reproducir el error
3. Verifica que todas las dependencias estén en `package.json`

### Errores Comunes

**Error: Cannot find module**
```bash
# Reinstala las dependencias
rm -rf node_modules package-lock.json
npm install
```

**Error: Type errors**
```bash
# Ejecuta el type check
npm run build
# Corrige los errores de TypeScript mostrados
```

## Comandos Útiles

```bash
# Ver logs del proyecto
vercel logs

# Ver proyectos desplegados
vercel ls

# Ver información del proyecto
vercel inspect

# Remover un deployment
vercel remove [deployment-url]
```

## Características del Juego Desplegado

✅ **Server-Side Rendering**: Carga rápida inicial
✅ **Optimización Automática**: Imágenes y assets optimizados
✅ **Edge Network**: Servido desde servidores cercanos al usuario
✅ **HTTPS**: Certificado SSL automático
✅ **Analytics**: Estadísticas de uso (si lo activas)

## Soporte y Ayuda

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Comunidad de Vercel](https://github.com/vercel/vercel/discussions)

---

**¡Tu juego Impostor está listo para ser disfrutado por el mundo!** 🎉
