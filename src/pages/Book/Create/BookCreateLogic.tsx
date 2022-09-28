import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import { alert } from '@/services/alert.service';
import { AlertLevel, Book, bookSchema, PrivateRoutes } from '@/models';
import BookFormView, { BookForm } from '../Form/BookFormView';

interface Props {
  onSubmit: (book: Book) => Promise<Book>;
}

export const BookCreateLogic = ({ onSubmit }: Props) => {
  const navigate = useNavigate();
  const form = useForm<Book>({
    mode: 'onSubmit',
    resolver: yupResolver(bookSchema),
  });

  const handleSubmit = async (bookForm: BookForm) => {
    const book: Book = {
      ...bookForm,
      id: uuid(),
    };
    await onSubmit(book)
      .then(() => {
        navigate(generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id }));
        alert.display(t('book.created'), AlertLevel.Success);
      })
      .catch(() => alert.display(t('error'), AlertLevel.Error));
  };

  return <BookFormView form={form} onSubmit={handleSubmit} />;
};

export default BookCreateLogic;
