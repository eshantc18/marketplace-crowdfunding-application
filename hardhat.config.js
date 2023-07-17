/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    networks: {
      hardhat: {
        url: 'http://127.0.0.1:8545/',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
