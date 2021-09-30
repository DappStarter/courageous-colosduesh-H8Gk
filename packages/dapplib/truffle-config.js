require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant gloom kiwi bridge tree'; 
let testAccounts = [
"0x044df654497676b6210cef2dc5948b4dc4dd34eea76d558dd94ea65bbe898d72",
"0x98e6d482e57382e845eb89025217ad3a7b4eae33779448b3563acc1ff3064bdb",
"0xd01ac72a93995e9cf00cc3a898712c8de09f024812e3d206c6037354667b4c61",
"0xa0bbcddab2db3ab03d8af466b289350ec3108cdcf5b21cc5989a8b0af9f57721",
"0x9fcc1e4b768595a8e5c524b6cebcdcb51943b07325dcc59a8cb4b617ea041417",
"0xab4cba80110ef302d525adeb3bc38d3643de7125c3c9c720b82677a6a3c300f2",
"0xae62d7c8db64a4bc8f81414b960b67a48fc00c59521960eec6f407f05f19655f",
"0x7ba885a672bb0ef4d643af64ee3dbb41664747b782493da55b7d68daa4eb26fa",
"0x43beb2b1b5b368f3a61e516ccad23ab45ff6262e863dccb587a76e1a701c78bb",
"0x8a18b38ecfea19887474aca02802e67f689a047bc781617dc14174ae87f17619"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

