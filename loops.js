function forLoop(arr) {
  const item = new Array();
  for (let i = 0; i < 26; i++) {
    if (i === 1) {
      item.push("I am 1 strange loop.");
    } else {
      item.push(`I am ${i} strange loops.`);
    }
  }
  return item;
}
