import { ReviewsProps } from './types';
import { ReviewProps } from '../review/types';
import MemoizedReview from '../review/review';

function Reviews({ items }: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        items.map((card: ReviewProps) => (
          <MemoizedReview { ...card } key={ card.id }/>
        ))
      }
    </ul>
  );
}

export default Reviews;
