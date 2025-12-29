# 【AUREA Developer Stack】Final Binary Manifest

> **Version:** 1.1 (FINAL)  
> **Date:** December 29, 2025  
> **Status:** ✅ MINIMAL COMPLETE DEFINITION  
> **Linus 評語:** "Stop looking for more."

---

## 【Linus 的直覺判斷】

這份清單已經達到了 **"Minimal Complete Definition" (最小完備定義)**。

任何超出這份清單的東西都是 **Bloatware (膨脹軟體)**。不需要 Instagram Feed、不需要幸運轉盤、不需要複雜的 SEO 插件。

**Code is cheap. Show me the product.**

---

## 📦 CORE DEPENDENCIES (核心依賴)

### Software Stack (軟體層)

| 類別 | App 名稱 | 成本 | 用途 |
|------|----------|------|------|
| **邏輯與數據** | Klaviyo | £0/月 | 棄單挽回、缺貨通知、自動化流程 |
| **廣播** | Shopify Email | Native | 群發郵件（新品上市等） |
| **社會證明** | Judge.me | £0/月 | 帶圖片的產品評論 |
| **合規** | Shopify Privacy | Native | UK GDPR Cookie 橫幅 |
| **搜索** | Search & Discovery | Native | 自定義過濾器（材質、價格） |
| **運營** | Order Printer | Native | 自定義發貨單 (Packing Slips) |

### Theme Patches (主題補丁)

| 功能 | 文件 | 取代 App |
|------|------|----------|
| Wishlist | `snippets/wishlist-*.liquid` | Wishlist Plus ($19/mo) |
| Dynamic Announcement | `sections/section-dynamic-announcement.liquid` | Announcement Bar ($19/mo) |
| Back in Stock Trigger | `snippets/klaviyo-back-in-stock.liquid` | SC Back in Stock ($19/mo) |
| Shipping Countdown | `snippets/shipping-countdown.liquid` | Countdown Timer ($15/mo) |

---

## 🏭 PHYSICAL LAYER (物理層)

### 必需設備

| 設備 | 價格 | 用途 |
|------|------|------|
| **熱感應標籤機 (4x6)** | ~£80 | 列印 Royal Mail 地址標籤 |
| **Epson EcoTank ET-8550** | ~£400 | Message Card 彩色列印 |
| **PIP Boxes (160×110×20mm)** | ~£30/1000 | 符合 Large Letter 規格 |
| **Velvet Pouches** | ~£15/100 | 項鍊包裝 |

### 外部服務

| 服務 | 帳戶類型 | 費用 |
|------|----------|------|
| **Royal Mail Click & Drop** | Business Account | £1.55/件 (Large Letter) |
| **Nihaojewelry** | Wholesale | £2.20/件 (批次50+) |

---

## 📋 PRE-FLIGHT CHECKLIST

### 軟體層 ✅

- [x] Theme 已創建所有必要 sections
- [x] Wishlist (localStorage) 已實現
- [x] Dynamic Announcement 已實現
- [x] Back in Stock Trigger 已實現
- [x] Shipping Countdown 已修復 (UTC + clearInterval)
- [x] 所有 7-10 days 改為 2-3 days
- [x] 所有 Bug 已修復 (N+1 Query, Dead Events, Modal Duplication)

### 安裝清單 📦

```
Shopify App Store:
[ ] Klaviyo: Email Marketing & SMS
[ ] Judge.me Product Reviews

Shopify Native (Enable in Settings):
[ ] Shopify Privacy & Compliance
[ ] Shopify Search & Discovery
[ ] Shopify Order Printer
[ ] Shopify Email
```

### 物理層 🔧

```
設備採購:
[ ] 熱感應標籤機 (4x6)
[ ] Epson EcoTank 或同級印表機
[ ] PIP Boxes (1000 件起訂)
[ ] Velvet Pouches (100 件起訂)
[ ] 禮品卡紙張 (250gsm)

帳戶註冊:
[ ] Royal Mail Click & Drop (Business)
[ ] Nihaojewelry Wholesale Account
```

---

## 🎯 Order Printer 模板 (Packing Slip)

安裝 Order Printer 後，使用此自定義 HTML 模板：

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Georgia', serif; padding: 40px; }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { font-size: 24px; font-weight: normal; letter-spacing: 3px; }
    .tagline { font-size: 12px; color: #888; margin-top: 5px; }
    .thank-you { 
      background: #faf9f8; 
      padding: 20px; 
      margin: 30px 0; 
      text-align: center;
      border-left: 3px solid #d4a574;
    }
    .items { margin: 20px 0; }
    .item { padding: 10px 0; border-bottom: 1px solid #eee; }
    .footer { 
      margin-top: 40px; 
      font-size: 11px; 
      color: #999; 
      text-align: center; 
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">AUREA</div>
    <div class="tagline">Handcrafted with Love in London</div>
  </div>
  
  <div class="thank-you">
    <p>Dear {{ order.customer.first_name | default: "Valued Customer" }},</p>
    <p>Thank you for choosing AUREA. Your order has been carefully prepared with love.</p>
  </div>
  
  <div class="items">
    {% for line_item in order.line_items %}
    <div class="item">
      <strong>{{ line_item.title }}</strong> × {{ line_item.quantity }}
    </div>
    {% endfor %}
  </div>
  
  <div class="footer">
    <p>Questions? Contact us at hello@aurea.co.uk</p>
    <p>30-Day Returns | Quality Guaranteed</p>
  </div>
</body>
</html>
```

---

## 🏗️ 最終架構圖

```
┌─────────────────────────────────────────────────────────────┐
│                    AUREA MVP STACK                          │
├─────────────────────────────────────────────────────────────┤
│  [Theme Layer]                                              │
│    ├── Wishlist (localStorage)                              │
│    ├── Dynamic Announcement (fetch intercept)               │
│    ├── BIS Trigger (Klaviyo integration)                    │
│    ├── Emotion Engine Sections                              │
│    └── Shipping Countdown (multi-instance, UTC)             │
├─────────────────────────────────────────────────────────────┤
│  [Native Apps]                                              │
│    ├── Shopify Email                                        │
│    ├── Shopify Privacy                                      │
│    ├── Shopify Search & Discovery                           │
│    └── Shopify Order Printer                                │
├─────────────────────────────────────────────────────────────┤
│  [Free Third-Party]                                         │
│    ├── Klaviyo (Automation, Free Tier)                      │
│    └── Judge.me (Reviews, Forever Free)                     │
├─────────────────────────────────────────────────────────────┤
│  [Physical Layer]                                           │
│    ├── Royal Mail Click & Drop                              │
│    ├── Thermal Label Printer                                │
│    ├── Epson EcoTank (Message Cards)                        │
│    └── PIP Boxes + Velvet Pouches                           │
└─────────────────────────────────────────────────────────────┘

Monthly Software Cost: £0
Annual Savings: ~£700+ (vs typical App stack)
```

---

## 🚀 EXECUTION ORDER

```makefile
# Phase 1: Software
deploy_theme:
	# Upload theme ZIP to Shopify
	# Set index.emotion-engine as homepage template
	# Create Wishlist page (template: page.wishlist)

install_apps:
	# Klaviyo (App Store)
	# Judge.me (App Store)
	# Enable native apps in Shopify Settings

# Phase 2: Hardware  
setup_operations:
	# Order thermal printer
	# Order PIP boxes + velvet pouches
	# Register Royal Mail Business Account
	# Configure Order Printer template

# Phase 3: Inventory
init_buffer:
	# Order 50x Love Knot from Nihaojewelry
	# Order 50x Interlocking Hearts
	# Wait 7-10 days for delivery
	# QA + Repackage

# Phase 4: Launch
go_live:
	# Add products to Shopify
	# Connect to Featured Gift section
	# Upload product images
	# Test checkout flow
	# Launch on Etsy first (lower risk)
```

---

**這份清單是完備的。不需要再添加任何東西。**

**下一步：去 Nihaojewelry 下單 50 條 Love Knot。**

**Dismissed.**
