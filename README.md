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

Le fichier APK **n'est pas présent par défaut** : il sera généré après compilation avec Android Studio ou Gradle.

## Compilation de l'application Android (APK)

1. Ouvre le dossier `android-app/` dans Android Studio.
2. Clique sur **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
3. Le fichier APK sera généré dans `android-app/app/build/outputs/apk/`.
4. Récupère le fichier APK et installe-le sur ton appareil Android.

### Compilation en ligne de commande

Tu peux aussi compiler l’APK avec Gradle :

```bash
cd android-app
./gradlew assembleDebug
```

Le fichier APK sera dans `android-app/app/build/outputs/apk/debug/app-debug.apk`.

> **Remarque :**  
> Avant de compiler, assure-toi que tous les dossiers et fichiers du projet existent (`android-app/`, `admin-panel/`, `backend-api/` et leurs sous-dossiers).  
> Après compilation, tu trouveras le fichier APK prêt à être installé dans :
>
> ```
> android-app/app/build/outputs/apk/debug/app-debug.apk
> ```
>
> Tu peux copier ce fichier sur ton téléphone Android et l’installer directement.

## Accès en ligne au panneau d'administration

Pour accéder au panneau admin via un navigateur, un fichier `index.html` est fourni dans `admin-panel/`.  
Lance le serveur Express (`node app.js` dans `admin-panel/`), puis ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Initialisation des données pour le panneau d'administration

Pour tester le panneau admin, tu dois créer des données de base (caissiers, produits, stock) dans la base de données du backend. Ajoute des caissiers, produits et stock via les routes API du backend ou directement dans la base de données selon la technologie utilisée.

Exemple (Node.js/Express) :

- POST `/cashiers` pour ajouter un caissier
- POST `/products` pour ajouter un produit
- POST `/stock` pour ajouter un stock

Consulte la documentation du backend pour plus de détails.