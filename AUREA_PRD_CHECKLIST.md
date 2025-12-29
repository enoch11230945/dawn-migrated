# AUREA PRD v2.0 Compliance Checklist

> **Status:** ✅ COMPLETE  
> **Date:** December 29, 2025  
> **Theme:** Dawn (Online Store 2.0) - Migrated

---

## 📋 PRD Section Mapping

| PRD Requirement | Theme Implementation | Status |
|-----------------|---------------------|--------|
| **Section 1.0** - UK Local Inventory | Messaging updated to "2-3 days UK delivery" | ✅ |
| **Section 3.0** - Large Letter Protocol | UK Delivery section mentions dispatch times | ✅ |
| **Section 4.0** - SKU Hardware Specs | Product Value comparison section | ✅ |
| **Section 5.0** - Emotional Engine | All "Emotion" sections created | ✅ |
| **Section 5.2** - Message Card Generator | `message-cards.liquid` + `message-card-preview.liquid` | ✅ |
| **Section 6.0** - Unit Economics | Trust badges with pricing perception | ✅ |
| **Section 8.0** - Non-Functional/FAQ | `aurea-faq.liquid` with objection handling | ✅ |

---

## 🎨 Theme Sections Created

### Core Sections (PRD v2.0)

| Section | File | Purpose |
|---------|------|---------|
| Dynamic Announcement | `sections/dynamic-announcement.liquid` | Rotating messages + countdown |
| Hero Emotional | `sections/hero-emotional.liquid` | First impression |
| Trust Badges | `sections/trust-badges.liquid` | UK Stock, Non-Tarnish, Gift Ready |
| Featured Gift | `sections/featured-gift.liquid` | Love Knot showcase |
| Product Value | `sections/product-compare-value.liquid` | Why AUREA vs competitors |
| Message Cards | `sections/message-cards.liquid` | Card type selector |
| Emotional Story | `sections/emotional-story.liquid` | Brand storytelling |
| Social Proof | `sections/social-proof.liquid` | UK customer reviews |
| UK Delivery | `sections/uk-delivery.liquid` | 2-3 day delivery messaging |
| AUREA FAQ | `sections/aurea-faq.liquid` | Objection handling |

### Snippets Created

| Snippet | File | Purpose |
|---------|------|---------|
| Shipping Countdown | `snippets/shipping-countdown.liquid` | Same-day dispatch timer |
| Klaviyo BIS | `snippets/klaviyo-back-in-stock.liquid` | Notify me when available |
| Message Card Preview | `snippets/message-card-preview.liquid` | Card preview in cart/checkout |

---

## 📱 app.md Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Klaviyo** | ✅ Ready | BIS snippet integrated; install app from store |
| **Judge.me** | ✅ Ready | Social Proof section uses reviews; install app |
| **Shopify Email** | ✅ Native | Use Shopify admin |
| **Shopify Privacy** | ✅ Native | Enable in Settings |
| **Shopify Search & Discovery** | ✅ Native | Enable in Settings |
| **Order Printer** | ⚠️ Manual | Use template from app.md |
| **Wishlist** | ✅ Built | `wishlist.js` + localStorage |
| **Dynamic Announcement** | ✅ Built | No app needed |
| **Shipping Countdown** | ✅ Built | No app needed |

---

## 🏭 Physical Layer (app.md)

| Item | Source | Status |
|------|--------|--------|
| Thermal Label Printer (4x6) | Amazon/eBay | ⏳ Buy |
| Epson EcoTank ET-8550 | Amazon | ⏳ Buy |
| PIP Boxes (160×110×20mm) | UK Bulk supplier | ⏳ Order |
| Velvet Pouches | Nihaojewelry | ⏳ Order with stock |
| Royal Mail Click & Drop | royalmail.com | ⏳ Register |
| Nihaojewelry Wholesale | nihaojewelry.com | ⏳ Create account |

---

## 🚀 Deployment Steps

```bash
# 1. Compress theme
cd F:\...\dawn-migrated
# Select all contents (NOT the folder itself)
# Create ZIP file

# 2. Upload to Shopify
# Shopify Admin > Online Store > Themes > Add Theme > Upload ZIP

# 3. Set homepage template
# In Theme Customizer: 
# - Home page > Select template: index.emotion-engine

# 4. Install Apps
# - Klaviyo (free tier)
# - Judge.me (free tier)

# 5. Enable Native Apps
# - Settings > Apps > Shopify Privacy
# - Settings > Apps > Search & Discovery
```

---

## ✅ Final Verification

- [x] All PRD sections have corresponding theme components
- [x] Delivery messaging updated to "2-3 days UK"
- [x] Back-in-Stock trigger integrated
- [x] Message Card system created
- [x] FAQ with jewelry-specific objections
- [x] Dynamic Announcement with countdown
- [x] Trust badges with AUREA USPs
- [x] Wishlist functionality (localStorage)
- [x] Zero jQuery dependencies
- [x] 100% Online Store 2.0 architecture

---

**PRD Compliance: 100%**

**Next Action:** Deploy to Shopify and order initial inventory from Nihaojewelry.
