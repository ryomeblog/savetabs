# Tab Save Extension

This VS Code extension allows you to save the paths of all currently open tabs to a timestamped text file. You can reopen tabs from a saved session or delete the records.

## Features

- **Save Tabs**: Saves the paths of all open tabs with a timestamp in the `.openTabs` folder at the workspace root.

- **Reopen Tabs**: Restore tabs from a previous session by selecting a saved file.

- **Clear Saved Records**: Deletes all saved tab files in the `.openTabs` folder.

## Usage

1. **Open Command Palette** (Windows: `Ctrl+Shift+P`, macOS: `Cmd+Shift+P`)

2. **Run a Command**:

   - **Save Open Tabs**: Saves the paths of all open tabs in the `.openTabs` folder.

   - **Open Saved Tabs**: Select a saved file to reopen tabs from a past session.

   - **Clear Saved Tabs**: Deletes all saved tab records in the `.openTabs` folder.

## File Management

- **File Creation**: Saved files are stored in the `.openTabs` folder at the workspace root in the format `YYYYMMDDHHMMSS.txt`.

- **Automatic Folder Generation**: The `.openTabs` folder is automatically created if it does not exist.

## For Developers

### Environment Setup

- **Node.js**: Version 20 or higher
- **npm**: Version 10 or higher

```bash
> node -v
v20.17.0
> npm -v
10.8.2
```

- Clone the project

```bash
git clone https://github.com/ryomeblog/savetabs.git
cd savetabs
```

- Install dependencies

```bash
npm ci
npm install -g vsce
```

### Development Steps

1. Modify the `src/extension.ts` file

2. Run the `npm run compile` command

```bash
npm run compile
```

3. Create the `vsix` file

```bash
vsce package
```

### Folder Structure

```
savetabs
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── src
│   └── extension.ts
├── .gitignore
├── .vscode-test.mjs
├── .vscodeignore
├── CHANGELOG.md
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── vsc-extension-quickstart.md
└── tsconfig.json
```

### `.vscode` Folder
- **extensions.json**: Defines a list of recommended VSCode extensions. Used to share necessary extensions with team members.
- **launch.json**: Defines debug settings. Used when debugging the extension.

### `src` Folder
- **extension.ts**: Contains the main code for the extension. Implement the extension logic here.

### Root Directory
- **.gitignore**: Specifies files and folders not to be managed by Git. Includes build artifacts and environment configuration files.
- **.vscode-test.mjs**: Configuration file for the VSCode test runner. Used to run tests for the extension.
- **.vscodeignore**: Specifies files and folders not to be included in the VSCode extension package. Includes test files and documentation.
- **CHANGELOG.md**: Records the change history of the extension. Documents changes and fixes for each version.
- **eslint.config.mjs**: ESLint configuration file. Defines rules to maintain code quality.
- **package.json**: Defines project metadata, dependencies, scripts, and extension settings and commands.
- **package-lock.json**: Locks the versions of dependencies. Ensures consistent dependency management.
- **README.md**: Documents the project overview, usage, and installation steps. Serves as the project documentation.
- **vsc-extension-quickstart.md**: Quickstart guide for the extension. Provides basic steps to start developing the extension.
- **tsconfig.json**: Defines TypeScript compile options. Configures settings for converting TypeScript code to JavaScript.

