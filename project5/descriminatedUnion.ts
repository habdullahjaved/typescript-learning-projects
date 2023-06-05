type ImraninPakistan = { name: string; age: number; type: 'Pakistan' };
type ImranOverseas = {
  name: string;
  age: number;
  type: 'Overseas';
  nickname: string;
};

type Imran = ImraninPakistan | ImranOverseas;

const imran: Imran =
  Math.random() > 0.5
    ? { name: 'Imran', age: 21, type: 'Pakistan' }
    : { name: 'Imran', age: 21, type: 'Overseas', nickname: 'Alexender' };

if (imran.type === 'Pakistan') {
  console.log('Imran is in Pakistan so we called him imran');
} else {
  console.log(`Imran in Overseas so we called him ${imran.nickname}`);
}

let a: number | string;

a = 10;
console.log(a);
export {};
