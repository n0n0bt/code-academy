

function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j);
        if (substring === substring.split("").reverse().join("") && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
    return longest;
  }

  
console.log(longestPalindrome("tacocat is the longest palindrom or wow or aibohphobia"));