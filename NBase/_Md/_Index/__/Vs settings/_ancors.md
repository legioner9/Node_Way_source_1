[Как создать резервную копию настроек VS Code и списка установленных расширений?](https://kompsekret.ru/q/how-do-i-back-up-my-vs-code-settings-and-list-of-installed-extensions-2126/)
* Windows:%USERPROFILE%\\.vscode\extensions
* Mac:~/.vscode/extensions
* Linux:~/.vscode/extensions

[Visual Studio Code: мощное руководство пользователя](https://dev-gang.ru/article/visual-studio-code-moscznoe-rukovodstvo-polzovatelja-dwedy9wjzg/)

* Windows: %APPDATA%\Code\User\settings.json
* macOS: $HOME/Library/Application Support/Code/User/settings.json
* Linux: $HOME/.config/Code/User/settings.json

Для Workspace просто создайте папку .vscode в корне вашего проекта. Затем создайте файл settings.json внутри этой папки. Если вы работаете с панелью редактора настроек, она сделает это автоматически, когда вы измените настройки в области рабочего пространства. Вот подмножество глобальных настроек, с которыми я предпочитаю работать:

    {
      "editor.minimap.enabled": false,
      "window.openFoldersInNewWindow": "on",
      "diffEditor.ignoreTrimWhitespace": false,
      "files.trimTrailingWhitespace": true,
      "javascript.updateImportsOnFileMove.enabled": "always",
      "workbench.editor.enablePreview": false,
      "workbench.list.openMode": "doubleClick",
      "window.openFilesInNewWindow": "default",
      "editor.formatOnPaste": true,
      "editor.defaultFormatter": "esbenp.prettierVS Code",
      "editor.formatOnSave": true,
      "editor.tabSize": 2,
      "explorer.confirmDelete": false
    }
     