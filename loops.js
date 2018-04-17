function forLoop(item) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      greeting = item.push('I am 1 strange loop.');
      item.push(greeting);
      i++
    }
    console.log(`I am ${i} strange loops.`);
  }
}
