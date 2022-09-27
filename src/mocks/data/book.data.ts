import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { Book, BookStatus, Role, User } from '@/models';

type BookWithLends = Book & {
  lends: { from: string; to: string; user: User }[];
};

const lends = [...Array(12).keys()].map((value) => {
  const lendSpan = faker.date.betweens(`2022/${value}/01`, `2022/${value}/20`);
  return {
    from: lendSpan[0].toString(),
    to: lendSpan[1].toString(),
    user: {
      id: uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.objectValue(Role),
    },
  };
});

export const book: BookWithLends = {
  id: uuid(),
  title: faker.random.words(4),
  description: faker.lorem.text(),
  stock: parseInt(faker.random.numeric(1), 10),
  status: faker.helpers.objectValue(BookStatus),
  thumbnail: '/books/image',
  lends,
};

export const books: Book[] = [...Array(20).keys()].map(() => ({
  id: uuid(),
  title: faker.random.words(4),
  description: faker.lorem.text(),
  stock: parseInt(faker.random.numeric(1), 10),
  status: faker.helpers.objectValue(BookStatus),
  thumbnail: '/books/image',
}));
