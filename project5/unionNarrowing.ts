type PoemwithPages = { name: string; pages: number };
type PoemwithRhymes = { name: string; rhymes: boolean };

type Poem = PoemwithPages | PoemwithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
if ('pages' in poem) {
  poem.pages;
} else {
  poem.rhymes;
}
// poem.pages;
console.log(poem);

export {};
