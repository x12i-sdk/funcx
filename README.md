# @x12i/funcx-docs usage example

FuncX docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/funcx-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled funcx documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/funcx-docs)
- [Implementation monorepo](https://github.com/x12i/funcx)
- [Reviewed package source](https://github.com/x12i/funcx/tree/6b647cd57c0ea387878417eab32188efd8d051b5/funcx-docs/packages/funcx-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/funcx runtime example

FuncX: a super-easy typed AI reasoning-functions library for product code.

Normalize a structured response before applying an application contract. This example consumes `@x12i/funcx@4.12.0`.

```sh
npm install --ignore-scripts
npm run example:funcx
```

Source: [`src/funcx-example.mjs`](src/funcx-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.

## Runtime example scope

The runtime consumer uses local synthetic data. It does not invoke a model, connect to MongoDB, or publish a package. Any temporary workspace is created and removed by the example. Documentation and runtime examples have separate commands and are validated separately.
