function forLoop(arr) {
  const item = new Array();
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      item.push("I am 1 strange loop.");
    } else if (i === 0){
      console.log("List zero");
    } else {
      item.push(`I am parseInt(${1} + 1) strange loops.`);
    }
  }
  return item;
}
