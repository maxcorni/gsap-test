
---

# **GSAP Première Expérience**

## 🚀 **Description du projet**
Première expérience de l'utilisation de GSAP.
Ce projet illustre l'utilisation de **GSAP (GreenSock Animation Platform)** pour créer des animations dynamiques et interactives. Il inclut des effets comme l'apparition d'un élément avec un rebond élastique et la disparition d'un autre élément vers le bas. Il intègre également un effet de **rebond à l'hover** pour rendre l'expérience plus fluide et interactive.

---

## 🚀 **Démo en ligne**
👉 https://maxcorni.github.io/gsap-test/

---


## 🛠️ **Technologies utilisées**
- **HTML5** : Structure du projet.
- **CSS3** : Style de base des éléments.
- **Sass** : Préprocesseur pour une gestion plus flexible des styles. 1.85.0 compilé avec dart2js 3.7.0.
- **JavaScript** : Logique d'interaction et animation.
- **GSAP** : Pour les animations (version utilisée via CDN : `3.12.7`).
- **Node.js** : Pour la gestion des dépendances version 11.1.0.

## 🌐 **Installation**
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/maxcorni/gsap-test.git
   ```

2. **Accéder au répertoire** :
   ```bash
   cd gsap-premiere-experience
   ```

3. **Installer les dépendances (si nécessaire)** :
   Si tu utilises un gestionnaire de paquets comme **npm** ou **yarn**, tu peux installer les dépendances comme suit :
   ```bash
   npm install
   ```

4. **Compiler le SCSS** en CSS :
   Utilise un compilateur SCSS comme **node-sass** ou **dart-sass** pour générer le fichier CSS à partir de `main.scss` :
   ```bash
   sass assets/main.scss:css/styles.css
   ```

5. **Ouvrir le fichier HTML dans un navigateur** pour voir les animations en action.

## ✨ **Fonctionnalités**
- **Apparition d'une boîte avec effet élastique** au clic.
- **Disparition de la boîte vers le bas** avec animation fluide.
- **Effet de rebond à l'hover** sur la boîte affichée.

## 📝 **Détails de l'implémentation**
- La boîte (`#box`) est initialement cachée et apparaît avec un effet de rebond.
- Lors du survol de la boîte, un effet de rebond l'agrandit légèrement.
- En cliquant sur "Masquer", la boîte disparaît avec une animation vers le bas.

## 🔧 **Exécution du projet**
Pour tester l'animation, il suffit d'ouvrir `index.html` dans un navigateur. Si tu souhaites faire des modifications, utilise un éditeur comme **VS Code** et compile ton SCSS avec un outil comme **npm run sass**.


## 📂 **Structure du projet**
```
gsap-premiere-experience/
│
├── index.html        # Fichier principal HTML
├── assets/           # Dossier contenant tous les fichiers SCSS
│   ├── main.scss     # Fichier principal SCSS
│   ├── base/ 
│   └── _vglabal.scss  # Exemple d'un fichier SCSS pour la structure global
├── css/              # Dossier contenant les fichiers CSS compilés
│   └── style.css     # Fichier CSS généré à partir du SCSS
└── script.js         # Animations GSAP et interactions
```

## 👨‍💻 **Auteurs**
- **Maxime Cornillon** - Développeur principal

## 📝 **License**
Projet réalisé dans le cadre pédagogique de Webecom 2025. Non destiné à un usage commercial.

---



