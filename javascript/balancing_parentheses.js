function balancingParentheses(string) {
  // type your code here
  let left = 0;
  let right = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      ++left;
    } else {
      ++right;
    }
  }
    return Math.abs(left - right);
  }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
