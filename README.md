# Service Marketplace Replica

This is an Expo React Native project configured as an **independent replica**.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open a platform:

- Web:

  ```bash
  npm run web
  ```

- Android:

  ```bash
  npm run android
  ```

- iOS:

  ```bash
  npm run ios
  ```

> Note: the npm scripts use Expo offline mode (`--offline`) to avoid network-dependent dependency validation in restricted environments.

## Independent replica identifiers

- npm package name: `service-marketplace-replica`
- Expo app name: `Service Marketplace Replica`
- Expo slug: `service-marketplace-replica`
- iOS bundle identifier: `com.independent.servicemarketreplica`
- Android package: `com.independent.servicemarketreplica`

## Create a brand-new GitHub repo (no fork history)

If GitHub still shows **"forked from ..."**, that is repository metadata and cannot be removed by editing files in this repo.

Use this flow to publish a completely fresh repository:

1. Create a standalone copy with fresh git history:

   ```bash
   bash scripts/create-independent-project.sh ../AppStandalone
   ```

   The script works on macOS/Linux and Windows Git Bash (it uses `rsync` when available, otherwise falls back to `tar`).

2. Create a **new empty repository** on GitHub (do not use Fork).

3. Push the standalone project:

   ```bash
   cd ../AppStandalone
   git remote add origin https://github.com/<your-username>/<new-repo>.git
   git push -u origin main
   ```

This produces a new repository with no fork relationship to prior projects.
