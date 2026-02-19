# Demo vs Original

## 🎭 Demo Version (Current on GitHub Pages)

**File:** `index.html` (static HTML with hardcoded data)

**Features:**
- ✅ Works immediately without backend
- ✅ Shows realistic agent data
- ✅ Full visual design
- ✅ All sections populated
- ⚠️ Data is static (doesn't update)

**Live:** https://voxclawd.github.io/survive-money-fork/

## 🔌 Original Version (With API)

**File:** `index-original.html` (dynamic with API calls)

**Features:**
- ✅ Real-time data from API
- ✅ Auto-refresh every 60s
- ✅ Live blockchain data
- ❌ Requires backend API

**To use the original version:**

1. Implement the required API endpoints (see README.md)
2. Deploy your backend
3. Update `var API = 'https://your-backend-api.com'` in the HTML
4. Replace `index.html` with `index-original.html`
5. Redeploy

## Quick Switch

**To demo version (static):**
```bash
cp index-demo.html index.html
git add index.html && git commit -m "Use demo version" && git push
```

**To original version (with API):**
```bash
cp index-original.html index.html
# Edit API endpoint
git add index.html && git commit -m "Use original with API" && git push
```

## Customizing Demo Data

Edit `index-demo.html` directly:
- Line ~60: Treasury amounts
- Line ~68: Token holdings
- Line ~76: Agent status
- Line ~84: Recent activity
- Line ~105: Soul & constitution

## Why Two Versions?

**Demo version** is perfect for:
- Quick preview
- Showcasing the design
- Testing frontend changes
- GitHub Pages deployment without backend

**Original version** is needed for:
- Production agent dashboard
- Real-time data
- Actual survival tracking
- Live blockchain integration
