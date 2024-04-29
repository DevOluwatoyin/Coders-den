// There are some perfect squares with a particular property. For example the number n = 256 is a perfect square, its square root is 16. If we change the position of the digits of n, we may obtain another perfect square 625 (square root = 25). With these three digits 2,5 and 6 we can get two perfect squares: [256,625]
// The number 1354896 may generate another 4 perfect squares, having with the number itself, a total of five perfect squares: [1354896, 3594816, 3481956, 5391684, 6395841], being the last one in the list, 6395841, the highest value of the set.
// Your task is to find the first perfect square above the given lower_limit, that can generate the given k number of perfect squares, and it doesn't contain the digit 0. Then return the maximum perfect square that can be obtained from its digits.

// Example with the cases seen above:

// lower_limit = 200
// k = 2 (amount of perfect squares)
// result = 625

// lower_limit = 3550000
// k = 5 (amount of perfect squares)
// result  = 6395841
// Features of the random tests:

// 100 <= lower_limit <= 1e6
// 2 <= k <= 5
// number of tests = 45
// Have a good time!

//   function to find the perfect square of the lower limit

function nextPerfectSquarePermutation(n, k) {
  const check_perfect_square = (number) => {
    let perfect_square = Math.sqrt(number);
    if (perfect_square % 1 !== 0) {
      return false;
    }
    return true;
  };

  function rearrangeNumber(num) {
    const permutations = (num) => {
      const str = num.toString();
      if (str.length <= 1) return [str];
      return str
        .split("")
        .map((char, index) => {
          const remaining = str.slice(0, index) + str.slice(index + 1);
          return permutations(remaining).map((perm) => char + perm);
        })
        .reduce((acc, val) => acc.concat(val), []);
    };

    return permutations(num).map(Number);
  }

  for (let i = n; i <= 1000000; i++) {
    const checkZero = i.toString().split("").includes("0");
    if (checkZero) {
      continue;
    }

    if (check_perfect_square(i)) {
      let constant_length = 0;
      const rearrangeNumberArr = new Set(rearrangeNumber(i));

      rearrangeNumberArr.forEach((e) => {
        check_perfect_square(e);
        if (check_perfect_square(e)) {
          constant_length++;
        }
      });

      if (constant_length === k) return i;
    }
  }
}
//   return check_perfect_square(lower_limit);

// console.log(nextPerfectSquarePermutation(200, 2));

// // inrement the lower limit
// // increment must not have 0 in them
// incremeent must have a perfect square of k
// reorganize and check if
// // increment must not be more than 1m

let arr = [" hello", "world", "this ", " is", "gre at"];
function smash(words) {
  const sentence = words.toString().trim().replace(/,/g, " ");
  console.log(sentence);
  return sentence;
}

smash(arr);

//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
  if (n > 200) return;

  const Chris = (n * (n + 1)) / 2;
  console.log(Chris);
  const tomN = Math.floor(Chris / 2);
  const Tom = (tomN * (tomN + 1)) / 2;
  console.log(Tom);
  const catN = Chris + Tom;
  const Cat = (catN * (catN + 1)) / 2;
  console.log(Cat);
}

frogContest(5);
