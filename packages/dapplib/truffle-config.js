require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stomach rice magic mistake include area slot general'; 
let testAccounts = [
"0x74b1e08e756c3d569cf52cc8e1ee6cc667277728ef440679e382583b0751070a",
"0x14b495d09f9a0b10f51ce5871d6c96b7fb28ee7a93a7462e9a689c57c9ca2f13",
"0x0b9528f9ee081c57121ccb94927f476fa104b9d774bca050cf2fb40abab1b6de",
"0x9c509e28d65e04f3a2e3570d4768b4bb97a799bdaff41884258498e8465e9536",
"0x9a281b06fd24a4c69b093fa4c0e5dffa729ed2774d2529a8fec4bd5a8d8f2d20",
"0xeb3dccd873381f5f01dae4252189d60f58dae636d707164465feea237853ae44",
"0x8b2e720d353f721341d359c63dd1d41673e8251be225c223da692a3eaa0b718f",
"0x5498901aee821f3195f182706439c9fcbcd1e1ab4c4ae98383d429c5c98b0065",
"0x2c26efe282d1912cc17133f68992929dbce214a95d697e1073157840d0890bca",
"0x0411c60f91805922359b5d09289b6aba6ca90680386b7e7db90aafa470dec8e3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


