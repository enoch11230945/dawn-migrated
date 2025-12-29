Dawn 主題完整遷移計劃
作者: Linus Torvalds 視角
日期: 2025-12-29
版本: 1.0
狀態: 🟡 DRAFT - 待審核

1. 【Linus 的直覺判斷】
這不是「遷移」，這是「重生」。

當前主題是一坨歷史遺留的垃圾 - 105 個 snippets、50+ 個過時的 {% include %} 調用、825KB 的單體 CSS、還有對 jQuery 的深度依賴。

Dawn 是乾淨的起點：

零 jQuery
100% Web Components
模組化 CSS (~80KB)
原生 OS 2.0 架構
遷移策略：從 Dawn 出發，選擇性移植功能，而不是反過來。

2. 【功能對照分析】
2.1 現有功能 → Dawn 等效映射
當前功能	當前實現	Dawn 等效	遷移策略
Header	
header.liquid
 (32KB)	
header.liquid
 (22KB)	✅ 使用 Dawn 原生
Footer	
footer-2.liquid
footer.liquid
✅ 使用 Dawn 原生
產品頁	
main-product.liquid
main-product.liquid
 (98KB)	✅ Dawn 更完整
Collection	
main-collection.liquid
main-collection-product-grid.liquid
✅ 使用 Dawn 原生
購物車	
main-cart.liquid
main-cart-items.liquid
 + 
main-cart-footer.liquid
✅ 使用 Dawn 原生
客戶帳戶	7 個模板	7 個原生 sections	✅ 使用 Dawn 原生
搜尋	
main-search.liquid
 (39KB)	
main-search.liquid
 (19KB)	✅ 使用 Dawn 原生
Blog	
main-blog.liquid
main-blog.liquid
✅ 使用 Dawn 原生
輪播圖	
index-image-with-text-overlay.liquid
slideshow.liquid
✅ 使用 Dawn 原生
特色產品	
index-featured-products.liquid
featured-collection.liquid
✅ 使用 Dawn 原生
圖文混排	
index-image-with-text-column.liquid
image-with-text.liquid
✅ 使用 Dawn 原生
Logo 列表	
index-logo-list.liquid
multicolumn.liquid
🔄 適配
分隔線	
index-divider.liquid
❌ 無	📦 創建新 section
Banners	
index-banners.liquid
image-banner.liquid
✅ 使用 Dawn 原生
2.2 需要遷移的自定義功能 (⚠️ 關鍵)
功能	當前文件	複雜度	遷移方案
Wishlist	wishlist-*.liquid (3 個), 
template-wishlist.liquid
🔴 高	完整移植到 Dawn
Compare	
compare.js
 (27KB), 
icon-compare.liquid
🔴 高	重寫為 Web Component
Megamenu	mmenu-*.liquid (5 個), 
main-megamenu.liquid
🟡 中	使用 Dawn 的 mega-menu.css
Testimonials	
index-testimonials.liquid
🟢 低	移植 schema + HTML
FAQ Accordion	
section-faq.liquid
, 
template-faq.liquid
, 
section-accordion.liquid
🟢 低	使用 Dawn 的 
collapsible-content.liquid
Announcement Bar	
section-announcement-bar.liquid
, 
section-dynamic-announcement.liquid
🟢 低	使用 Dawn 原生
Ticker	
index-ticker.liquid
🟢 低	移植或使用 Marquee CSS
產品 Badge	
product-badge.liquid
🟢 低	移植到 Dawn 的 card-product snippet
Swatch 色卡	
swatch.liquid
🟡 中	Dawn 已原生支援
Shipping Countdown	
shipping-countdown.liquid
🟡 中	移植 JS 邏輯
Newsletter Popup	
widget-newsletter-popup.liquid
🟡 中	移植到 Dawn
Social Sharing	
widget-social-sharing.liquid
, 
social-icon-link.liquid
🟢 低	Dawn 有原生支援
Breadcrumbs	
snippet-breadcrumbs.liquid
🟢 低	移植或使用 Liquid 原生
Pagination	
snippet-pagination.liquid
✅ 無需	Dawn 已有
Quick View Modal	
qv_modal.liquid
🟡 中	使用 Dawn 的 quick-add.js
Product Gallery	product-gallery-*.liquid (2 個)	🟡 中	Dawn 有更好的 media-gallery
Sidebar Filters	
sidebar-col.liquid
🟡 中	Dawn 有 facets.js
2.3 第三方 App 整合
App	當前整合	遷移需求
Judge.me Reviews	judgeme_core block	✅ App 會自動重新整合
Klaviyo	
klaviyo-back-in-stock.liquid
✅ App 會自動重新整合
Sender Email Marketing	App embed	✅ App 會自動重新整合
Hextom Translate/Currency	App block	✅ App 會自動重新整合
Shopify Inbox	Chat widget	✅ App 會自動重新整合
Autoketing SEO	多個 snippets	⚠️ 需要重新配置
Avada SEO	多個 snippets	⚠️ 需要重新配置
Tapita SEO	
tapita-seo-schema.liquid
⚠️ 需要重新配置
3. 【遷移階段計劃】
Phase 1: Dawn 基礎設置 (2 小時)
1.1 複製 Dawn 主題到工作目錄
# 重命名 Dawn 為工作目錄
Rename-Item "theme_export__aurea-9833-myshopify-com-dawn__29DEC2025-0808am" "dawn-migrated"
1.2 遷移品牌設定
設定項	來源	操作
Logo	
settings_data.json
 → logo_main	複製到 Dawn
Favicon	favicon	複製到 Dawn
顏色方案	全部顏色變數	映射到 Dawn
字體	type_base_font, type_heading_font	映射到 Dawn
社交媒體	social_*	複製到 Dawn
支付圖標	*_pay flags	複製到 Dawn
聯繫資訊	contacts_*	複製到 Dawn
Phase 2: 核心頁面遷移 (4-6 小時)
2.1 Header 遷移
Dawn 的 header.liquid 已包含：

響應式導航
Mega menu 支援
搜尋功能
購物車圖標
帳戶圖標
移動端抽屜
需要額外配置：

Top bar (公告欄)
貨幣選擇器
Wishlist 圖標
2.2 Footer 遷移
Dawn 的 footer.liquid 已包含：

多列 linklist
Newsletter 訂閱
社交圖標
支付圖標
需要遷移：

現有的 footer menu 結構
聯繫資訊區塊
2.3 Product Page 遷移
Dawn 的 main-product.liquid 功能：

媒體畫廊 (含視頻/3D)
變體選擇器 (含色卡)
數量選擇器
Buy Now 按鈕
門市取貨資訊
互補產品推薦
批量折扣
需要遷移的自定義功能：

自定義 Badge (完整移植 
product-badge.liquid
)
Shipping countdown (移植 JS)
Wishlist 按鈕 (移植 
wishlist-button.liquid
)
Compare 按鈕 (重寫)
Phase 3: 自定義功能移植 (6-8 小時)
3.1 Wishlist 系統
當前實現：

wishlist-core.liquid
 - 核心邏輯
wishlist-button.liquid
 - 按鈕組件
wishlist-header-link.liquid
 - Header 連結
template-wishlist.liquid
 - 願望清單頁面
section-wishlist-page.liquid
 - Section
遷移步驟：

1. 創建 Dawn sections:
   - sections/main-wishlist.liquid (基於 section-wishlist-page.liquid)
   
2. 創建 Dawn snippets:
   - snippets/wishlist-core.liquid (原樣複製)
   - snippets/wishlist-button.liquid (適配 Dawn CSS)
   
3. 更新 Dawn templates:
   - templates/page.wishlist.json (引用 main-wishlist)
3.2 Compare 功能
當前實現：

compare.js
 (27KB, jQuery 依賴)
icon-compare.liquid
component-compare.css
重寫策略：

// 轉換為 Web Component
class ProductCompare extends HTMLElement {
  constructor() {
    super();
    this.compareList = JSON.parse(localStorage.getItem('compare') || '[]');
  }
  // ... 
}
customElements.define('product-compare', ProductCompare);
3.3 自定義 Sections 移植
Section	遷移方式
section-faq.liquid
使用 Dawn 的 
collapsible-content.liquid
 + 遷移 schema blocks
index-testimonials.liquid
完整移植
index-ticker.liquid
完整移植 (純 CSS 動畫)
index-divider.liquid
完整移植
section-trust-badges.liquid
完整移植
section-uk-delivery.liquid
完整移植
section-message-cards.liquid
完整移植
section-emotional-story.liquid
完整移植
section-hero-emotional.liquid
完整移植
section-featured-gift.liquid
完整移植
section-product-value.liquid
完整移植
section-social-proof.liquid
完整移植
Phase 4: 樣式遷移 (4 小時)
4.1 顏色系統映射
// 當前主題 → Dawn 映射
{
  "color_primary": "#ff9f6b" → "colors[primary]",
  "color_secondary": "#797b7e" → "colors[secondary]",
  "heading_font_color": "#121212" → "colors[foreground]",
  "body_background_color": "#ffffff" → "colors[background]",
  "color_grey_1": "#f2f3f5" → "colors[background_secondary]"
}
4.2 字體映射
{
  "type_base_font": "bodoni_moda_n4" → Dawn system fonts or Google Fonts,
  "type_heading_font": "instrument_sans_n4" → Dawn heading fonts
}
Phase 5: 測試與驗證 (2-3 小時)
5.1 功能驗證清單
頁面/功能	測試項目
首頁	輪播、產品區、公告欄
產品頁	圖片畫廊、變體選擇、加入購物車、Wishlist
Collection	過濾器、排序、分頁
購物車	數量更新、移除、結帳
結帳	完整流程
帳戶	登入、註冊、訂單歷史
搜尋	即時搜尋、結果頁
移動端	所有頁面響應式
5.2 性能驗證
# Lighthouse 測試
lighthouse https://your-store.myshopify.com --only-categories=performance
# 期望結果:
# - Performance Score: > 80 (比當前提升 20+)
# - First Contentful Paint: < 2s
# - Largest Contentful Paint: < 3s
4. 【詳細文件對照表】
4.1 Sections 遷移表
當前 Section	Dawn 等效	動作
header.liquid
header.liquid
✅ 配置遷移
header_sidebar.liquid
❌	🗑️ 刪除 (使用 Dawn header)
footer-2.liquid
footer.liquid
✅ 配置遷移
index-banners.liquid
image-banner.liquid
✅ 使用 Dawn
index-custom-content.liquid
custom-liquid.liquid
✅ 使用 Dawn
index-divider.liquid
❌	📦 移植
index-featured-products.liquid
featured-collection.liquid
✅ 使用 Dawn
index-image-with-text-column.liquid
multicolumn.liquid
✅ 使用 Dawn
index-image-with-text-overlay.liquid
slideshow.liquid
✅ 使用 Dawn
index-logo-list.liquid
multicolumn.liquid
✅ 使用 Dawn
index-testimonials.liquid
❌	📦 移植
index-ticker.liquid
❌	📦 移植
main-404.liquid
main-404.liquid
✅ 使用 Dawn
main-article.liquid
main-article.liquid
✅ 使用 Dawn
main-blog.liquid
main-blog.liquid
✅ 使用 Dawn
main-cart.liquid
main-cart-items.liquid
 + 
main-cart-footer.liquid
✅ 使用 Dawn
main-collection.liquid
main-collection-product-grid.liquid
✅ 使用 Dawn
main-list-collection.liquid
main-list-collections.liquid
✅ 使用 Dawn
main-page.liquid
main-page.liquid
✅ 使用 Dawn
main-password.liquid
Dawn password sections	✅ 使用 Dawn
main-product.liquid
main-product.liquid
✅ 使用 Dawn
main-search.liquid
main-search.liquid
✅ 使用 Dawn
section-accordion.liquid
collapsible-content.liquid
✅ 使用 Dawn
section-announcement-bar.liquid
announcement-bar.liquid
✅ 使用 Dawn
section-contact.liquid
contact-form.liquid
✅ 使用 Dawn
section-dynamic-announcement.liquid
❌	📦 移植
section-emotional-story.liquid
❌	📦 移植
section-faq.liquid
collapsible-content.liquid
✅ 使用 Dawn
section-featured-gift.liquid
❌	📦 移植
section-hero-emotional.liquid
❌	📦 移植
section-message-cards.liquid
❌	📦 移植
section-product-recommendations.liquid
related-products.liquid
✅ 使用 Dawn
section-product-value.liquid
❌	📦 移植
section-social-proof.liquid
❌	📦 移植
section-trust-badges.liquid
❌	📦 移植
section-uk-delivery.liquid
❌	📦 移植
section-wishlist-page.liquid
❌	📦 移植
template-account.liquid
main-account.liquid
✅ 使用 Dawn
template-addresses.liquid
main-addresses.liquid
✅ 使用 Dawn
template-faq.liquid
collapsible-content.liquid
✅ 使用 Dawn
template-login.liquid
main-login.liquid
✅ 使用 Dawn
template-personal-block.liquid
❌	📦 移植
template-privacy-policy.liquid
main-page.liquid
✅ 使用 Dawn
template-services.liquid
❌	📦 移植
template-sidebar.liquid
❌	🗑️ 刪除 (Dawn 使用 drawer)
template-sizechart.liquid
collapsible-content.liquid
✅ 使用 Dawn
template-terms.liquid
main-page.liquid
✅ 使用 Dawn
template-wishlist.liquid
❌	📦 移植
統計：

✅ 使用 Dawn 原生: 29 個
📦 需要移植: 15 個
🗑️ 刪除: 2 個
4.2 需要完整移植的 Sections
優先級從高到低：

Wishlist 系統 (P0 - 核心功能)

section-wishlist-page.liquid
template-wishlist.liquid
自定義產品功能 (P1 - 銷售相關)

section-product-value.liquid
section-trust-badges.liquid
section-featured-gift.liquid
首頁 Sections (P2 - 設計相關)

index-testimonials.liquid
index-ticker.liquid
index-divider.liquid
行銷/情感 Sections (P3 - 可選)

section-emotional-story.liquid
section-hero-emotional.liquid
section-message-cards.liquid
section-social-proof.liquid
功能頁面 (P4 - 可選)

section-uk-delivery.liquid
section-dynamic-announcement.liquid
template-services.liquid
template-personal-block.liquid
5. 【風險評估】
風險	嚴重度	緩解措施
SEO 排名下降	🔴 高	保持 URL 結構、遷移 meta tags
第三方 App 不兼容	🟡 中	遷移後重新安裝 App
自定義功能遺失	🟡 中	詳細功能清單、逐一驗證
樣式差異	🟢 低	客製化 Dawn CSS
購物車/結帳中斷	🔴 高	完整測試後再上線
6. 【驗證計劃】
6.1 自動化測試
由於這是 Shopify Liquid 主題，沒有傳統的單元測試框架。驗證需要透過：

Shopify Theme Check CLI
# 安裝
npm install -g @shopify/cli @shopify/theme
# 執行語法檢查
shopify theme check --path ./dawn-migrated
# 期望：0 errors, minimal warnings
Lighthouse 性能測試
# 需要先部署到 Shopify 預覽
lighthouse [preview-url] --only-categories=performance --output=json
6.2 手動驗證清單
首頁驗證
 公告欄顯示正確
 Header 導航正常
 Logo 顯示正確
 輪播圖工作正常
 產品區塊顯示正確
 Footer 顯示正確
產品頁驗證
 圖片畫廊可滑動/縮放
 變體選擇正常更新圖片
 價格顯示正確
 Add to Cart 功能正常
 Wishlist 按鈕工作
 產品描述、詳情正確
購物車驗證
 商品顯示正確
 數量可修改
 可移除商品
 小計計算正確
 結帳按鈕工作
移動端驗證
 導航 drawer 正常
 所有頁面響應式
 觸控滑動正常
6.3 用戶驗收測試 (UAT)
請用戶在 Shopify 主題預覽 環境下完成以下操作：

瀏覽首頁，確認設計符合預期
點擊產品，確認詳情頁功能
加入購物車並完成結帳流程
使用 Wishlist 功能
使用移動設備訪問
7. 【時程估算】
階段	時間	依賴
Phase 1: 基礎設置	2 小時	無
Phase 2: 核心頁面	4-6 小時	Phase 1
Phase 3: 自定義功能	6-8 小時	Phase 2
Phase 4: 樣式調整	4 小時	Phase 3
Phase 5: 測試驗證	2-3 小時	Phase 4
總計	18-23 小時 (~3 工作天)	-
8. 【用戶審核要點】
IMPORTANT

請確認以下決策：

Wishlist 功能是否必須保留？ (需要完整移植)
Compare 功能是否必須保留？ (需要重寫為 Web Component)
以下自定義 sections 是否需要移植？
section-emotional-story.liquid
section-hero-emotional.liquid
section-social-proof.liquid
template-personal-block.liquid
template-services.liquid
是否有 sections 可以捨棄？
遷移時間 (約 3 個工作天) 是否可接受？
是否需要先在預覽環境測試後再正式上線？
9. 【執行順序摘要】
通過
需修改
Phase 1: Dawn 基礎設置
Phase 2: 核心頁面遷移
Phase 3: 自定義功能移植
Phase 4: 樣式調整
Phase 5: 測試驗證
用戶驗收
正式上線
文件結束