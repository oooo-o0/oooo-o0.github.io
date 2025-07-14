---
title: 【業務把握】フォルダハイパーリンク作成【コマンド】  
published: 2025-07-14  
description: '業務を効率的に把握するためのtips'  
image: ''  
tags: [設計, コマンド, 業務把握]  
category: 'フォルダ構成'
draft: false  
lang: 'ja'
---

# 手順
1. 下記のスクリプトテンプレのパスをプロジェクトに合わせ修正  
2. `tree_with_links.ps1` として保存  
3. PowerShellで作成ファイルが含まれたディレクトリに移動し、スクリプトを実行：
```powershell
 cd "C:\Users\ユーザー名\プロジェクト名"
 .\tree_with_links.ps1
```
4. デスクトップ上に出力された tree_with_links.txt を Excel にドラッグ＆ドロップ


# フォルダ構成を一瞬で把握できるスクリプトテンプレ

```powershell
$root = "C:\Users\ユーザー名\プロジェクト名"
$outFile = "$env:USERPROFILE\Desktop\tree_with_links.txt"

if (Test-Path $outFile) { Remove-Item $outFile }

# まずルートフォルダ自身のリンクを出力する関数
function Write-RootLink {
    param([string]$path)

    $uri = $path -replace '\\','/'
    $name = Split-Path $path -Leaf
    $linkFormula = '=HYPERLINK("file:///' + $uri + '", "' + $name + '")'
    Add-Content -Path $outFile -Value $linkFormula
}

# ツリーを再帰表示する関数（ルートは出力済みの想定でlevel=0）
function Write-TreeWithLinks {
    param(
        [string]$path,
        [int]$level = 0,
        [bool[]]$parentBranches = @()
    )

    $items = Get-ChildItem -LiteralPath $path | Sort-Object { !$_.PSIsContainer }, Name
    $count = $items.Count
    for ($i=0; $i -lt $count; $i++) {
        $item = $items[$i]
        $isLast = ($i -eq $count - 1)

        # ツリーインデント作成
        $indent = ""
        for ($j=0; $j -lt $level; $j++) {
            if ($j -eq $level - 1) {
                $indent += if ($isLast) { "└─ " } else { "├─ " }
            } else {
                $indent += if ($parentBranches[$j]) { "│  " } else { "   " }
            }
        }

        $uri = $item.FullName -replace '\\','/'
        $displayName = $indent + $item.Name
        $linkFormula = '=HYPERLINK("file:///' + $uri + '", "' + $displayName + '")'
        Add-Content -Path $outFile -Value $linkFormula

        if ($item.PSIsContainer) {
            $newParentBranches = $parentBranches + ,(!$isLast)
            Write-TreeWithLinks -path $item.FullName -level ($level + 1) -parentBranches $newParentBranches
        }
    }
}

# 処理開始
Write-RootLink -path $root
Write-TreeWithLinks -path $root -level 1 -parentBranches @()

Write-Host "完了！ファイルは $outFile に出力されました。"

```
# 補足

Excelでtree構造が見やすいフォント設定
1. Ctrl+A で全セル選択
2. 「ホーム」タブ
3. 「フォント」
4. Consolas を選択
