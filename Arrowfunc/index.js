"use strict";
const nickNames = ['Alexender', 'Alex', 'Alexender the Great'];
function allNickNames(callback) {
    for (let i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return `${nickNames[index]}`;
}
allNickNames(getNameAt);
// function logName(name: string) {
//   return `${name}`;
// }
// allNickNames(logName);
