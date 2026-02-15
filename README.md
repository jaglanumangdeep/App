# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## Independent replica setup

This repository is configured as an independent app replica with unique project identifiers:

- npm package name: `service-marketplace-replica`
- Expo app name: `Service Marketplace Replica`
- Expo slug: `service-marketplace-replica`
- iOS bundle identifier: `com.independent.servicemarketreplica`
- Android package: `com.independent.servicemarketreplica`

To keep it fully independent on your machine, avoid adding the original project as a Git remote.

## Create a brand-new repo (no fork history)

If GitHub still shows **"forked from ..."**, that is repository-level metadata and cannot be removed by code changes inside this repo.

Use this flow to create a clean standalone project with no linkage:

1. Run the export script from this repo root:

   ```bash
   bash scripts/create-independent-project.sh ../AppStandalone
   ```

2. In GitHub, create a **new empty repository** (do not use Fork).

3. Push the standalone folder to your new repo:

   ```bash
   cd ../AppStandalone
   git remote add origin https://github.com/<your-username>/<new-repo>.git
   git push -u origin main
   ```

This produces a repository with fresh commit history and no fork relationship to the previous project.
