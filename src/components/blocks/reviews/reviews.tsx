import { ReviewsProps } from './types';
import { ReviewProps } from '../review/types';
import Review from '../review/review';

function Reviews({ items }: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {items.map((card: ReviewProps) => (
        <Review { ...card } key={ card.id }/>
      ))}
    </ul>
  );
}

export default Reviews;
