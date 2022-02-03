# Battleship :ship:

Battleship written in Reach and React running on the Algorand Blockchain.

---

#### Running Locally
- `REACH_CONNECTOR_MODE=ALGO reach devnet`
- `cd client`
- `npm i`
- `npm run serve`
- Go to: `https://localhost:3000`
- Test on Algorand Testnet, set `/client/lib/globals.js` variable `NETWORK_STATE` to `testnet`

#### Other Commands
- Run reach built react client: `REACH_CONNECTOR_MODE=ALGO ./reach react`
- Run reach: `REACH_CONNECTOR_MODE=ALGO reach run`
- Run devnet through docker componse: `docker-compose run algorand-devnet`
- Remove containers after each run: `docker kill $(docker ps -q) && docker rm $(docker ps -qa)`
- Reach Docker Reset: `reach docker-reset`
- `./reach upgrade` -> `./reach docker-reset` -> `./reach update`

#### Test Accounts (Local)
Tacos
6MYPQHN4X2MPJ2PVYSQFLYOV556KRY3Y6TV6EQ5KO5AF273SIHTAZNTR5U
behave glance student unfair diary one deny time february strong cigar wagon huge cargo pause swing home clean gauge fabric team proof lawsuit absorb ignore

lime
O7SLFQJHY6EOC73YIMOPVWE4C3B2P2SQU5LTX2YPM7WU2CI5NX65HW6JRQ
maximum anchor bulk upon jar design fog sting weird boil guilt cook fabric mail van way pitch feel frost agree indicate major case able suspect

#### Sources
- A single participant example showcasing [array_groups](https://github.com/reach-sh/reach-lang/blob/8f41a2ae17220041ba365274dd32ae7c96b11f2e/hs/test-examples/features/array_groups.rsh)

#### Todo
- [] Simultaneous play with ParallelReduce?
- [] ESlint, Localization
- [] Persistent Contracts / Tokens
- [] Manage games by storing games in IPFS
- [] Allow users to get back to their last position after disconnect