'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const imran =
  Math.random() > 0.5
    ? { name: 'Imran', age: 21, type: 'Pakistan' }
    : { name: 'Imran', age: 21, type: 'Overseas', nickname: 'Alexender' };
if (imran.type === 'Pakistan') {
  console.log('Imran is in Pakistan so we called him imran');
} else {
  console.log(`Imran in Overseas so we called him ${imran.nickname}`);
}
console.log(1 + '1' - 1);
