import {ReviewProps} from '../reviews/reviews';

function Review(props: ReviewProps): JSX.Element {
  const convertDataToText = () => {
    const dateObject = new Date(props.date);
    const formattedDate = dateObject.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
    return formattedDate;
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {props.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(props.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {props.comment}
        </p>
        <time className="reviews__time" dateTime={props.date}>{convertDataToText()}</time>
      </div>
    </li>
  );
}

export default Review;
