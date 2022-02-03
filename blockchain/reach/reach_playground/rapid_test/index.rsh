'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const A = Participant('Alice', { ...hasConsoleLogger });
  deploy();

  const testUintArray = [1, 2, 3, 4, 5];
  const testBoolArray = [true, false, true, true];
  const T = 'Some string';
  // const M = new Map(T);

  testUintArray.map((el) => {
    A.interact.log('loopin')
  })

  A.interact.log(true);
  A.interact.log('oh hello there')
  A.interact.log(testUintArray);
  A.interact.log(testBoolArray);
  A.interact.log(T);

  exit();
})
