type FirstName = { firstName: string };
type LastNAme = { lastName: string };

const fullName = { firstName: 'Imran', lastName: 'Ali' };

let firstName: FirstName = fullName;
let lastName: LastNAme = fullName;

console.log(firstName.firstName, ' ', lastName);
