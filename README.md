# AspenUI

AspenUI is a robust and flexible design system built with Nuxt/Vue, designed to streamline the development of modern web applications. With a growing library of components and design elements, AspenUI aims to provide developers with the tools they need to create beautiful and consistent user interfaces effortlessly.

## Pakker

- **components**: Vue 3 komponentbibliotek med Storybook.
- **shared**: Delte utilities og composables.
- **core**: Grundlæggende funktionaliteter og konfigurationer.
- **nuxt-modules**: Nuxt-specifikke moduler og plugins.

## Opsætning

1. Klon repository:

    ```sh
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Installer afhængigheder:

    ```sh
    pnpm install
    ```

3. Opsæt Husky:

    ```sh
    pnpx husky install
    ```

## Scripts

- `pnpm build`: Bygger alle pakker.
- `pnpm lint`: Linter alle pakker.
- `pnpm format`: Formaterer alle pakker.
- `pnpm test`: Kører tests for alle pakker.

## CI/CD

GitHub Actions er konfigureret til at køre tests og bygge projektet automatisk ved hvert push.

## Licens

Dette projekt er licenseret under MIT-licensen.
