# tws-first-package

A TypeScript utility package with math functions, built with modern tooling and automated publishing.

## Installation

```sh
npm install tws-first-package
```

## Usage

```typescript
import { add } from 'tws-first-package';

const result = add(2, 3); // 5
```

## Available Functions

- `add(a: number, b: number)` - Adds two numbers
- `subtract(a: number, b: number)` - Subtracts two numbers
- `multiply(a: number, b: number)` - Multiplies two numbers

## Development

### Setup

```sh
npm install
```

### Available Scripts

- `npm run dev` - Run tests in watch mode during development
- `npm run test` - Run all tests once
- `npm run build` - Compile TypeScript to `dist/`
- `npm run format` - Auto-format code with Prettier
- `npm run check-format` - Check code formatting
- `npm run ci` - Run full CI checks (build + format + tests)
- `npm run changeset` - Create a changeset to document changes
- `npm run release` - Version and publish package

### Workflow for Adding New Features

1. **Write your code**

   ```sh
   # Add new functions to src/utils.ts
   # Write tests in src/utils.test.ts
   # Export new functions in src/index.ts
   ```

2. **Test during development**

   ```sh
   npm run dev  # Watch mode for tests
   ```

3. **Document your changes**

   ```sh
   npm run changeset
   ```

   This will prompt you to:
   - Select the type of change (patch/minor/major)
   - Write a description of what changed

4. **Run quality checks**

   ```sh
   npm run ci  # Runs build + format check + tests
   ```

5. **Release (maintainers only)**

   ```sh
   npm run release
   ```

   This will:
   - Update version numbers based on changesets
   - Generate/update CHANGELOG.md
   - Publish to npm

### Automated Publishing

The package is automatically published when changes are pushed to the `main` branch via GitHub Actions. The workflow:

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Runs on PRs and pushes to main
   - Executes `npm run ci` to validate code

2. **Publish Pipeline** (`.github/workflows/publish.yml`)
   - Runs on pushes to main
   - Builds and publishes to npm using `NPM_TOKEN` secret

### Project Structure

```text
src/
├── index.ts        # Main exports
├── utils.ts        # Utility functions
└── utils.test.ts   # Tests using Vitest
```

### Tooling

- **TypeScript** - Type safety and compilation
- **Vitest** - Fast unit testing
- **Prettier** - Code formatting
- **Changesets** - Version management and changelog generation
- **GitHub Actions** - Automated CI/CD

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the development workflow above
4. Create a changeset: `npm run changeset`
5. Submit a pull request

## License

MIT

Lar-lar-lar-lar
