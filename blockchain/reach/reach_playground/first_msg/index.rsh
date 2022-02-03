'reach 0.1';
'use strict';

export const main = Reach.App(
  { deployMode: 'firstMsg' },
  [
    Participant('Deployer', { amt: UInt, getRelay: Fun([], Address) }),
    Participant('Relay', { getBob: Fun([], Address) })
  ],
  (Deployer, Relay) => {
    Deployer.only(() => {
      const [ amt, relay ] = declassify([ interact.amt, interact.getRelay() ]);
    });
    Deployer.publish(amt, relay).pay(amt);
    Relay.set(relay);
    commit();

    Relay.only(() => {
      const bob = declassify(interact.getBob());
    });
    Relay.publish(bob);
    transfer(amt).to(bob);
    commit();

    exit();
  }
)