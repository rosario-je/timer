//Take the user input 
const input = process.argv.slice(2)
//Sort the user input in ascending order
const times = input.sort((a, b) => {
  return (a - b) * 1000
});
//Initiate array for the seconds
const finalTimes = []
//Each of the user numeric inputs is multiplied by 1000 
for (const time of times){
  finalTimes.push(time * 1000) //Push the number into the array
}

//For each second in the new finalTimes array
for (const seconds of finalTimes) {
  //Set a timeout to create a 'beep' and state how long it takes
  setTimeout(() => {
    process.stdout.write('beep');
    console.log(` at ${seconds / 1000} seconds`);
  }, seconds)
}

/*
A beep string and log were utilized since the actual beep provided in the compass activity could not be heard
*/