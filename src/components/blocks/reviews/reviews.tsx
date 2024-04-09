import { useState } from 'react';
import { useAppSelector } from '../../../store/useAppDispatch';

import { ReviewsProps } from './types';
import { ReviewProps } from '../review/types';
import MemoizedReview from '../review/review';
import ButtonMore from '../button-more/button-more';

function Reviews({ items }: ReviewsProps): JSX.Element {
  const [loadedCommentsCount, setLoadedCommentsCount] = useState(10);
  const reviews = useAppSelector((state) => state.reviews);

  const loadMoreComments = () => {
    setLoadedCommentsCount(loadedCommentsCount + 10);
  };

  const remainingComments = reviews ? reviews.length - loadedCommentsCount : 0;
  const isDisabled = remainingComments <= 0;

  return (
    <>
      <ul className="reviews__list">
        {
          items.slice(0, loadedCommentsCount).map((card: ReviewProps) => (
            <MemoizedReview { ...card } key={ card.id }/>
          ))
        }
      </ul>
      {
        (reviews?.length ?? 0) > 10 &&
          <ButtonMore onClick={ loadMoreComments } isDisabled={ isDisabled }/>
      }
    </>
  );
}

export default Reviews;
