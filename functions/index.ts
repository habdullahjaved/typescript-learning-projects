// functions with required parameters
function hello(name: string) {
  console.log(`Hello ${name}`);
}

hello('Kashif');
// optional parameters
function hello2(name: string, aka?: string) {
  console.log(`Hello ${name} ${aka}`);
}

hello2('Kashif', 'aka Alexender');

// default parameters
