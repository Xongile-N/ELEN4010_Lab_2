const sleep = function (sleepDuration) { // A function that blocks
  const now = new Date().getTime()
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}
console.log('Starting')
sleep(10000)
console.log('Done, doing other things')
for (let i = 0; i < 10; i++) {
  console.log(i)
}
