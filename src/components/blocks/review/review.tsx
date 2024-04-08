import { memo, useCallback } from 'react';
import { setInlineWidth, convertDataToText } from '../../utils';
import { ReviewProps } from './types';

function Review(props: ReviewProps): JSX.Element {
  const setInlineWidthMemoized = useCallback((num: number) => setInlineWidth(num), []);
  const convertDataToTextMemoized = useCallback((date: string) => convertDataToText(date), []);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ props.user.avatarUrl } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { props.user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ setInlineWidthMemoized(props.rating) }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { props.comment }
        </p>
        <time className="reviews__time" dateTime={ props.date }>{ convertDataToTextMemoized(props.date) }</time>
      </div>
    </li>
  );
}

const MemoizedReview = memo(Review);

export default MemoizedReview;
