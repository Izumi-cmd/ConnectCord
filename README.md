# ConnectCard デジタル名刺交換アプリ

QR コードを使用して、デジタル名刺を簡単に作成・共有できるモダンなウェブアプリケーションです。

## 機能

- ユーザ登録・認証
- プロフィール情報の入力・編集
- QR コードの生成・表示

## 技術スタック

- フロントエンド

  - React 18.3.1
  - Node.js:v16.20.2

- バックエンド：

  - Laravel 11.25.0
  - PHP:8.2.24

- データベース

  - MySQL:

- 認証機能
  - Laravel Fortify（将来的に実装）
- 開発環境：Docker

# 環境構築

初回構築時はマイグレーションを実行してください

```
docker compose exec -it php bash
```

```
# bash
php artisan migrate
```

# アクセス先

- フロントエンド

```
http://localhost:3000
```

- バックエンド

```
http://localhost
```
