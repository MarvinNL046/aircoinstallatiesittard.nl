# GoHighLevel Webhook Integration Guide

## 🚀 Overzicht

Deze webapp heeft een dual-submission systeem geïmplementeerd voor formulierinzendingen:
1. **Primair**: GoHighLevel (GHL) webhook voor directe lead capture
2. **Backup**: EmailJS voor e-mail notificaties

Dit zorgt voor 99% betrouwbaarheid - als één systeem faalt, werkt het andere nog steeds.

## 📋 Setup Instructies

### 1. GoHighLevel Webhook Setup

1. Log in op je GHL account
2. Ga naar **Automations** → **Workflows**
3. Maak een nieuwe workflow met **Webhook** trigger
4. Kopieer de webhook URL (formaat: `https://services.leadconnectorhq.com/hooks/[ID]/webhook-trigger/[TRIGGER-ID]`)
5. Stel de gewenste acties in (create contact, send notifications, etc.)

### 2. Environment Variabelen

Voeg de volgende variabele toe in Netlify:

```bash
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_TRIGGER_ID
```

**In Netlify:**
1. Ga naar Site settings → Environment variables
2. Voeg de `NEXT_PUBLIC_GHL_WEBHOOK_URL` variabele toe
3. Deploy opnieuw om de wijzigingen door te voeren

### 3. Webhook Data Structuur

De webhook ontvangt data in dit formaat:

```json
{
  "data": {
    "name": "Naam",
    "email": "email@example.com",
    "phone": "0612345678",
    "city": "Stad of Postcode",
    "message": "Bericht"
  }
}
```

## 🧪 Testen

1. Ga naar `/contact-test` op je website
2. Vul het formulier in en verstuur
3. Controleer:
   - GHL dashboard voor nieuwe lead
   - EmailJS voor backup e-mail
   - Browser console voor debug info (als DEBUG_MODE = true)

## 📊 Formulier Types

De volgende formulier types worden getracked:
- `contact_form` - Algemeen contact formulier
- `hero_quote_form` - Hero sectie offerte formulier  
- `city_contact_form` - Stad-specifiek contact formulier

## 🔍 Debug Mode

Voor troubleshooting, zet `DEBUG_MODE = true` in `/lib/emailjs.ts`:

```typescript
// Debug mode (set to false in production)
const DEBUG_MODE = true;
```

Dit toont gedetailleerde logs in de browser console.

## ⚠️ Belangrijk

- **ALTIJD** `npm run build` uitvoeren na wijzigingen
- Test eerst op `/contact-test` voordat je live gaat
- Zet `DEBUG_MODE = false` in productie
- Controleer of de GHL workflow actief is

## 🛠️ Troubleshooting

### Webhook ontvangt geen data
- Controleer webhook URL formaat
- Verifieer dat GHL workflow actief is
- Check browser console voor errors

### EmailJS fallback werkt niet
- Controleer EmailJS environment variabelen
- Verifieer EmailJS service/template IDs

### CORS errors
- Netlify configuratie is al aangepast voor GHL
- Clear browser cache en probeer opnieuw

## 📈 Monitoring

Track success rates via:
- GHL workflow analytics
- Google Analytics events (form_submission)
- Facebook Pixel events (Lead)

Voor vragen of problemen, check eerst de browser console logs!