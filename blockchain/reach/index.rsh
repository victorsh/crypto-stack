/*
  1. Deployer deploys
  2. Get wager from Deployer
  3. Deployer pays wager and publishes wager for Attacher
  4. Attacher uses contract info to attach to contract
  5. Attacher accepts wager
  6. Participant A sets select and guess ships
  7. Participant B sets select and guess ships
  8. Participant A declassifies ships
  9. Participant B declassifies ships
  10. Calculate outcome
  11. If draw go to step 6
  12. Payout winner and end game
*/

'reach 0.1';

const GRID_SIZE = 18;
const DEADLINE = 10;
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (countA, countB) => countA > countB ? A_WINS : countA < countB ? B_WINS : DRAW
assert(winner(1, 0) == A_WINS);
assert(winner(0, 1) == B_WINS);
assert(winner(1, 1) == DRAW);

const player = {
  ...hasRandom,
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  setShips: Fun([], Array(UInt, GRID_SIZE)),
  getShips: Fun([Array(UInt, GRID_SIZE)], Null),
};
const deployer = {
  ...player,
  wager: UInt,
};
const attacher = {
  ...player,
  acceptWager: Fun([UInt], Null)
};

export const main = Reach.App(() => {
  const A = Participant('deployer', deployer);
  const B = Participant('attacher', attacher);
  deploy();

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout()
    });
  };

  A.only(() => {
    const wager = declassify(interact.wager);
  });
  A.publish(wager).pay(wager);
  commit();

  B.only(() => {
    interact.acceptWager(wager);
  });
  B.pay(wager).timeout(DEADLINE, () => closeTo(A, informTimeout));

  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome === DRAW) {
    commit();

    A.only(() => {
      const _shipsA = interact.setShips();
      const [_commitA, _saltA] = makeCommitment(interact, _shipsA);
      const commitA = declassify(_commitA);
    });
    A.publish(commitA).timeout(DEADLINE, () => closeTo(B, informTimeout));
    commit();
    unknowable(B, A(_shipsA, _saltA));

    B.only(() => {
      const _shipsB = interact.setShips();
      const [_commitB, _saltB] = makeCommitment(interact, _shipsB);
      const commitB = declassify(_commitB);
    });
    B.publish(commitB).timeout(DEADLINE, () => closeTo(A, informTimeout));
    commit();
    unknowable(A, B(_shipsB, _saltB));

    // DECLASSIFY
    // A decrypts and stores ships locations on contract public
    A.only(() => {
      const [saltA, shipsA] = declassify([_saltA, _shipsA]);
    });
    A.publish(saltA, shipsA);
    checkCommitment(commitA, saltA, shipsA);
    commit();
    // A decrypts and stores ships locations on contract public
    B.only(() => {
      const [saltB, shipsB] = declassify([_saltB, _shipsB]);
    });
    B.publish(saltB, shipsB);
    checkCommitment(commitB, saltB, shipsB);

    // A: [s,s,s, s,s,s, s,s,s, g,g,g, g,g,g, g,g,g]
    // B: [s,s,s, s,s,s, s,s,s, g,g,g, g,g,g, g,g,g]
    const countA_0 = ieq(shipsB[0], shipsA[9]) ? 1 : 0;
    const countB_0 = ieq(shipsA[0], shipsB[9]) ? 1 : 0;
    const countA_1 = ieq(shipsB[1], shipsA[10]) ? 1 : 0;
    const countB_1 = ieq(shipsA[1], shipsB[10]) ? 1 : 0;
    const countA_2 = ieq(shipsB[2], shipsA[11]) ? 1 : 0;
    const countB_2 = ieq(shipsA[2], shipsB[11]) ? 1 : 0;
    const countA_3 = ieq(shipsB[3], shipsA[12]) ? 1 : 0;
    const countB_3 = ieq(shipsA[3], shipsB[12]) ? 1 : 0;
    const countA_4 = ieq(shipsB[4], shipsA[13]) ? 1 : 0;
    const countB_4 = ieq(shipsA[4], shipsB[13]) ? 1 : 0;
    const countA_5 = ieq(shipsB[5], shipsA[14]) ? 1 : 0;
    const countB_5 = ieq(shipsA[5], shipsB[14]) ? 1 : 0;
    const countA_6 = ieq(shipsB[6], shipsA[15]) ? 1 : 0;
    const countB_6 = ieq(shipsA[6], shipsB[15]) ? 1 : 0;
    const countA_7 = ieq(shipsB[7], shipsA[16]) ? 1 : 0;
    const countB_7 = ieq(shipsA[7], shipsB[16]) ? 1 : 0;
    const countA_8 = ieq(shipsB[8], shipsA[17]) ? 1 : 0;
    const countB_8 = ieq(shipsA[8], shipsB[17]) ? 1 : 0;

    const countA = countA_0 + countA_1 + countA_2 + countA_3 + countA_4 + countA_5 + countA_6 + countA_7 + countA_8;
    const countB = countB_0 + countB_1 + countB_2 + countB_3 + countB_4 + countB_5 + countB_6 + countB_7 + countB_8;

    const outcome_hold = winner(countA, countB);

    A.only(() => {
      interact.getShips(shipsA)
    })
    B.only(() => {
      interact.getShips(shipsB)
    })

    each([A, B], () => {
      interact.seeOutcome(outcome_hold);
    });

    [ outcome ] = [ outcome_hold ];

    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? A : B);
  commit();

  exit();
});
