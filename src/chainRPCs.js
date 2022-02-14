export const chainRpcs = {
    bsc: process.env.BSC_RPC || 'https://bsc-dataseed.binance.org/',
    bsct: ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://data-seed-prebsc-2-s1.binance.org:8545/', 'https://data-seed-prebsc-1-s2.binance.org:8545/', 'https://data-seed-prebsc-2-s2.binance.org:8545/', 'https://data-seed-prebsc-1-s3.binance.org:8545/', 'https://data-seed-prebsc-2-s3.binance.org:8545/'], 
    heco: process.env.HECO_RPC || 'https://http-mainnet.hecochain.com',
    avax: process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc',
    polygon: process.env.POLYGON_RPC || 'https://polygon-rpc.com',
    fantom: process.env.FANTOM_RPC || 'https://rpc.ftm.tools/',
    one: process.env.HARMONY_RPC || 'https://api.harmony.one/',
    arbitrum: process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
    celo: process.env.CELO_RPC || 'https://forno.celo.org',
    moonriver: process.env.MOONRIVER_RPC || 'https://rpc.moonriver.moonbeam.network',
    cronos: process.env.CRONOS_RPC || 'https://evm-cronos.crypto.org',
  };
  