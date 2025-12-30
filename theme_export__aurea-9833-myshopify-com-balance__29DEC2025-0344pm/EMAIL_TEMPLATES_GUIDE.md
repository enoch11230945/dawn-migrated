# AUREA Pre-order Email Templates Guide

This document contains ready-to-use email copy for your Shopify notification templates.

---

## 📧 How to Update Email Templates in Shopify

1. Go to **Settings** → **Notifications**
2. Click on **Order Confirmation**
3. Copy and paste the relevant sections below

---

## 1. Order Confirmation Email (Add to TOP of email body)

### English Version:
```html
{% if order.line_items.size > 0 %}
  {% assign has_preorder = false %}
  {% for line_item in order.line_items %}
    {% if line_item.variant.inventory_quantity <= 0 %}
      {% assign has_preorder = true %}
    {% endif %}
  {% endfor %}
  
  {% if has_preorder %}
  <div style="background: #FFF8E1; border: 1px solid #F5D0A9; border-radius: 8px; padding: 20px; margin-bottom: 20px; font-family: Georgia, serif;">
    <h3 style="color: #B8860B; margin: 0 0 10px 0; font-size: 16px;">⏳ Pre-order Notice</h3>
    <p style="color: #5C4A32; font-size: 14px; line-height: 1.6; margin: 0;">
      Thank you for your order! Please note that <strong>one or more items in your order are currently on pre-order</strong> due to high demand.
      <br><br>
      <strong>What happens next:</strong><br>
      ✓ We will notify you by email when your order is dispatched<br>
      ✓ You will receive tracking information at that time<br>
      ✓ Estimated dispatch: <strong>10-15 working days</strong>
      <br><br>
      <em>We promise it's worth the wait! Thank you for your patience. ✨</em>
    </p>
  </div>
  {% endif %}
{% endif %}
```

---

## 2. Shipping Confirmation Email Header

Add this at the TOP of your shipping confirmation email:

```html
<div style="background: #E8F5E9; border: 1px solid #C8E6C9; border-radius: 8px; padding: 20px; margin-bottom: 20px; font-family: Georgia, serif;">
  <h3 style="color: #2E7D32; margin: 0 0 10px 0; font-size: 16px;">🎉 Your Order Has Shipped!</h3>
  <p style="color: #333; font-size: 14px; line-height: 1.6; margin: 0;">
    Great news! Your order is on its way. Track your package using the link below.
    <br><br>
    🇬🇧 <strong>UK Shipping:</strong> Usually 2-3 working days via Royal Mail.
  </p>
</div>
```

---

## 3. Pre-order Specific Email (Manual - Send from Shopify)

When you want to notify pre-order customers that their item is about to ship:

**Subject:** Great news! Your pre-order is almost ready 🎉

**Body:**
```
Hi {{ customer.first_name }},

Thank you so much for your patience! 

We're excited to let you know that the items you pre-ordered have arrived at our UK warehouse and are being prepared for dispatch.

📦 Your order: #{{ order.name }}
📅 Estimated dispatch: [INSERT DATE]

You'll receive another email with tracking information once your order ships.

Thank you for supporting our small business! We can't wait for you to receive your beautiful jewellery. ✨

With love,
The AUREA London Team
```

---

## 4. Apology Email Template (If Delayed)

**Subject:** Update on your order #{{ order.name }} 

**Body:**
```
Hi {{ customer.first_name }},

We wanted to reach out personally regarding your recent order.

Due to unexpectedly high demand, there has been a slight delay in restocking your pre-order item(s). We sincerely apologise for any inconvenience.

🗓️ New estimated dispatch: [INSERT NEW DATE]

As a token of our appreciation for your patience, we'd like to offer you:
✨ 10% off your next order (Code: THANKYOU10)

If you'd prefer a full refund, please reply to this email and we'll process it immediately - no questions asked.

Thank you for understanding. We truly value you as a customer.

Warm regards,
The AUREA London Team
```

---

## 🔧 Quick Implementation Checklist

- [ ] Update Order Confirmation email with pre-order notice
- [ ] Update Shipping Confirmation email with success header
- [ ] Save Pre-order Ready template for manual use
- [ ] Save Apology template for delays (hopefully never needed!)

---

## 💡 Pro Tips

1. **Don't Over-Apologise** - Confident language like "due to high demand" is better than "sorry for the delay"
2. **Be Specific with Dates** - Always give a date, not just "soon"
3. **Offer Solutions** - Discount code or refund option shows you care
4. **Follow Up** - Send tracking info ASAP when order ships

---

*Last Updated: December 2025*
*For AUREA London Theme*
