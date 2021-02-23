import {BookType} from './book-type';
import {BookRating} from './book-rating';

export class Books {
  bookId: number;
  title: string;
  date: Date;
  description: string;
  imageName: string;
  image: string;
  retrievedImage: string;
  authorName: string;
  typeId: BookType;
  ratingId: BookRating;
}
