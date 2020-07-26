# Dockerfileは、ファイルに記載している命令を読み込み、イメージを構築する。
# 
# https://docs.docker.com/engine/reference/builder/#from
# https://hub.docker.com/layers/ubuntu/library/ubuntu/18.04/images/sha256-515e7c555486235ae2ad9c3820c0edf636aacbf25c8402ae70e1a2c3cd6b28f1?context=explore
# どこのDockerイメージからレイヤを作成するかを定義する。
FROM ubuntu:18.04
# TIPS apt-utilsをインストールすると他の警告が出力して失敗するので、以下の設定を定義する。
ENV DEBIAN_FRONTEND=noninteractive
# http://manpages.ubuntu.com/manpages/xenial/man7/debconf.7.html
ENV DEBCONF_NOWARNINGS=yes
# アプリケーションをmakeで構築していく。
# TIPS 不要なパッケージはインストールしない、目的に特化しておくこと。
# TIPS 複数行の引数を利用する場合は、アルファベット順だと管理が楽である。
# ABCDEFGHIJKLMNPQRSTUVWXYZ
# TIPS apt upgradeは利用しない。親イメージの必須パッケージが特権を持てないコンテナ内では更新できないので、メンテナに連絡すること。
# TIPS Ubuntuのイメージは、apt clean を自動実行するので、明示は必要ない
# TIPS インタラクティブなコマンドラインではapt スクリプト内ではapt-get を利用すること
# man apt 参照
RUN apt-get update && apt-get install -y --no-install-recommends \
build-essential \
curl \
git \
net-tools \
tree \
vim \
# aptのキャッシュを破棄してイメージ容量を削減する。
&& rm -rf /var/lib/apt/lists/* \
# nodejsの導入
## set_14.x は14を他の存在する値に変更可能
&& curl -sL https://deb.nodesource.com/setup_14.x | bash -
# TIPS apt-get update && apt-get install とセットにしないとインストールされない。
RUN apt-get update && apt-get install -y --no-install-recommends nodejs
COPY . ./app

