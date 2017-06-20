// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).
const compressString = (str) => {
  let count = 1;
  let prev = str[0];
  let compressed = [];

  for (let i = 1; i <= str.length; i++) {
    // if the character is the same as the last, increment the counter
    if (str[i] === prev) count++;
    // if the character isn't the same as the last...
    else {
      // push previous value and count to compressed string
      compressed.push(`${prev}${count}`);
      // reset count
      count = 1;
    }
    prev = str[i];
  }
  return compressed.join('');
};

console.log(compressString('aabcccccaaa'));
console.log(compressString('ddccbbaaqq'));
console.log(compressString('AaaAaaBbbBbbCccDddeEFFFe'));