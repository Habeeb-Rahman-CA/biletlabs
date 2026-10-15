# Product Images Directory

This directory is reserved for your actual product preview screenshots and mockups.

## Recommended Specifications
- **Format**: PNG, WebP, or JPG
- **Aspect Ratio**: 16:10 (e.g., 1200 × 750 px or 1600 × 1000 px) for desktop tools; standard screenshots for mobile apps.
- **Background**: Neutral or transparent if framed.

## Suggested File Names
- **Bilet**:
  - `bilet-hero.png` (Main card preview)
  - `bilet-editor.png`
  - `bilet-vault.png`
  - `bilet-typography.png`
  - `bilet-history.png`
- **Bilet-X**:
  - `bilet-x-hero.png` (Main card preview)
  - `bilet-x-dock.png`
  - `bilet-x-notes.png`
  - `bilet-x-clipboard.png`
  - `bilet-x-timer.png`
- **Bilo**:
  - `bilo-hero.png` (Main card preview)
  - `bilo-today.png`
  - `bilo-backlog.png`
  - `bilo-kanban.png`
  - `bilo-calendar.png`
- **LiftUp**:
  - `liftup-hero.png` (Main card preview)
  - `liftup-session.png`
  - `liftup-nutrition.png`
  - `liftup-split.png`
  - `liftup-analytics.png`
- **Rūpa**:
  - `rupa-hero.png` (Main card preview)
  - `rupa-ledger.png`
  - `rupa-debts.png`
  - `rupa-splits.png`
  - `rupa-cards.png`

## How to Display an Image
Simply open `js/products-data.js` and set the `image` field to your image path. For example:
```javascript
// In js/products-data.js
{
  id: "bilet",
  name: "Bilet",
  // ...
  image: "assets/images/products/bilet-hero.png",
  // ...
}
```
The website layout will automatically render the image with smooth rounded corners, subtle hover scaling, and zero layout shift.
