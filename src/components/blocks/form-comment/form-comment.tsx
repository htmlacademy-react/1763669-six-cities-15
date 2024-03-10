import { Fragment } from 'react';
import { STAR_RATING } from '../../consts';
import { useState } from 'react';
import { handleChangeProps } from './types';

function FormComment () {
  const [review, setReview] = useState({starRating: 0, review: ''});

  const handleChange: handleChangeProps = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({...review, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STAR_RATING.map(({value, id, title}) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={id}
                type="radio"
                onChange={handleChange}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 50 || review.starRating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
