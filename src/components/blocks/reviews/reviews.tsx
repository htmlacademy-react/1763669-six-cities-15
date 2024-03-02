import Review from '../review/review';

export type ReviewProps = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro?: boolean;
  };
  comment: string;
  rating: number;
}

export type ReviewsProps = {
  items: ReviewProps[];
};

function Reviews({items}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {items.map((card: ReviewProps) => (
        <Review {...card} key={card.id}/>
      ))}
    </ul>
  );
}

export default Reviews;
