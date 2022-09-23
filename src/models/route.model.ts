export enum PublicRoutes {
  LOGIN = '/login',
}

export enum PrivateRoutes {
  HOME = '/',
  BOOK_DETAIL = '/books/:bookId',
  BOOK_CREATE = '/books/new',
  BOOK_LEND_PETITION = '/books/:bookId/lend/petition',
  BOOK_PROCURE_PETITION = '/books/procure/petition',
  APPLICATIONS = '/applications',
}
