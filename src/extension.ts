import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// 拡張機能がアクティブになったときに呼び出される関数
export function activate(context: vscode.ExtensionContext) {
  // コマンド 'extension.saveOpenTabs' を登録
  let saveTabsDisposable = vscode.commands.registerCommand('extension.saveOpenTabs', () => {
    // 現在開いているエディタを取得
    const editor = vscode.window.activeTextEditor;
    if (!editor) return; // アクティブなエディタがない場合は終了

    // 開いているすべてのタブのファイルパスを取得
    const openTabs = vscode.workspace.textDocuments
      .filter(doc => doc.uri.scheme === 'file' && doc.isDirty === false) // 保存済みのファイルのみを対象
      .map(doc => doc.fileName);

    if (openTabs.length === 0) {
      vscode.window.showInformationMessage('No saved tabs to save.'); // 保存するタブがない場合のメッセージ
      return;
    }

    // .openTabs フォルダを作成
    const openTabsDir = path.join(vscode.workspace.rootPath || '', '.openTabs');
    if (!fs.existsSync(openTabsDir)) {
      fs.mkdirSync(openTabsDir);
    }

    // 現在の日時を取得してファイル名を作成
    const now = new Date();
    const fileName = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}.txt`;
    const filePath = path.join(openTabsDir, fileName);

    // ファイルに書き込む
    fs.writeFileSync(filePath, openTabs.join('\n'), 'utf8');
    // 情報メッセージを表示
    vscode.window.showInformationMessage(`Open tabs saved to ${filePath}`);
  });

  // コマンド 'extension.openSavedTabs' を登録
  let openTabsDisposable = vscode.commands.registerCommand('extension.openSavedTabs', async () => {
    // .openTabs フォルダのパスを指定
    const openTabsDir = path.join(vscode.workspace.rootPath || '', '.openTabs');
    if (fs.existsSync(openTabsDir)) {
      // .openTabs フォルダ内のファイルを取得して日付順にソート
      const files = fs.readdirSync(openTabsDir).filter(file => file.endsWith('.txt')).sort((a, b) => b.localeCompare(a));
      if (files.length > 0) {
        // 最新のファイルを選択肢に追加
        const options = ['最新', ...files];
        const selected = await vscode.window.showQuickPick(options, { placeHolder: 'ファイルを選択してください' });
        if (selected) {
          const filePath = selected === '最新' ? path.join(openTabsDir, files[0]) : path.join(openTabsDir, selected);
          const openTabs = fs.readFileSync(filePath, 'utf8').split('\n').filter(Boolean);
          openTabs.forEach(tab => {
            vscode.workspace.openTextDocument(tab).then(doc => {
              vscode.window.showTextDocument(doc, { preview: false, viewColumn: vscode.ViewColumn.Active });
            });
          });
          // 情報メッセージを表示
          vscode.window.showInformationMessage(`Open tabs from ${filePath}`);
        }
      } else {
        vscode.window.showErrorMessage(`No files found in ${openTabsDir}`);
      }
    } else {
      vscode.window.showErrorMessage(`Directory ${openTabsDir} does not exist.`);
    }
  });

  // コマンド 'extension.clearSavedTabs' を登録
  let clearTabsDisposable = vscode.commands.registerCommand('extension.clearSavedTabs', () => {
    // .openTabs フォルダのパスを指定
    const openTabsDir = path.join(vscode.workspace.rootPath || '', '.openTabs');
    if (fs.existsSync(openTabsDir)) {
      // .openTabs フォルダ内のすべてのファイルを削除
      fs.readdirSync(openTabsDir).forEach(file => {
        fs.unlinkSync(path.join(openTabsDir, file));
      });
      // 情報メッセージを表示
      vscode.window.showInformationMessage(`Cleared all files in ${openTabsDir}`);
    } else {
      vscode.window.showErrorMessage(`Directory ${openTabsDir} does not exist.`);
    }
  });

  // 登録したコマンドをコンテキストに追加
  context.subscriptions.push(saveTabsDisposable, openTabsDisposable, clearTabsDisposable);
}

// 拡張機能が非アクティブになったときに呼び出される関数
export function deactivate() {}
