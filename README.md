# 寫寫 - Astro 部落格

你的個人部落格，用 Astro 建立，專為文化觀察和自由寫作優化。

## 📋 專案結構

```
xie-xie-blog/
├── src/
│   ├── content/
│   │   ├── blog/
│   │   │   └── you-zhen-yu-you-zhen.md    # 你的文章（Markdown 格式）
│   │   └── config.ts                      # 內容集合配置
│   ├── layouts/
│   │   └── Layout.astro                   # 主版面
│   └── pages/
│       ├── index.astro                    # 首頁（文章列表）
│       └── blog/
│           └── [slug].astro               # 文章詳頁（動態路由）
├── public/                                # 靜態資源
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── netlify.toml                           # Netlify 部署配置
└── README.md                              # 這個檔案
```

## 🚀 本地開發

### 第1步：安裝依賴
```bash
npm install
```

### 第2步：啟動開發伺服器
```bash
npm run dev
```

然後打開 `http://localhost:3000` 查看你的部落格。

### 第3步：停止開發伺服器
按 `Ctrl + C` 停止。

## ✍️ 如何新增文章

### 第1步：建立文章檔案
在 `src/content/blog/` 資料夾裡，新增一個 Markdown 檔案：

```bash
# 例如：
src/content/blog/my-new-article.md
```

### 第2步：寫文章

在新檔案裡，先寫 Front Matter（元數據），然後寫文章內容：

```markdown
---
title: "我的新文章標題"
date: 2026-04-10
tag: "文化"
image: "./cover-image.jpeg"
excerpt: "這是文章的簡短摘要，會出現在列表頁面"
---

## 第一節

你的文章內容從這裡開始...

## 第二節

更多內容...
```

### 第3步：加圖片（可選）

如果你要加圖片：
1. 把圖片放在同個資料夾（`src/content/blog/`）
2. 在 Front Matter 的 `image` 欄位寫圖片名稱（如上例的 `cover-image.jpeg`）
3. Astro 會自動處理

### 第4步：完成！

存檔後，Astro 會自動：
- ✅ 生成獨立的文章頁面（URL: `/blog/my-new-article/`）
- ✅ 加到首頁列表
- ✅ 設置 SEO meta tags
- ✅ 處理日期、標籤、圖片

## 🏷️ 可用的標籤

文章的 `tag` 欄位只能用這些：
- `想法`
- `閱讀`
- `工作`
- `日常`

如果要增加新標籤，編輯 `src/content/config.ts` 檔案。

## 🌐 部署到 Netlify

### 第1步：推上 GitHub

如果你還沒有 GitHub 帳號，先註冊一個：https://github.com

然後：

```bash
# 初始化 git
git init

# 加入所有檔案
git add .

# 提交
git commit -m "Initial commit"

# 把遠端改成你的 GitHub 位置（記得改 USERNAME 和 REPO_NAME）
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 推上去
git push -u origin main
```

### 第2步：在 Netlify 連接 GitHub

1. 去 [netlify.com](https://netlify.com)
2. 登入（或註冊）你的 Netlify 帳號
3. 點「Add new site」
4. 選「Import an existing project」
5. 連接你的 GitHub
6. 選你的 repo
7. Netlify 應該會自動偵測到 Astro，直接點「Deploy」
8. 等幾分鐘，你的部落格就上線了！

Netlify 會給你一個網址，長得像 `xxx-xxx.netlify.app`

### 第3步：以後怎麼更新

每次你寫新文章或改設計，只需要：

```bash
# 修改檔案後
git add .
git commit -m "Add new article: xxx"
git push origin main

# Netlify 會自動偵測到更新並重新部署
# 5分鐘內你的網站就更新了
```

## ⚙️ 自訂設定

### 改網址

編輯 `astro.config.mjs`：
```javascript
site: 'https://your-domain.com'  // 改成你的網址
```

### 改顏色

編輯 `src/layouts/Layout.astro` 的 CSS 變數：
```css
:root {
  --color-bg: #faf8f3;           /* 背景色 */
  --color-accent-brown: #c9a876; /* 棕色強調色 */
  --color-accent-green: #8fb89f; /* 綠色強調色 */
  /* ... 其他色彩 */
}
```

### 改字體

編輯 `src/layouts/Layout.astro` 的字體變數：
```css
:root {
  --font-display: 'Georgia', serif;  /* 標題字體 */
  --font-body: 'Segoe UI', sans-serif; /* 內文字體 */
}
```

## 📊 SEO 優化

這個設置已經包含了：
- ✅ 每篇文章獨立 URL
- ✅ Open Graph meta tags（分享時漂亮）
- ✅ 正確的標題和描述
- ✅ 圖片優化

要進一步優化，可以：
1. 用 Google Search Console 驗證網站：https://search.google.com/search-console
2. 提交 Sitemap（Astro 會自動生成）
3. 監控搜尋排名

## 🆘 常見問題

### Q: 圖片沒有顯示
A: 確認圖片：
- 檔名和 Front Matter 的 `image` 欄位完全相同
- 放在同個資料夾（`src/content/blog/`）
- 支援的格式：`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

### Q: 新文章沒有出現在列表
A: 檢查：
- 有沒有存檔
- 檔案是否在 `src/content/blog/` 資料夾
- Front Matter 的格式是否正確（`---` 包圍）

### Q: Netlify 部署失敗
A: 檢查：
- GitHub 上是否有 `package.json`
- 是否有 `netlify.toml`
- 本地 `npm run build` 是否成功

### Q: 怎麼改網址的樣式
A: 編輯 `src/pages/blog/[slug].astro` 裡的 CSS。

## 📚 更多資訊

- Astro 官方文件：https://docs.astro.build
- Markdown 語法：https://www.markdownguide.org
- Netlify 文件：https://docs.netlify.com

## 💡 下一步建議

1. **寫更多文章**（Markdown 很簡單）
2. **自訂顏色和字體**（改 CSS 變數）
3. **監控 Google 排名**（用 Google Search Console）
4. **考慮加功能**（例如評論、贊助按鈕）

---

祝你寫作愉快！如果有問題，隨時問我。✨
