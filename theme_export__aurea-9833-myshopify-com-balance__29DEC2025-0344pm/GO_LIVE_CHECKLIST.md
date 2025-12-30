# AUREA Go-Live Checklist 🚀
## 英國珠寶電商 MVP 上線前完整檢查清單

**最後更新**: December 2025  
**目標市場**: 英國 (UK)  
**業務模式**: Nihaojewelry 進貨 → 英國倉發貨 + 預購

---

## 📋 快速概覽

| 板塊 | 狀態 | 重要性 |
|------|------|--------|
| 1. 法律與合規 | ⬜ 待檢查 | 🔴 關鍵 - 不合規會被封 |
| 2. 網站細節 | ⬜ 待檢查 | 🟡 重要 - 影響信任度 |
| 3. 金流支付 | ⬜ 待檢查 | 🔴 關鍵 - 收不到錢 |
| 4. 運費設定 | ⬜ 待檢查 | 🟡 重要 - 影響利潤 |
| 5. 行銷自動化 | ⬜ 待檢查 | 🟢 建議 - 提升營收 |
| 6. 預購系統 | ✅ 已完成 | 🔴 關鍵 - 已完成 |

---

## 1. 法律與合規 (Legal & Trust) ⚖️

### 1.1 Cookie Banner (GDPR 必需)

**為什麼重要**: 英國/歐洲受 GDPR 法規限制，沒有 Cookie 同意彈窗可能被罰款高達 €20M。

**如何設定**:
1. 進入 Shopify Admin → **Settings** → **Customer privacy**
2. 點擊 **Enable cookie banner**
3. 選擇 **UK and EU visitors** (至少)
4. 自訂文字（見下方範本）

**建議文字**:
```
We use cookies to enhance your browsing experience and analyze site traffic. 
By clicking "Accept", you consent to our use of cookies. 
Learn more in our Privacy Policy.
```

- [ ] Cookie Banner 已開啟
- [ ] 已測試在手機上正常顯示

---

### 1.2 法律頁面 (必需 - 否則廣告被拒)

**必須有的 4 個頁面** (放在 Footer):

#### Privacy Policy (隱私政策)
```
重點包含:
- 收集哪些個人資料 (姓名、地址、Email、付款資訊)
- 如何使用這些資料
- 是否與第三方分享 (例如物流公司)
- 使用者如何刪除自己的資料
- 聯繫方式
```

**快速方案**: 使用 Shopify 內建的隱私政策產生器
Settings → Policies → Privacy Policy → Create from template

- [ ] Privacy Policy 已發布
- [ ] 包含 GDPR 條款

#### Terms of Service (服務條款)
```
重點包含:
- 網站擁有者資訊
- 購買條件
- 智慧財產權
- 責任限制
- 適用法律 (England and Wales)
```

- [ ] Terms of Service 已發布

#### Refund Policy (退款政策)
```
重點包含 (英國法律要求):
- 14 天無理由退貨權 (Consumer Contracts Regulations 2013)
- 退貨運費誰付
- 退款處理時間
- 不可退貨的例外 (例如個性化商品)

建議文字:
"Under UK Consumer Contracts Regulations, you have 14 days from delivery 
to return items for a full refund. Items must be unworn and in original 
packaging. Refunds are processed within 5-7 working days."
```

- [ ] Refund Policy 已發布
- [ ] 包含 14 天退貨政策
- [ ] 包含預購退款規則 (參考 POLICY_TEMPLATES.md)

#### Shipping Policy (運送政策)
```
重點包含:
- 處理時間 (In Stock vs Pre-order)
- 運送時間 (UK 2-3 days)
- 運費門檻 (Free over £30)
- 混合訂單規則
- 國際運送 (如有)
```

- [ ] Shipping Policy 已發布
- [ ] 包含預購等待時間
- [ ] 包含混合訂單規則

---

### 1.3 聯繫資訊 (Legal Requirement)

**英國法律要求顯示**:
- 電子郵件地址 (不能只有 Contact Form)
- 營業地址 (可用虛擬地址)
- 營業時間 (建議)

**設定位置**: Footer 或 Contact 頁面

**建議格式**:
```
AUREA London
Email: hello@aurealondeon.co.uk
Address: [Your Virtual Office Address], London, UK
Business Hours: Mon-Fri 9am-5pm GMT
```

- [ ] Email 地址已顯示 (使用網域郵箱，非 Gmail)
- [ ] 營業地址已顯示
- [ ] Contact 頁面已創建

---

## 2. 網站細節與體驗 (Website Polish) ✨

### 2.1 Favicon (瀏覽器標籤圖標)

**為什麼重要**: 沒改的話會顯示 Shopify 預設圖標，非常不專業。

**規格**: 32x32 像素, PNG 格式

**如何設定**:
1. Theme Editor → **Theme settings** → **Favicon**
2. 上傳您的 Logo 圖標

- [ ] Favicon 已更換

### 2.2 About Us 頁面

**為什麼重要**: 珠寶客戶買的是「故事」和「信任」。

**範本**:
```html
<h1>Our Story</h1>

<p>Welcome to AUREA London – where everyday luxury meets conscious craftsmanship.</p>

<p>Founded in [Year], we started with a simple mission: to bring beautifully crafted, 
affordable jewellery to women who appreciate the finer details without the 
designer price tag.</p>

<h2>What Makes Us Different</h2>
<ul>
  <li><strong>Curated Selection</strong> – We personally select each piece</li>
  <li><strong>UK-Based</strong> – Fast shipping from our London warehouse</li>
  <li><strong>Quality First</strong> – 18K Gold Vermeil & 925 Sterling Silver</li>
  <li><strong>Sustainable</strong> – Minimal packaging, maximum beauty</li>
</ul>

<h2>Our Promise</h2>
<p>Every piece is chosen with love. Every order is packed with care. 
And if you're not completely happy, our hassle-free returns have you covered.</p>

<p>Thank you for being part of our journey. ✨</p>

<p>— The AUREA London Team</p>
```

- [ ] About Us 頁面已創建
- [ ] 包含品牌故事
- [ ] 包含團隊/創辦人照片 (建議)

### 2.3 導航選單結構

**建議結構**:
```
主選單 (Header):
├── Necklaces
├── Earrings  
├── Rings
├── Bracelets
├── New Arrivals
└── Sale (可選)

頁尾選單 (Footer):
├── About Us
├── Contact
├── Track Order
├── FAQ
├── Privacy Policy
├── Terms of Service
├── Refund Policy
└── Shipping Policy
```

- [ ] 主選單已設定
- [ ] 頁尾選單已設定
- [ ] 所有連結可正常點擊

### 2.4 圖片優化

**規則**:
- 每張圖片 < 500KB
- 產品主圖: 1200x1200 像素為佳
- 使用 WebP 格式 (更小更快)

**工具**: 
- [TinyJPG](https://tinyjpg.com) - 免費壓縮
- [Squoosh](https://squoosh.app) - Google 的免費工具

- [ ] 所有產品圖已壓縮
- [ ] 頁面載入速度 < 3 秒 (用 PageSpeed Insights 測試)

---

## 3. 金流與支付 (Payments) 💳

### 3.1 支付方式設定

**英國標準配置**:
- ✅ Shopify Payments (Visa/Mastercard)
- ✅ PayPal
- 🟡 Apple Pay / Google Pay (自動開啟)
- 🟡 Klarna (可選 - 分期付款)

**設定位置**: Settings → Payments

- [ ] Shopify Payments 已開通
- [ ] PayPal Business 已連結
- [ ] 已驗證銀行帳戶

### 3.2 測試訂單

**必做！**

**步驟**:
1. Settings → Payments → Shopify Payments → Manage
2. 開啟 **Test mode**
3. 使用測試卡號下單:
   - 卡號: `4242 4242 4242 4242`
   - 到期日: 任何未來日期
   - CVV: 任意 3 位數
4. 完成整個結帳流程
5. 檢查訂單確認郵件

- [ ] 已完成測試訂單
- [ ] 訂單確認郵件正確收到
- [ ] PayPal 支付已測試

### 3.3 Checkout 頁面品牌化

**設定位置**: Theme Settings → Checkout

**需更改**:
- Logo (左上角)
- 背景顏色 (匹配品牌)
- 按鈕顏色

- [ ] Checkout Logo 已上傳
- [ ] 品牌顏色一致

---

## 4. 運費設定 (Shipping) 🚚

### 4.1 運費階梯

**建議設定** (Settings → Shipping and delivery):

| 訂單金額 | 運費 | 配送時間 |
|---------|------|---------|
| £0 - £29.99 | £2.99 | 2-3 working days |
| £30+ | FREE | 2-3 working days |

**行銷小技巧**: 在網站頂部顯示 "Free UK Shipping over £30!"

- [ ] 運費規則已設定
- [ ] 滿額免運已開啟

### 4.2 產品重量

**重要**: 所有產品必須填寫重量，否則運費計算可能出錯。

**建議**:
- 項鍊: 0.05 kg
- 耳環: 0.02 kg
- 戒指: 0.03 kg
- 禮盒套裝: 0.15 kg

- [ ] 所有產品已填寫重量

### 4.3 配送區域

**設定位置**: Settings → Shipping → Manage rates

**建議分區**:
- UK: 2-3 working days
- EU: 5-7 working days (可選)
- Rest of World: 10-15 working days (可選)

- [ ] UK 配送已設定
- [ ] 國際運送 (如需要)

---

## 5. 行銷自動化 (Marketing) 💌

### 5.1 棄單挽留郵件 (Abandoned Cart)

**統計**: 70% 的購物車會被棄置。開啟這個功能可以挽回 10-15% 的訂單！

**設定位置**: Settings → Checkout → Abandoned checkouts

**建議設定**:
- ✅ Automatically send abandoned checkout emails
- ⏰ Send after: 1 hour (第一封)
- 📧 可設定多封 (1小時、24小時、3天)

- [ ] 棄單郵件已開啟
- [ ] 已自訂郵件內容 (加入折扣碼更有效)

### 5.2 歡迎彈窗 (Email Capture)

**目的**: 收集訪客 Email，之後可發新品通知、折扣券。

**建議文案**:
```
Get 10% Off Your First Order!

Join our VIP list for exclusive access to new arrivals, 
special offers, and styling tips.

[Email Input]
[Subscribe Button: Yes, I want 10% off!]

*By subscribing, you agree to receive marketing emails. 
Unsubscribe anytime.
```

**工具選擇**:
- Shopify Forms (免費)
- Klaviyo (免費到 250 subscribers)
- Privy (免費版可用)

- [ ] Email 彈窗已設定
- [ ] 折扣碼已創建 (例如 WELCOME10)

### 5.3 訂閱確認郵件

**設定訂閱成功後自動發送的郵件**:

```
Subject: Welcome to AUREA London! Here's your 10% off ✨

Hi [Name],

Thank you for joining our VIP list!

As promised, here's your exclusive discount code:

🎁 WELCOME10 — 10% off your first order

Shop now: [Link to Store]

Can't wait to see what you choose!

With love,
The AUREA London Team
```

- [ ] 歡迎郵件已設定

---

## 6. 最終上線檢查 ✅

### 技術檢查
- [ ] 網站在手機上正常顯示
- [ ] 所有連結可正常點擊 (無 404)
- [ ] 購物車功能正常
- [ ] 結帳流程順暢

### 內容檢查
- [ ] 無拼寫錯誤
- [ ] 產品價格正確
- [ ] 圖片清晰無水印
- [ ] 產品描述完整

### 合規檢查
- [ ] Cookie Banner 正常彈出
- [ ] 4 個法律頁面已發布
- [ ] 聯繫資訊完整

### 支付檢查
- [ ] 測試訂單成功
- [ ] 退款流程已測試
- [ ] 收到付款通知

---

## 🎉 恭喜！

如果以上所有項目都已勾選，您的網站就已經是 **Top 10%** 的專業水平！

**下一步**:
1. 移除密碼保護 (Online Store → Preferences)
2. 開始小預算廣告測試 (£5/天)
3. 監控 Google Analytics
4. 收集客戶評價

**Good luck with your launch! 🚀**

---

*Created for AUREA London*
*Last Updated: December 2025*
