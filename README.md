# Lasoma SMAN 5 TUBAN

Website resmi OSIS SMAN 5 TUBAN Kabinet Lasoma 2025/2026.

## 🎯 Fitur

- 📊 **Vercel Web Analytics** - Analytics real-time yang privacy-friendly
- 🎨 Desain modern dan responsif
- 📱 Mobile-friendly
- ⚡ Performance optimal

## 📊 Vercel Web Analytics

Website ini dilengkapi dengan Vercel Web Analytics untuk melacak:
- Page views otomatis
- Custom events (button clicks, form submissions, dll)
- User engagement metrics

### Setup Analytics

Analytics sudah terkonfigurasi dan akan aktif setelah deployment ke Vercel:

1. **Analytics Script**: Script analytics dimuat otomatis dari `/_vercel/insights/script.js`
2. **Custom Events**: File `analytics.js` menyediakan helper functions untuk tracking event khusus
3. **Auto-tracking**: Button clicks secara otomatis di-track untuk analisis engagement

### Custom Event Tracking

Untuk melacak custom events di aplikasi Anda:

```javascript
// Track custom event
trackEvent('event_name', { 
  property1: 'value1',
  property2: 'value2'
});

// Track custom page view
trackPageView('/custom-path');
```

Fungsi-fungsi ini tersedia secara global setelah `analytics.js` dimuat.

## 🚀 Deployment

Deploy ke Vercel:

```bash
npm run deploy
```

Atau manual:

```bash
vercel deploy
```

## 📦 Dependencies

- `@vercel/analytics` - Vercel Web Analytics package untuk custom event tracking

## 🔧 Development

1. Clone repository ini
2. Install dependencies: `npm install`
3. Buka `index.html` di browser atau gunakan live server
4. Edit files sesuai kebutuhan

## 📝 License

© 2025 OSIS SMAN 5 TUBAN - Kabinet Lasoma
