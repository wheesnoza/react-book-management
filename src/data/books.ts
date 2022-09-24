import { Book, BookStatus } from '@/models';

export const books: Book[] = [
  {
    id: 'a',
    title: 'よくわかるSQL',
    description:
      'SQL初心者向けの書籍。ぜろからマスターまで勉強できる量になっている。',
    stock: 1,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'b',
    title: '',
    description: '',
    stock: 0,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'c',
    title: '',
    description: '',
    stock: 1,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'd',
    title: '',
    description: '',
    stock: 8,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'e',
    title: '',
    description: '',
    stock: 1,
    status: BookStatus.UNAVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'f',
    title: '',
    description: '',
    stock: 2,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'g',
    title: '',
    description: '',
    stock: 1,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'h',
    title: '',
    description: '',
    stock: 4,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'i',
    title: '',
    description: '',
    stock: 2,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
  {
    id: 'j',
    title: '',
    description: '',
    stock: 1,
    status: BookStatus.AVAILABLE,
    thumbnail: 'https://picsum.photos/300/400',
  },
];
