# Multi-stage build : le premier stage installe les dépendances et lance les tests.
# Le second stage copie uniquement les fichiers nécessaires dans une image alpine légère.
# Cela permet de réduire la taille de l'image finale (pas de devDependencies, pas de fichiers de test)
# et d'améliorer la sécurité en limitant la surface d'attaque (moins de paquets installés).

# --- Stage 1 : Build & Test ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# --- Stage 2 : Production ---
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/server.js ./
EXPOSE 3000
CMD ["node", "server.js"]