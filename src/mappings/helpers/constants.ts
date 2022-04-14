import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export let ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export class AddressByNetwork {
  public mainnet: string;
  public kovan: string;
  public goerli: string;
  public rinkeby: string;
  public polygon: string;
  public arbitrum: string;
  public dev: string;
  public fantom: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  mainnet: '0x8951B163a2CFfa4A19d4285d5293203C0ca3dC54',
  kovan: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  goerli: '0x65748E8287Ce4B9E6D83EE853431958851550311',
  rinkeby: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  polygon: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  arbitrum: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  dev: '0xa0B05b20e511B1612E908dFCeE0E407E22B76028',
  fantom: '0x8951B163a2CFfa4A19d4285d5293203C0ca3dC54',
};

let wethAddressByNetwork: AddressByNetwork = {
  mainnet: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  kovan: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
  goerli: '0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd',
  rinkeby: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
  polygon: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  arbitrum: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  dev: '0x4CDDb3505Cf09ee0Fa0877061eB654839959B9cd',
  fantom: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
};

let wbtcAddressByNetwork: AddressByNetwork = {
  mainnet: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  kovan: '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  arbitrum: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  dev: '0xcD80986f08d776CE41698c47f705CDc99dDBfB0A',
  fantom: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
};

let usdAddressByNetwork: AddressByNetwork = {
  mainnet: '0x04068da6c83afcfa0e13ba15a6696662335d5b75', // USDC
  kovan: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  arbitrum: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  dev: '0x1528f3fcc26d13f7079325fb78d9442607781c8c',
  fantom: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
};

let usdcAddressByNetwork: AddressByNetwork = {
  mainnet: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
  kovan: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  arbitrum: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  dev: '0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2',
  fantom: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
};

let usdtAddressByNetwork: AddressByNetwork = {
  mainnet: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
  kovan: '0xcC08220af469192C53295fDd34CFb8DF29aa17AB',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  arbitrum: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  dev: '0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2',
  fantom: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
};

let balAddressByNetwork: AddressByNetwork = {
  mainnet: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  kovan: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
  arbitrum: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
  dev: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  fantom: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
};

let daiAddressByNetwork: AddressByNetwork = {
  mainnet: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', //FRAX
};

let fraxAddressByNetwork: AddressByNetwork = {
  mainnet: '0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0xdc301622e621166bd8e82f2ca0a26c13ad0be355', //FRAX
};


let mimAddressByNetwork: AddressByNetwork = {
  mainnet: '0x82f0b8b456c1a451378467398982d4834b6829c1',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0x82f0b8b456c1a451378467398982d4834b6829c1', //FRAX
};


let altDaiAddressByNetwork: AddressByNetwork = {
  mainnet: '0x0000000000000000000000000000000000000000',
  kovan: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x0000000000000000000000000000000000000000', //FRAX
};

let altUsdcAddressByNetwork: AddressByNetwork = {
  mainnet: '0x0000000000000000000000000000000000000000',
  kovan: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x0000000000000000000000000000000000000000',
};

let altUsdtAddressByNetwork: AddressByNetwork = {
  mainnet: '0x0000000000000000000000000000000000000000',
  kovan: '0x13512979ADE267AB5100878E2e0f485B568328a4',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x0000000000000000000000000000000000000000', //MIM
};

let linearDaiAddressByNetwork: AddressByNetwork = {
  mainnet: '0x0000000000000000000000000000000000000000',
  kovan: '0xfcccb77a946b6a3bd59d149f083b5bfbb8004d6d',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x0000000000000000000000000000000000000000', //FRAX
};

let linearUsdcAddressByNetwork: AddressByNetwork = {
  mainnet: '0xF9C737D5e9aA858039a254b593c1CbF91358B4fB',
  kovan: '0x0bbd32b14a6503ee20f87df38cf2d5d3b59ea2f5',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0xF9C737D5e9aA858039a254b593c1CbF91358B4fB',
};

let linearUsdtAddressByNetwork: AddressByNetwork = {
  mainnet: '0x3562af0A0BfeE4e7AbB9EB19d1E92cA9f60b8D9F',
  kovan: '0xe667d48618e71c2a02e4a1b66ed9def1426938b6',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x3562af0A0BfeE4e7AbB9EB19d1E92cA9f60b8D9F',
};

let linearFraxAddressByNetwork: AddressByNetwork = {
  mainnet: '0x26346BAA0619a5ed6b420B36b82b7Df6c37914fb',
  kovan: '0xfcccb77a946b6a3bd59d149f083b5bfbb8004d6d',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x26346BAA0619a5ed6b420B36b82b7Df6c37914fb', //FRAX
};

let linearMimAddressByNetwork: AddressByNetwork = {
  mainnet: '0x022B1eaf7493Bd54aD07942cACC3C74fF0E9a527',
  kovan: '0xfcccb77a946b6a3bd59d149f083b5bfbb8004d6d',
  goerli: '0x0000000000000000000000000000000000000000',
  rinkeby: '0x0000000000000000000000000000000000000000',
  polygon: '0x0000000000000000000000000000000000000000',
  arbitrum: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
  fantom: '0x022B1eaf7493Bd54aD07942cACC3C74fF0E9a527', //FRAX
};


function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  } else if (network == 'kovan') {
    return Address.fromString(addressByNetwork.kovan);
  } else if (network == 'goerli') {
    return Address.fromString(addressByNetwork.goerli);
  } else if (network == 'rinkeby') {
    return Address.fromString(addressByNetwork.rinkeby);
  } else if (network == 'matic') {
    return Address.fromString(addressByNetwork.polygon);
  } else if (network == 'arbitrum-one') {
    return Address.fromString(addressByNetwork.arbitrum);
  } else {
    return Address.fromString(addressByNetwork.fantom);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
export let WETH: Address = forNetwork(wethAddressByNetwork, network);
export let WBTC: Address = forNetwork(wbtcAddressByNetwork, network);
export let USD: Address = forNetwork(usdAddressByNetwork, network);
export let USDC: Address = forNetwork(usdcAddressByNetwork, network);
export let USDT: Address = forNetwork(usdtAddressByNetwork, network);
export let BAL: Address = forNetwork(balAddressByNetwork, network);
export let DAI: Address = forNetwork(daiAddressByNetwork, network);
export let FRAX: Address = forNetwork(fraxAddressByNetwork, network);
export let MIM: Address = forNetwork(mimAddressByNetwork, network);

let ALT_DAI = forNetwork(altDaiAddressByNetwork, network);
let ALT_USDC = forNetwork(altUsdcAddressByNetwork, network);
let ALT_USDT = forNetwork(altUsdtAddressByNetwork, network);
let LINEAR_DAI = forNetwork(linearDaiAddressByNetwork, network);
let LINEAR_USDC = forNetwork(linearUsdcAddressByNetwork, network);
let LINEAR_USDT = forNetwork(linearUsdtAddressByNetwork, network);
let LINEAR_FRAX = forNetwork(linearFraxAddressByNetwork, network);
let LINEAR_MIM = forNetwork(linearMimAddressByNetwork, network);

export let PRICING_ASSETS: Address[] = [
  WETH,
  WBTC,
  USDC,
  DAI,
  USDT,
  BAL,
  ALT_DAI,
  ALT_USDC,
  ALT_USDT,
  LINEAR_DAI,
  LINEAR_USDC,
  LINEAR_USDT,
  LINEAR_FRAX,
  LINEAR_MIM,
];
export let USD_STABLE_ASSETS: Address[] = [USDC, DAI, USDT, ALT_DAI, ALT_USDC, ALT_USDT];
