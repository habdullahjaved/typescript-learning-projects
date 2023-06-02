type Author = {
  firstName: string;
  lastName: string;
};
type Book = {
  author: Author;
  name: string;
  pages?: number;
};

let book: Book = {
  author: {
    firstName: 'Niccolo',
    lastName: 'Machivalli',
  },
  name: 'The Prince',
  // Optional Property
  pages: 10,
};
console.log(book);
