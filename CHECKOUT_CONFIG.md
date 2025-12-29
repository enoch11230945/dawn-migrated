# AUREA 結帳頁配置檢查清單
## Checkout Configuration Protocol

> **重要提示**: Checkout 頁面無法通過代碼修改（除非 Shopify Plus）。
> 以下所有配置都在 Shopify Admin 中完成。

---

## ✅ Step 1: 視覺一致性 (Theme Settings > Checkout)

### Banner / Background
- [ ] **Background color**: `#FFFFFF` (白色 - 最高信任度)
- [ ] **不要放 Banner 圖片** - 保持乾淨

### Logo
- [ ] **上傳 AUREA Logo** (透明背景 PNG)
- [ ] **Position**: Center (置中)
- [ ] **Size**: Large (確保手機上看得清楚)

### Typography
- [ ] **Headings**: Playfair Display 或 Garamond (襯線體)
- [ ] **Body**: Lato 或 Assistant (無襯線體)

### Colors
- [ ] **Accent/Button color**: `#1A1A1A` (黑色)
- [ ] **Button text**: `#FFFFFF` (白色)
- [ ] **Error color**: 保持默認紅色
- [ ] ⚠️ **警告**: 不要用淺金色作為按鈕顏色 (可讀性問題)

---

## ✅ Step 2: 字段邏輯 (Settings > Checkout)

### Customer Contact
- [ ] **Customer contact method**: Email (不要選 "Phone or Email")

### Customer Information
- [ ] **Full name**: Require first and last name ✓
- [ ] **Company name**: Don't include ✓ (B2C 不需要)
- [ ] **Address line 2**: Optional ✓
- [ ] **Shipping address phone number**: Required ✓ (快遞員需要)

### Marketing Options
- [ ] **Email marketing**: "Not preselected" (GDPR 合規 - UK)
- [ ] **Show sign-up option at checkout**: Enabled ✓

### Tipping
- [ ] ⛔ **Tipping**: DISABLED (關閉)
  - 你賣的是奢華情感珠寶，不是披薩

---

## ✅ Step 3: 政策注入

確認以下頁面已創建並連結：
- [ ] Refund Policy (`/policies/refund-policy`)
- [ ] Shipping Policy (`/policies/shipping-policy`)
- [ ] Privacy Policy (`/policies/privacy-policy`)
- [ ] Terms of Service (`/policies/terms-of-service`)

**位置**: Settings > Policies

---

## ✅ Step 4: 訂單處理 (Settings > Checkout > Order Processing)

- [ ] **Address autocomplete**: Enabled ✓ (減少輸入錯誤)
- [ ] **After paid**: "Automatically archive the order" ✓ (保持後台乾淨)

---

## 📱 最終測試

在真實手機上走一遍流程：

1. [ ] 從首頁進入
2. [ ] 選擇產品
3. [ ] 加入購物車 (Cart Drawer 應該滑出)
4. [ ] 檢查 Free Shipping Bar 是否顯示
5. [ ] 點擊 Checkout
6. [ ] **檢查結帳頁**:
   - [ ] Logo 是否置中顯示?
   - [ ] 字體是否與網站一致?
   - [ ] 按鈕是否為黑色?
   - [ ] 底部是否有政策連結?
7. [ ] 填寫測試地址 (不付款)
8. [ ] 返回

---

## 🎯 配置完成標準

| 項目 | 狀態 |
|------|------|
| Logo 置中 | ⬜ |
| 黑色按鈕 | ⬜ |
| 匹配字體 | ⬜ |
| Tipping 關閉 | ⬜ |
| 電話必填 | ⬜ |
| 政策連結 | ⬜ |
| 手機測試通過 | ⬜ |

---

**結帳頁不需要「創意」。它需要的是「無聊」和「安全」。**

---

*Generated: 2025-12-29*
*Protocol: Linus Configuration Standard*
