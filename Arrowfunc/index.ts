const nickNames = ['Alexender', 'Alex', 'Alexender the Great'];

function allNickNames(callback: (index: number) => string) {
  for (let i = 0; i < nickNames.length; i++) {
    console.log(callback(i));
  }
}

function getNameAt(index: number) {
  return `${nickNames[index]}`;
}
allNickNames(getNameAt);

// function logName(name: string) {
//   return `${name}`;
// }
// allNickNames(logName);
