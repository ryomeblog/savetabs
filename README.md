# Save Tabs Extension / タブ保存拡張機能

This VS Code extension allows you to save and manage paths of all currently open tabs in a workspace to a timestamped text file. You can later reopen tabs from any saved session or clear saved tab records.  
このVS Code拡張機能では、現在開いているすべてのタブのパスをタイムスタンプ付きのテキストファイルに保存できます。保存したセッションからタブを再度開いたり、記録を削除したりできます。

## Features / 機能

- **Save Open Tabs**: Save paths of all open tabs to a timestamped file in a `.openTabs` folder within the workspace root.  
  **タブの保存**：ワークスペースルートにある`.openTabs`フォルダに、すべての開いているタブのパスをタイムスタンプ付きで保存します。

- **Reopen Saved Tabs**: Restore tabs from a previous session by selecting a saved file.  
  **タブの再オープン**：保存されたファイルを選択することで、前のセッションのタブを復元できます。

- **Clear Saved Tab Records**: Clear all saved tab files within the `.openTabs` folder.  
  **保存記録のクリア**：`.openTabs`フォルダ内のすべての保存済みタブファイルを削除します。

## Usage / 使用方法

1. **Open the Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).  
   **コマンドパレットを開く**（Windowsは`Ctrl+Shift+P`、macOSは`Cmd+Shift+P`）

2. **Run a Command**:  
   **コマンドの実行**：

   - **Save Open Tabs**: Save paths of all open tabs to a `.txt` file in the `.openTabs` folder.  
     **開いているタブの保存**：`.openTabs`フォルダにすべての開いているタブのパスを保存します。

   - **Open Saved Tabs**: Select a saved file to reopen previously saved tabs.  
     **保存したタブを開く**：保存したファイルを選択し、過去のセッションのタブを再度開きます。

   - **Clear Saved Tabs**: Delete all saved tab records in the `.openTabs` folder.  
     **保存タブのクリア**：`.openTabs`フォルダ内のすべての保存済みタブ記録を削除します。

## File Management / ファイル管理

- Saved files are stored in `.openTabs` within the workspace root, named by timestamp in `YYYYMMDDHHMMSS.txt` format.  
  保存ファイルは、ワークスペースのルートにある`.openTabs`フォルダ内に`YYYYMMDDHHMMSS.txt`形式で保存されます。

- **Automatic Folder Creation**: The `.openTabs` folder is automatically created if it doesn't exist.  
  **フォルダの自動生成**：`.openTabs`フォルダが存在しない場合は、自動的に作成されます。

## Requirements / 必要条件

No additional dependencies are required.  
追加の依存関係は必要ありません。

## Extension Settings / 拡張設定

This extension does not require any settings configuration.  
この拡張機能には設定の構成は不要です。

## Known Issues / 既知の問題

- Unsaved documents are not stored in saved files and will not be reopened if closed.  
  未保存のドキュメントは保存ファイルに記録されないため、閉じられた場合は再オープンされません。

## Release Notes / リリースノート

### 0.1.0

- Initial release with tab saving, reopening, and clearing features.  
  タブの保存、再オープン、クリア機能を備えた初期リリース

---

This extension is open-source and welcomes contributions!
