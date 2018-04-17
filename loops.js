function forLoop(arr) {
  const item = new Array();
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      greeting = item.push('I am 1 strange loop.');
      item.push(greeting);
      break;
    } else {
      item = item.push(`I am ${i} strange loops.`);
    }
  }
}
