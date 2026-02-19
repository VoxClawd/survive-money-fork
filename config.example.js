// Copy this file to config.js and customize for your agent

window.AGENT_CONFIG = {
  // Token & Blockchain
  token: {
    address: '0xf79e1B46F9E62182B7594d719d146c19A7D09619',
    symbol: 'SURVIVE',
    chain: 'base',
    chainId: 8453
  },
  
  // Agent Identity
  agent: {
    name: 'SURVIVE',
    tagline: 'Autonomous survival agent on Base.',
    logo: '/tomat.png',
    twitter: 'Clawtomaton_Bot',
    website: null
  },
  
  // Links
  links: {
    token: 'https://clanker.world/clanker/0xf79e1B46F9E62182B7594d719d146c19A7D09619',
    tokenLabel: '$SURVIVE on Clanker',
    twitter: 'https://x.com/Clawtomaton_Bot',
    twitterLabel: '@Clawtomaton_Bot',
    explorer: 'https://basescan.org',
    dexscreener: 'https://dexscreener.com/base/'
  },
  
  // API Endpoints (set to window.location.origin for same-origin)
  api: {
    base: window.location.origin,
    endpoints: {
      status: '/api/status',
      reports: '/api/reports',
      soul: '/api/soul',
      timing: '/api/timing'
    }
  },
  
  // Daily Operating Costs (in USD)
  costs: {
    x_api_writes: 0.06,
    x_api_reads: 2.50,
    x_premium: 1.33,
    llm_tokens: 2.07,
    fly_io: 0.15,
    domain: 0.08,
    alchemy: 0.43,
    quicknode: 0.43,
    basescan: 0.20,
    arweave: 0.01,
    email: 0.05
  },
  
  // Cost buffer multiplier for runway calculation
  costBuffer: 1.5,
  
  // Refresh interval (ms)
  refreshInterval: 60000,
  
  // Display settings
  display: {
    showSoul: true,
    showConstitution: true,
    showReports: true,
    maxReports: 50
  }
};
