// default parameters
// default parameters
function helloDefault(name = 'Alexender') {
  console.log(`Hello ${name}`);
}
helloDefault(); //default
helloDefault('Kashif'); //override
// rest parameters
function restParameter(name = 'Imran', ...nickName: string[]) {
  console.log(`Hello ${name} aka ${nickName}`);
}

restParameter('Alexender', 'Alex', 'Alexender the Great');
