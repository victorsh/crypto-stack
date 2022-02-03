# Dapps Build

This project is meant to combine several projects into one and be a reference source for future projects.
There is also a docs folder containing notes and sources pertaining to each technology.

### **Client**
Node JS | Webpack 5 | React | Redux | React-Router | Material-UI | Sass 
---

### **Blockchain**
- Reach[Ethereum, Algorand, Conflux]
- Algo: Algo Builder, Reach, PyTeal
- Solana: Solidity _> Rust
- Solidity: web3, ethers, block explorer api, hardhat
npx hardhat run scripts/sample-script.js --network localhost

### **Backend**
- Calculator: Contains functions used to calculate technical indicators.
- Collector: Contains functions to automate pulling timeseries data from exchanges.
- Commons: Contains utility functions, custom price calculators, interfacing funtionality for centralized exchanges and blockchain explorers.
- Tinker-Bot: Combines the functionality from the previous three folders to serve content through http and ws requests.

### **Database**
https://github.com/orbitdb/orbit-db#benchmark

## Sources
- Asynchroneos Use Context/Use Reducer: https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch
- regenerator babel runtime error: https://github.com/babel/babel/issues/8829#issuecomment-481210475
- useEffect, run only once: https://css-tricks.com/run-useeffect-only-once/
- react-redux: https://www.johnraptis.dev/using-redux-with-classes-and-hooks/
- redux-outside-react: https://daveceddia.com/access-redux-store-outside-react/
- Color Schemes: https://visme.co/blog/website-color-schemes/
- Client Side Routing `Can't GET /whatever`: https://ui.dev/react-router-cannot-get-url-refresh/



