const globals = {
  DEBUG: true,
  eth_addr: '0x294096D9d3081c060eB644C2B3a004C1862615aF',
  deploy_addr: '43efab5f17ba375f1f7ca7335e7e8a980aa3d56e3ae5fdc9b66084dc77adde17',
  alchemy_http_polygon_mainnet: 'https://polygon-mainnet.g.alchemy.com/v2/YQoQ3Bp4iCXMWZM7fhEV2pUk2f25H1f3',
  alchemy_wss_polygon_mainnet: 'wss://polygon-mainnet.g.alchemy.com/v2/YQoQ3Bp4iCXMWZM7fhEV2pUk2f25H1f3',
  sleep: (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds)),
};

export default globals;
