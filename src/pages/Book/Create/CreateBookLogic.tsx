import yup from '@/locales/yup.locale';
import { Book, BookStatus } from '@/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import BookForm from '../Form/BookForm';

const schema = yup.object().shape({
  title: yup.string().label('book.title').required().max(80),
  description: yup.string().label('book.description').required().max(250),
  stock: yup.number().label('book.stock').required().min(1),
  status: yup
    .string()
    .oneOf(Object.values(BookStatus))
    .label('book.status')
    .required(),
});

interface Props {
  defaultValues: Book;
  onSubmit: (data: Book) => Promise<Book>;
}

export const CreateBookLogic = ({ defaultValues, onSubmit }: Props) => {
  const form = useForm<Book>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: Book) => {
    await onSubmit(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  return <BookForm form={form} onSubmit={handleSubmit} />;
};

export default CreateBookLogic;
