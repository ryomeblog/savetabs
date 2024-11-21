# タブ保存拡張機能

このVS Code拡張機能では、現在開いているすべてのタブのパスをタイムスタンプ付きのテキストファイルに保存できます。保存したセッションからタブを再度開いたり、記録を削除したりできます。

## 機能

- **タブの保存**：ワークスペースルートにある`.openTabs`フォルダに、すべての開いているタブのパスをタイムスタンプ付きで保存します。

- **タブの再オープン**：保存されたファイルを選択することで、前のセッションのタブを復元できます。

- **保存記録のクリア**：`.openTabs`フォルダ内のすべての保存済みタブファイルを削除します。

## 使用方法

1. **コマンドパレットを開く**（Windowsは`Ctrl+Shift+P`、macOSは`Cmd+Shift+P`）

2. **Run a Command**:  
   **コマンドの実行**：

   - **開いているタブの保存**：`.openTabs`フォルダにすべての開いているタブのパスを保存します。

   - **保存したタブを開く**：保存したファイルを選択し、過去のセッションのタブを再度開きます。

   - **保存タブのクリア**：`.openTabs`フォルダ内のすべての保存済みタブ記録を削除します。

## ファイル管理

- **ファイル作成**: 保存ファイルは、ワークスペースのルートにある`.openTabs`フォルダ内に`YYYYMMDDHHMMSS.txt`形式で保存されます。

- **フォルダの自動生成**：`.openTabs`フォルダが存在しない場合は、自動的に作成されます。

## 開発者向け

### 環境構築

- **Node.js**: バージョン20以上  
- **npm**: バージョン10以上

```bash
> node -v
v20.17.0
> npm -v
10.8.2
```

- プロジェクトのクローン

```bash
git clone https://github.com/ryomeblog/savetabs.git
cd savetabs
```

- 依存関係のインストール

```bash
npm ci
npm install -g vsce
```

### 開発手順

1. `src/extension.ts` ファイルを修正する

2. `npm run compile` コマンドを実行

```bash
npm run compile
```

3. `vsix` ファイルを作成

```bash
vsce package
```

### フォルダ構成

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

### `.vscode` フォルダ
- **extensions.json**: 推奨するVSCode拡張機能のリストを定義します。プロジェクトに必要な拡張機能をチームメンバーに共有するために使用されます。
- **launch.json**: デバッグ設定を定義します。拡張機能のデバッグを行う際に使用されます。

### `src` フォルダ
- **extension.ts**: 拡張機能のメインコードが含まれています。ここに拡張機能のロジックを実装します。

### ルートディレクトリ
- **.gitignore**: Gitで管理しないファイルやフォルダを指定します。例えば、ビルド成果物や環境設定ファイルなどが含まれます。
- **.vscode-test.mjs**: VSCodeのテストランナーの設定ファイルです。拡張機能のテストを実行するために使用されます。
- **.vscodeignore**: VSCode拡張機能のパッケージに含めないファイルやフォルダを指定します。例えば、テストファイルやドキュメントなどが含まれます。
- **CHANGELOG.md**: 拡張機能の変更履歴を記載します。バージョンごとの変更点や修正内容を記録します。
- **eslint.config.mjs**: ESLintの設定ファイルです。コードの品質を保つためのルールを定義します。
- **package.json**: プロジェクトのメタデータや依存関係、スクリプトなどを定義します。拡張機能の設定やコマンドもここに記述します。
- **package-lock.json**: 依存関係のバージョンを固定するためのファイルです。プロジェクトの依存関係を一貫して管理します。
- **README.md**: プロジェクトの概要や使用方法、インストール手順などを記載します。プロジェクトのドキュメントとして機能します。
- **vsc-extension-quickstart.md**: 拡張機能のクイックスタートガイドです。拡張機能の開発を始めるための基本的な手順が記載されています。
- **tsconfig.json**: TypeScriptのコンパイルオプションを定義します。TypeScriptコードをJavaScriptに変換する際の設定を行います。
