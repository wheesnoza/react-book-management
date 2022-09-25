import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { Book, BookStatus, Role, User } from '@/models';

type BookWithLends = Book & {
  lends: { from: string; to: string; user: User }[];
};

export const book: BookWithLends = {
  id: uuid(),
  title: faker.random.words(4),
  description: faker.lorem.text(),
  stock: parseInt(faker.random.numeric(1), 10),
  status: faker.helpers.objectValue(BookStatus),
  thumbnail: faker.image.image(300, 400),
  lends: [
    {
      from: '2022/10/05',
      to: '2022/10/25',
      user: {
        id: uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        role: faker.helpers.objectValue(Role),
      },
    },
  ],
};

export const books: Book[] = [...Array(20).keys()].map(() => ({
  id: uuid(),
  title: faker.random.words(4),
  description: faker.lorem.text(),
  stock: parseInt(faker.random.numeric(1), 10),
  status: faker.helpers.objectValue(BookStatus),
  thumbnail: faker.image.image(300, 400),
}));
