# POS-apk

Application POS Android pour la vente en magasin avec un panneau d'administration web.

## Structure du projet

- `android-app/` : Application Android pour la vente.
- `admin-panel/` : Panneau d'administration web (gestion caissiers, produits, stock).
- `backend-api/` : API backend (Node.js/Express ou autre).

## Fonctionnalités principales

- Vente en magasin via l'application Android.
- Gestion des caissiers, produits et stock via le panneau d'administration.
- Synchronisation des données via l'API backend.

## Compilation de l'application Android (APK)

1. Ouvre le dossier `android-app/` dans Android Studio.
2. Clique sur **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
3. Le fichier APK sera généré dans `android-app/app/build/outputs/apk/`.
4. Récupère le fichier APK et installe-le sur ton appareil Android.