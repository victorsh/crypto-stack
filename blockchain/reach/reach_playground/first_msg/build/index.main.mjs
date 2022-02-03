// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Deployer(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  
  
  
  const v18 = stdlib.protect(ctc0, interact.amt, 'for Deployer\'s interact field amt');
  
  const v22 = stdlib.protect(ctc1, await interact.getRelay(), {
    at: './index.rsh:12:74:application',
    fs: ['at ./index.rsh:11:18:application call to [unknown function] (defined at: ./index.rsh:11:22:function exp)'],
    msg: 'getRelay',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv(1, 2, false, [ctc0, ctc1], [v18, v22], [v18, []], [ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:14:14:dot', stdlib.UInt_max, 0)]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:14:14:dot', stdlib.UInt_max, 0)]);
    const [v24, v25] = txn1.data;
    const v28 = txn1.time;
    const v23 = txn1.from;
    
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    const v29 = v25;
    sim_r.nextSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:16:13:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v28, v29]);
    sim_r.nextSt_noTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:16:13:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v29]);
    sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:16:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24, v25] = txn1.data;
  const v28 = txn1.time;
  const v23 = txn1.from;
  ;
  const v29 = v25;
  const txn2 = await (ctc.recv(2, 1, [ctc1], false, false));
  const [v35] = txn2.data;
  const v38 = txn2.time;
  const v34 = txn2.from;
  ;
  const v37 = stdlib.addressEq(v29, v34);
  stdlib.assert(v37, {
    at: './index.rsh:21:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  ;
  return;
  
  
  };
export async function Relay(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  
  
  
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v24, v25] = txn1.data;
  const v28 = txn1.time;
  const v23 = txn1.from;
  ;
  const v29 = ctc.iam(v25);
  const v33 = stdlib.protect(ctc1, await interact.getBob(), {
    at: './index.rsh:19:45:application',
    fs: ['at ./index.rsh:18:15:application call to [unknown function] (defined at: ./index.rsh:18:19:function exp)'],
    msg: 'getBob',
    who: 'Relay'
    });
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:21:11:dot', stdlib.UInt_max, 1), [ctc0, ctc0, ctc1, ctc1], [v24, v28, v29, v33], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:21:11:dot', stdlib.UInt_max, 1), v24, v28, v29]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:21:11:dot', stdlib.UInt_max, 1), v24, v29]);
    const [v35] = txn2.data;
    const v38 = txn2.time;
    const v34 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v37 = stdlib.addressEq(v29, v34);
    stdlib.assert(v37, {
      at: './index.rsh:21:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Relay'
      });
    sim_r.txns.push({
      amt: v24,
      kind: 'from',
      to: v35,
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc2, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc2, []);
    sim_r.view = [ctc2, []];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v35] = txn2.data;
  const v38 = txn2.time;
  const v34 = txn2.from;
  ;
  const v37 = stdlib.addressEq(v29, v34);
  stdlib.assert(v37, {
    at: './index.rsh:21:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Relay'
    });
  ;
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 286
    }, {
    count: 9,
    size: 318
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:14:14:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 254
store 253
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
load 255
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 253
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:21:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:21:11:dot"
// "[]"
load 254
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161044038038061044083398101604081905261002291610143565b604080516020810190915260008152602082015151341461004257600080fd5b60208083015101516001600160a01b031681526040517f812d89bbecdb831b7c696e0f6d1d65802064f5369bdf51a69f331289b592a875906100aa908490815115158152602091820151805183830152909101516001600160a01b0316604082015260600190565b60405180910390a16100df6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b6020928301515181524381840190815291516001600160a01b03908116604080840191825280516001818801529351848201529351606084015251166080808301919091528251808303909101815260a09091019091528051910120600055610202565b60008183036060811215610155578182fd5b61015f60406101c4565b8351801515811461016e578384fd5b81526040601f1983011215610181578283fd5b61018b60406101c4565b6020850151815260408501519092506001600160a01b03811681146101ae578384fd5b6020838101919091528101919091529392505050565b604051601f8201601f191681016001600160401b03811182821017156101fa57634e487b7160e01b600052604160045260246000fd5b604052919050565b61022f806102116000396000f3fe6080604052600436106100225760003560e01c8063475e2b241461002e57610029565b3661002957005b600080fd5b61004161003c366004610174565b610043565b005b6040516100579060019083906020016101e5565b6040516020818303038152906040528051906020012060001c6000541461007d57600080fd5b60008055341561008c57600080fd5b3361009d6060830160408401610153565b6001600160a01b0316146100b057600080fd5b6100c06080820160608301610153565b6040516001600160a01b039190911690823580156108fc02916000818181858888f193505050501580156100f8573d6000803e3d6000fd5b507f1a8c2ccf7a7f36941eb8090e25661a05e3c91619fa6be74fd2a82990c22cd4928160405161012891906101b7565b60405180910390a16000805533ff5b80356001600160a01b038116811461014e57600080fd5b919050565b600060208284031215610164578081fd5b61016d82610137565b9392505050565b600060808284031215610185578081fd5b50919050565b80358252602080820135908301526001600160a01b036101ad60408301610137565b1660408301525050565b608081016101c5828461018b565b6001600160a01b036101d960608501610137565b16606083015292915050565b8281526080810161016d602083018461018b56fea264697066735822122098e62211da12a2474b7ffd185a2ee8c7aefe3b34a12adf0aea2c4f3d5ae13a4664736f6c63430008020033`,
  BytecodeLen: 1088,
  Which: `oD`,
  deployMode: `DM_firstMsg`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

