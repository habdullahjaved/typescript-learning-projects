type imranType = {
  name: { firstName: string; lastName: string };
  age: number;
  teaching: boolean;
  dob: Date;
  certifications: string[];
};

let imran: imranType;
imran = {
  name: { firstName: 'Imran', lastName: 'Khan' },
  age: 21,
  teaching: true,
  dob: new Date(),
  certifications: ['AWS', 'Docker', 'Rust'],
};
