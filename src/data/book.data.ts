import { BookStatus, Role } from '@/models';

export const bookData = {
  id: 'a',
  title: 'よくわかるSQL',
  description:
    'SQL初心者向けの書籍。ぜろからマスターまで勉強できる量になっている。',
  stock: 1,
  status: BookStatus.AVAILABLE,
  thumbnail: 'https://picsum.photos/300/400',
  lends: [
    {
      from: new Date(2022, 8, 5),
      to: new Date(2022, 8, 10),
      user: {
        id: 1,
        name: 'Test 1',
        email: 'test1@example.example',
        role: Role.EMPLOYEE,
      },
    },
    {
      from: new Date(2022, 10, 5),
      to: new Date(2022, 10, 10),
      user: {
        id: 2,
        name: 'Test 2',
        email: 'test2@example.example',
        role: Role.EMPLOYEE,
      },
    },
    {
      from: new Date(2022, 10, 20),
      to: new Date(2022, 10, 25),
      user: {
        id: 3,
        name: 'Test 3',
        email: 'test3@example.example',
        role: Role.EMPLOYEE,
      },
    },
  ],
};
