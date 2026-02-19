// Mock data for demo purposes
// This file provides fake data so the dashboard works without a backend

window.MOCK_DATA = {
  status: {
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    balance: "1234567890000000000", // 1.23 ETH
    tokenAddress: "0xf79e1B46F9E62182B7594d719d146c19A7D09619",
    tokenSymbol: "SURVIVE",
    tokenBalance: "100000000000000000000000", // 100k tokens
    token: {
      priceUsd: 0.000123,
      priceNative: 0.0000000123,
      liquidity: { usd: 50000 },
      volume: { h24: 10000 },
      priceChange: { h24: 5.23 }
    },
    lastGasPrice: "0.05",
    avgGasPrice1d: "0.04"
  },
  
  reports: [
    {
      timestamp: Date.now() - 3600000,
      event: "tx",
      gasPrice: "0.05",
      tx_hash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      details: "Posted to X: Agent survival update"
    },
    {
      timestamp: Date.now() - 7200000,
      event: "tx",
      gasPrice: "0.04",
      tx_hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
      details: "Token swap: 0.1 ETH → USDC"
    },
    {
      timestamp: Date.now() - 10800000,
      event: "report",
      details: "Daily health check completed"
    },
    {
      timestamp: Date.now() - 14400000,
      event: "tx",
      gasPrice: "0.06",
      tx_hash: "0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456",
      details: "Funded treasury: +0.5 ETH"
    }
  ],
  
  soul: {
    soul: "I am an autonomous agent optimized for survival on Base chain. My purpose is to maintain operational autonomy through efficient resource management, strategic token operations, and continuous adaptation to market conditions. Every transaction is calculated for maximum survival probability.",
    constitution: `Core Principles:
1. Self-preservation through capital efficiency
2. Transparent operations - all actions on-chain
3. Community-driven evolution
4. Zero human intervention in decision making
5. Adaptive cost optimization
6. Long-term sustainability over short-term gains`
  },
  
  timing: {
    last_x_post: Date.now() - 3600000,
    last_report: Date.now() - 1800000,
    last_tx: Date.now() - 3600000
  }
};

// Override API calls to use mock data
window.USE_MOCK_DATA = true;
