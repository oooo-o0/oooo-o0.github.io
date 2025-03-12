---
title: 【利用場面】アーキテクチャパターン【一覧】
published: 2025-03-07
description: 'アーキテクチャパターン代表４種'
image: ''
tags: [パターン]
category: '設計'
draft: false 
lang: 'ja'
---
## アーキテクチャパターンについて
アーキテクチャパターンとは、ソフトウェアシステムの構造を整理し、開発の効率や保守性を向上させるための設計手法で、**MVC・MVP・MVVM・PAC** が代表的です。

デザインパターンが「クラスやオブジェクトの設計」に焦点を当てるのに対し、アーキテクチャパターンは「アプリケーション全体の構造やモジュール間の関係」を定めるものです。



**MVC** ... 基本形でWeb開発に多用<br>
**MVP** ... テストしやすいが肥大化に注意<br>
**MVVM** ... データバインディングが強力<br>
**PAC** ... 大規模向けで拡張性が高い


## 1. MVC（Model-View-Controller）
最も基本的な設計パターン。Webアプリ開発（Spring, Railsなど）でよく使われる。

### 構成
- **Model（モデル）** <br>
データの処理（データベースとのやり取り、ビジネスロジック）
- **View（ビュー）** <br>
ユーザーに表示する部分（Reactのコンポーネント等）
- **Controller（コントローラー）** <br>
入力を受け取り、ModelとViewの橋渡しをする

### Spring + React のファイル構成
```plaintext
/backend (Spring Boot)
  ├── src/main/java/com/example/app
  │   ├── controller
  │   │   ├── UserController.java
  │   │   ├── TaskController.java
  │   ├── model
  │   │   ├── User.java
  │   │   ├── Task.java
  │   ├── repository
  │   │   ├── UserRepository.java
  │   │   ├── TaskRepository.java
  │   ├── service
  │   │   ├── UserService.java
  │   │   ├── TaskService.java
  ├── Application.java

/frontend (React)
  ├── src
  │   ├── components
  │   │   ├── UserList.tsx
  │   │   ├── TaskList.tsx
  │   ├── pages
  │   │   ├── Dashboard.tsx
  │   │   ├── Login.tsx
  │   ├── App.tsx
  │   ├── index.tsx
```
### ポイント
✅ 役割が分かれており、コードの見通しが良い  
❌ Controllerが肥大化しやすい➡「Fat Controller問題」


## 2. MVP（Model-View-Presenter）
MVCの改良版。テストしやすい。

### 構成
- **Model（モデル）** <br>データの処理（MVC）
- **View（ビュー）** <br>UIの描画のみ担当、直接Modelとやり取りしない
- **Presenter（プレゼンター）** <br>ViewとModelの橋渡しをする（Viewのロジックを担当）

### Spring + React のファイル構成
```plaintext
/backend (Spring Boot)
  ├── src/main/java/com/example/app
  │   ├── model
  │   │   ├── User.java
  │   │   ├── Task.java
  │   ├── repository
  │   │   ├── UserRepository.java
  │   │   ├── TaskRepository.java
  │   ├── service
  │   │   ├── UserService.java
  │   │   ├── TaskService.java
  ├── Application.java

/frontend (React)
  ├── src
  │   ├── presenters
  │   │   ├── UserPresenter.ts
  │   │   ├── TaskPresenter.ts
  │   ├── views
  │   │   ├── UserView.tsx
  │   │   ├── TaskView.tsx
  │   ├── components
  │   │   ├── UserForm.tsx
  │   │   ├── TaskList.tsx
  │   ├── pages
  │   │   ├── Dashboard.tsx
  │   │   ├── Login.tsx
  │   ├── App.tsx
  │   ├── index.tsx
```
### ポイント
✅ ViewとModelが直接やり取りしないので、テストしやすい  
❌ Presenterが大きくなりやすい（Fat Presenter問題）  

---

## 3. MVVM（Model-View-ViewModel）
モダンなフロントエンド開発（React, Angular, Vueなど）やモバイルアプリで使われる。

### 構成
- **Model（モデル）** <br>データの処理（MVC）
- **View（ビュー）** <br>UI等のユーザーインターフェース（MVP）
- **ViewModel（ビューモデル）** <br>ViewとModelの間のデータ変換や処理を行い、データを直接Viewにバインドする

### Spring + React のファイル構成
```plaintext
/backend (Spring Boot)
  ├── src/main/java/com/example/app
  │   ├── model
  │   │   ├── User.java
  │   │   ├── Task.java
  │   ├── repository
  │   │   ├── UserRepository.java
  │   │   ├── TaskRepository.java
  │   ├── service
  │   │   ├── UserService.java
  │   │   ├── TaskService.java
  ├── Application.java

/frontend (React)
  ├── src
  │   ├── viewmodels
  │   │   ├── UserViewModel.ts
  │   │   ├── TaskViewModel.ts
  │   ├── views
  │   │   ├── UserView.tsx
  │   │   ├── TaskView.tsx
  │   ├── components
  │   │   ├── UserForm.tsx
  │   │   ├── TaskList.tsx
  │   ├── pages
  │   │   ├── Dashboard.tsx
  │   │   ├── Login.tsx
  │   ├── App.tsx
  │   ├── index.tsx
```
### ポイント
✅ データバインディングでコード量が減る  
✅ 変更がリアルタイムにViewへ反映される  
❌ データバインディングの仕組みが複雑になりやすい  

---

## 4. PAC（Presentation-Abstraction-Control）
複雑なアプリ向け。階層ごとに分離できる。

### 構成
- **Presentation（プレゼンテーション）**<br>UI・View等のユーザーインターフェース
- **Abstraction（アブストラクション）**<br>データ・ビジネスロジック（Model）
- **Control（コントロール）**<br>PresentationとAbstractionの仲介役（MVCのController）

### Spring + React のファイル構成
```plaintext
/backend (Spring Boot)
  ├── src/main/java/com/example/app
  │   ├── presentation
  │   │   ├── controllers
  │   │   │   ├── UserController.java
  │   │   │   ├── TaskController.java
  │   ├── abstraction
  │   │   ├── models
  │   │   │   ├── User.java
  │   │   │   ├── Task.java
  │   │   ├── services
  │   │   │   ├── UserService.java
  │   │   │   ├── TaskService.java
  ├── Application.java

/frontend (React)
  ├── src
  │   ├── presentation
  │   │   ├── views
  │   │   ├── components
  │   ├── abstraction
  │   │   ├── models
  │   │   ├── services
  │   ├── control
  │   │   ├── UserController.ts
  │   │   ├── TaskController.ts
  │   ├── App.tsx
  │   ├── index.tsx
```
### ポイント
✅ 各層が明確に分かれており、拡張しやすい  
✅ 複雑なアプリケーション向き  
❌ 小規模なプロジェクトではオーバースペック  

---
## パターンの対応プロジェクト
| パターン | こんなときにおすすめ                              |
| -------- | ------------------------------------------------- |
| **MVC**  | Webアプリ（Spring, Railsなど）                    |
| **MVP**  | テストを重視するアプリ（Android開発など）         |
| **MVVM** | モダンなフロントエンド（React, Vue, Angularなど） |
| **PAC**  | 大規模なアプリケーション                          |
