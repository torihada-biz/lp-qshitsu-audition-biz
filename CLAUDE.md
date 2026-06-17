# CLAUDE.md — lp-qshitsu-audition-biz

デジタルアイドル「Q執務室」メンバー**オーディション**LP。
`digital-idol-figma-lp`（PPP STUDIOの参照実装）をクローンして派生制作。

## 構成
- `index.html` / `styles.css` / `script.js` / `assets/`
- `wrangler.jsonc` — Cloudflare（Workers Assets、ルート直下配信）
- `preview-*.png` — 制作過程プレビュー（参考用）

## 派生元 / 参考にした実装
- ベース: `~/Projects/digital-idol-figma-lp`
- TikTok/SNSリンクの実装: `~/Projects/lp-tryvii-newmember-biz`
- 所属事務所紹介・運営連絡先(company-card): `~/Projects/lp-crystal-project-biz`

## このLP固有の追加・変更点（仮組）
- 「募集」→「オーディション」に文言変更（タイトル/CTA/hero/meta）
- ヒーロー＆サイドナビに **Q執務室ロゴ**（`assets/q-logo.png`）を追加
- 「Q執務室とは？」セクション＋公式SNS（TikTok/X/Instagram）ボタン
- 「所属事務所」セクション（PPP STUDIO紹介・写真・特長・所属クリエイター）
- 末尾に「運営・お問い合わせ」company-card

## 仮組につき後差し替え予定の素材
- `q-logo.png` 以外の Q執務室 固有ビジュアル（hero写真・動画・メンバー写真など）は
  現状 PPP STUDIO 系の **ありもの素材で代用**。本番素材が来たら差し替える。
- SNSハンドル（`@qshitsu_official` 等）・LINE URL・連絡先メールは要確認。

## デプロイ
未デプロイ（仮組段階）。本番化時は Cloudflare（`wrangler deploy` もしくは Pages）。
