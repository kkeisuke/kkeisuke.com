---
sidebar: auto
---

# Docker コマンド備忘録

- 参考
  - [Docker Compose コマンドライン・リファレンス](http://docs.docker.jp/compose/reference/toc.html)
  - [Docker コマンド](http://docs.docker.jp/engine/reference/commandline/index.html)
  - [docker-composeとdockerコマンドまとめ](https://qiita.com/tomo62/items/d966908cbc79a4c52dc7)
  - [Dockerコマンドメモ](https://qiita.com/curseoff/items/a9e64ad01d673abb6866)
  - [Docker volumeの削除](https://qiita.com/Ikumi/items/b319a12d7e2c9f7b904d)

## イメージビルド

```shell
# --no-cache 構築時にイメージのキャッシュを使わない
# --pull 常に新しいバージョンのイメージ取得を試みる
# --force-rm 常に中間コンテナを削除
docker-compose build
```

## イメージ一覧

```shell
docker images
```

## イメージ削除

```shell
docker rmi <イメージ名>

# タグなしのイメージをすべて削除する
docker images -qf dangling=true | xargs docker rmi
```


## コンテナ作成・起動

```shell
# -d バックグラウンド実行
docker-compose up -d
```

## コンテナ一覧

```shell
# -a 全コンテナ表示（デフォルトは起動しているコンテナのみ）
docker ps -a
```

## コンテナ起動

```shell
# 再起動も出来る
docker-compose start
# docker-compose restart
```

## コンテナ停止

```shell
# 削除しません
docker-compose stop
```

## コンテナ削除

```shell
# -v ボリューム削除
docker-compose down

# 起動していないコンテナの削除
docker ps -aqf status=exited | xargs docker rm
```

## コンテナログ確認

```shell
# -f 表示しつづける
# -t タイムスタンプの表示
docker-compose logs
```

## コンテナ接続

```
# コンテナ名、コマンドは docker ps -a で確認出来る
docker exec -it <コンテナ名> <コマンド>
# 例 docker exec -it -e COLUMNS=200 -e LINES=50 ubuntu_bash bash
```

## ボリューム確認

```shell
docker volume ls
```

## ボリューム削除

```shell
docker volume rm <ボリューム名>

# リンク切れ削除
docker volume ls -qf dangling=true | xargs docker volume rm
```
