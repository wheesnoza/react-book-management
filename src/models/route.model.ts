export enum PublicRoutes {
  LOGIN = '/login',
}

export enum PrivateRoutes {
  HOME = '/',
  BOOK_DETAIL = '/books/:bookId',
  BOOK_CREATE = '/books/new',
  BOOK_EDIT = '/books/:bookId/edit',
  BOOK_LEND_PETITION = '/books/:bookId/lend/petition',
  BOOK_PROCURE_PETITION = '/books/procure/petition',
  BOOK_PROCURE_DETAIL = '/books/procure/:procureId',
  APPLICATIONS = '/applications',
}
