import './button-more.css';

import { ButtonMoreProps } from './types';

function ButtonMore({ onClick, isDisabled }: ButtonMoreProps): JSX.Element {
  return (
    <button
      className="button-more button"
      type="button"
      onClick={ onClick }
      disabled={ isDisabled }
    >
      Show more
    </button>
  );
}

export default ButtonMore;
