# Q執務室 メンバーオーディション LP（lp-qshitsu-audition-biz）

デジタルアイドル「Q執務室」のメンバーオーディション用ランディングページ。
`digital-idol-figma-lp` をベースに派生制作（**仮組**）。

## ローカル確認
ブラウザで `index.html` を直接開く、または:

```bash
npx wrangler dev
```

## デプロイ（本番化時）

```bash
npx wrangler deploy
```

## 構成
| ファイル | 役割 |
| --- | --- |
| `index.html` | 本体マークアップ |
| `styles.css` | スタイル（末尾に「Q執務室 追加スタイル」ブロック） |
| `script.js` | スクロール演出・CTA等 |
| `assets/` | 画像・動画 |

> ⚠️ 仮組段階。Q執務室固有ビジュアルは PPP STUDIO 系のありもの素材で代用中。
> 本番素材が届き次第差し替える。詳細は `CLAUDE.md` を参照。
