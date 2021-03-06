// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
  // The Math.random() function returns a floating - point, pseudo - random number in the range 0 to less than 1(inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
  // getNumber() function returns afloating - point, pseudo - random number in the range 0 to less than 10(inclusive of 0, but not 10).
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
  // The concat() method is used to join two or more strings.This method does not change the existing strings, but returns a new string containing the text of the joined strings.
  // the output of s will be `${w1}${w2}`, eg. if w1=a and w2=b then s will be "ab" it would be enough to write for eg: console.log(s(a,b)) then we will recieve ab.
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future") === "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza") === "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13) === "I am 13"
);
