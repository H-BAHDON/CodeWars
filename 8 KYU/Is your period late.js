/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.



*/


// ----------------------------------------------------------------

function periodIsLate(last, today, cycleLength) {
    //  the number of days passed from last to today
       let compareTime = today.getTime() - last.getTime();
       let compareDay = compareTime / (1000 * 3600 * 24)
      
      if( compareDay > cycleLength){
        return true
      }else {
        return false
      }
    
      
    }


    ///----------------------testing unit---------------------------
    const { assert } = require('chai');

describe("Sample Test", () => {
  it("It is not late", () => {
    assert.isFalse(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
  });
  it("It is late", () => {
    assert.isTrue(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
  });
});
