function stringChop(str, size) {
  // your code here
	if (!str) {
    return [];
  }

  const chunks = [];
  const length = str.length;

  // Loop through the string in steps of size
  for (let i = 0; i < length; i += size) {
    // Slice the string from current index to size characters ahead
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
