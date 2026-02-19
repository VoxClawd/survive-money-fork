// Wrapper pour utiliser les mock data au lieu des appels API
(function() {
  if (!window.MOCK_DATA || !window.USE_MOCK_DATA) return;
  
  // Sauvegarder le fetch original
  const originalFetch = window.fetch;
  
  // Wrapper pour intercepter les appels fetch
  window.fetch = function(url, options) {
    const urlStr = typeof url === 'string' ? url : url.toString();
    
    // CoinGecko - laisser passer
    if (urlStr.includes('coingecko')) {
      return originalFetch(url, options);
    }
    
    // Intercepter les appels API locaux
    if (urlStr.includes('/api/status')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          survival: {
            ethBalance: window.MOCK_DATA.status.balance,
            wethBalance: "0",
            unclaimedFees: "0",
            totalFeesClaimed: "0"
          },
          agent: {
            address: window.MOCK_DATA.status.address,
            tokenAddress: window.MOCK_DATA.status.tokenAddress,
            tokenSymbol: window.MOCK_DATA.status.tokenSymbol,
            tokenBalance: window.MOCK_DATA.status.tokenBalance
          },
          token: window.MOCK_DATA.status.token,
          latestReport: {
            gasPrice: window.MOCK_DATA.status.lastGasPrice,
            avgGasPrice1d: window.MOCK_DATA.status.avgGasPrice1d
          },
          timing: window.MOCK_DATA.timing
        })
      });
    }
    
    if (urlStr.includes('/api/reports')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          reports: window.MOCK_DATA.reports
        })
      });
    }
    
    if (urlStr.includes('/api/soul')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(window.MOCK_DATA.soul)
      });
    }
    
    if (urlStr.includes('/api/audit') || urlStr.includes('/api/benefactors')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      });
    }
    
    // Fallback - appel réel
    return originalFetch(url, options);
  };
  
  console.log('🎭 Mock data wrapper active');
})();
