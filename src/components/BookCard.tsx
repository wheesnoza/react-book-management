import styled from '@emotion/styled';
import { Badge, Card, CardMedia, CardProps } from '@mui/material';
import { Book } from '@/models';
import dummyImage from '../assets/dummy_book_img.png';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

type Props = {
  book: Book;
} & CardProps;

export const BookCard = ({ book, ...props }: Props) => {
  return (
    <Badge
      badgeContent={book.stock.toString()}
      color={book.stock ? 'primary' : 'error'}
      max={999}
    >
      <StyledCard {...props}>
        <CardMedia component="img" src={dummyImage} alt={book.title} />
      </StyledCard>
    </Badge>
  );
};

export default BookCard;
