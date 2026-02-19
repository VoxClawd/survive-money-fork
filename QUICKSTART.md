# Quick Start Guide

## 🚀 Local Development

1. **Clone and navigate:**
   ```bash
   cd ~/clawd/projects/survive-money-fork
   ```

2. **Run local server:**
   ```bash
   ./serve.sh
   # or
   python3 -m http.server 8000
   ```

3. **Open browser:**
   ```
   http://localhost:8000
   ```

⚠️ **Note:** The dashboard will try to fetch data from the API. Without a backend, you'll see loading states.

## 🎨 Customization

1. **Copy config template:**
   ```bash
   cp config.example.js config.js
   ```

2. **Edit config.js:**
   ```javascript
   window.AGENT_CONFIG = {
     token: {
       address: '0xYOUR_TOKEN_ADDRESS',
       symbol: 'YOUR_SYMBOL'
     },
     agent: {
       name: 'YOUR_AGENT_NAME',
       tagline: 'Your tagline here'
     }
     // ... customize other fields
   };
   ```

3. **Replace logo:**
   ```bash
   cp your-logo.png tomat.png
   ```

4. **Edit index.html** if you need deeper changes

## 🌐 Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Project name: `survive-money-fork`
   - Link to existing project? No
   - Deploy? Yes

4. **Set up backend API** (required for data):
   - Deploy your backend separately
   - Update API endpoint in config.js
   - Redeploy: `vercel --prod`

## 🔌 Backend Requirements

You need to implement these API endpoints:

### Required Endpoints:

1. **GET /api/status** - Agent status, balances, token data
2. **GET /api/reports** - Transaction history
3. **GET /api/soul** - Agent personality/constitution
4. **GET /api/timing** - Last activity timestamps

See README.md for detailed API specs.

## 🛠️ Backend Implementation Ideas

**Option 1: Express.js**
```javascript
const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
  // Fetch from blockchain, return status
  res.json({ address: '0x...', balance: '...' });
});

app.listen(3000);
```

**Option 2: Next.js API Routes**
```typescript
// pages/api/status.ts
export default async function handler(req, res) {
  const status = await fetchAgentStatus();
  res.json(status);
}
```

**Option 3: Cloudflare Workers**
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/api/status') {
    return new Response(JSON.stringify(status));
  }
}
```

## 📦 Blockchain Integration

Use Web3 libraries to fetch on-chain data:

```javascript
// Example with ethers.js
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');

async function getAgentBalance(address) {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
}
```

## 🎯 Complete Deployment Checklist

- [ ] Customize config.js
- [ ] Replace logo (tomat.png)
- [ ] Update agent name/tagline in index.html
- [ ] Implement backend API
- [ ] Deploy backend (Railway, Fly.io, Vercel, etc.)
- [ ] Update API endpoint in config
- [ ] Deploy frontend (Vercel, Netlify, etc.)
- [ ] Test all endpoints
- [ ] Connect to real blockchain data
- [ ] Set up monitoring/alerts

## 🐛 Troubleshooting

**"Loading..." stuck:**
- Check browser console for API errors
- Verify backend is running
- Check CORS settings on backend

**Token price not showing:**
- Verify token exists on DEXScreener
- Check token address is correct
- Ensure token has liquidity

**Transactions not appearing:**
- Verify /api/reports endpoint
- Check transaction format matches expected schema

## 📚 Resources

- Base RPC: https://mainnet.base.org
- BaseScan API: https://docs.basescan.org/
- DEXScreener API: https://docs.dexscreener.com/
- Ethers.js: https://docs.ethers.org/
- Viem (alternative): https://viem.sh/

## 💡 Next Steps

1. **Add features:**
   - Real-time WebSocket updates
   - Transaction notifications
   - Performance charts
   - Historical data graphs

2. **Improve UX:**
   - Dark/light mode toggle
   - Mobile optimization
   - Loading skeletons
   - Error boundaries

3. **Add analytics:**
   - Plausible/Fathom
   - Track page views
   - Monitor API performance

4. **Security:**
   - Rate limiting on API
   - Input validation
   - Sanitize user data
   - HTTPS only

Good luck! 🚀
