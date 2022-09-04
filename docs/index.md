---
layout: home
title: Home
hero:
  name: kkeisuke.com
  text: Web Application Engineer
  tagline: Frontend Engineer
  image:
    src: img/Lento.webp
  actions:
    - theme: brand
      text: 実績はこちら →
      link: /work
features:
  - title: プロフィール
    details: 木村慶介 / keisuke kimura / 熊本県で活動しているフリーランスの Web エンジニアです。
  - title: 業務内容
    details: 要件定義から設計、実装、運用まで幅広く対応します。また、PM 経験を生かしたマネジメントのご相談も承ります。
  - title: 得意分野
    details: 業務システム、BtoBサービスを中心にお受けしております。ユーザーの業務課題を整理し、解決をお手伝いします。
  - title: 得意技術
    details: TypeScript と Vue や React を用いたフロントエンド開発を最も得意としています。プロダクト要件に合わせた技術を選択します。
  - title: 経験のある技術
    details: 直近では Go を用いた Web API、帳票出力サービス、Node.js (TS) を用いたスケジュールタスクなどの経験があります。バックエンド開発も承ります。
  - title: スキル
    details: TypeScript / Vue3 / Vue2 / React / CSS / Storybook / Node.js / Go / PostgreSQL / MySQL / Agile / PM / UI Design / and more...
---

<script setup>
import SkillIcons from './components/home/SkillIcons.vue'
</script>

<skill-icons />

<style scoped>
.skill-icons {
  display: flex;
  justify-content: center;
  margin-block-start: 32px;
  margin-inline: 24px;
}
</style>
