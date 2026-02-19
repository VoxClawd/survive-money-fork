# SURVIVE.money Fork

Fork of https://survive.money/ - An autonomous survival agent dashboard on Base.

## What is it?

A single-page dashboard that tracks an autonomous AI agent's survival metrics:
- Wallet balance & treasury
- Token holdings ($SURVIVE)
- Transaction history
- Runway calculation (how long the agent can survive on current funds)
- Operating costs breakdown
- Health status (Normal / Low Compute / Critical / Dead)

## Original Features

- Real-time data from API endpoint
- ETH & token balance tracking
- Gas cost analysis
- 1-day moving average gas prices
- DEXScreener integration for token price
- BaseScan transaction links
- Auto-refresh every 60s

## Files

- `index.html` - Main dashboard (self-contained HTML/CSS/JS)
- `tomat.png` - Logo/favicon
- `README.md` - This file

## Customization

To adapt this for your own agent:

1. **Update Token Address** (line ~218):
   ```javascript
   var SURVIVE_TOKEN = '0xYOUR_TOKEN_ADDRESS';
   ```

2. **Update API Endpoint** (line ~217):
   ```javascript
   var API = 'https://your-api-endpoint.com';
   ```

3. **Update Links**:
   - Clanker link (line ~252)
   - Twitter/X handle (line ~253)
   - Logo/branding

4. **Adjust Cost Breakdown** (line ~310):
   ```javascript
   var DAILY_COSTS_USD = {
     x_api_writes: 0.06,
     llm_tokens: 2.07,
     // ... customize your costs
   };
   ```

## API Requirements

The dashboard expects the following API endpoints:

### GET `/api/status`
Returns agent status, balances, and token data:
```json
{
  "address": "0x...",
  "balance": "1234567890000000000",
  "tokenAddress": "0x...",
  "tokenSymbol": "SURVIVE",
  "tokenBalance": "100000000000000000000",
  "token": {
    "priceUsd": 0.000123,
    "priceNative": 0.00000001,
    "liquidity": { "usd": 50000 },
    "volume": { "h24": 10000 }
  },
  "lastGasPrice": "0.05",
  "avgGasPrice1d": "0.04"
}
```

### GET `/api/reports`
Returns transaction/activity reports:
```json
[
  {
    "timestamp": 1708000000000,
    "event": "tx",
    "gasPrice": "0.05",
    "tx_hash": "0x...",
    "details": "Transaction details"
  }
]
```

### GET `/api/soul`
Returns agent personality/constitution:
```json
{
  "soul": "I am an autonomous agent focused on survival...",
  "constitution": "Core principles and rules..."
}
```

### GET `/api/timing`
Returns last activity timestamps:
```json
{
  "last_x_post": 1708000000000,
  "last_report": 1708000000000,
  "last_tx": 1708000000000
}
```

## Running Locally

```bash
# Serve with any static file server
python3 -m http.server 8000
# or
npx serve
# or
php -S localhost:8000
```

Then open http://localhost:8000

## Deployment

Deploy as a static site to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- JetBrains Mono font (Google Fonts)
- Responsive design
- Auto-refresh functionality
- DEXScreener API integration
- BaseScan blockchain explorer links

## License

Original: Unknown (cloned from survive.money)
Fork: MIT

## Credits

- Original: [@Clawtomaton_Bot](https://x.com/Clawtomaton_Bot)
- Powered by [Clawncher](https://clawn.ch/er)
- Deployed on Base
