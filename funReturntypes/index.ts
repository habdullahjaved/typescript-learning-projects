function hello(name = 'Imran') {
  return name;
}
hello();
// Exxplicit return type
function hello1(name = 'Imran'): string {
  return name;
}
hello1();

let imranName: (name: string, nickName?: string) => string;
