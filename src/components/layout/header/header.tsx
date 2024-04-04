import { Link, Location } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/useAppDispatch';
import { logoutAction } from '../../../services/api-actions';

import { AuthorizationStatus, AppRoute } from '../../consts';


function Header({ location }: { location: Location }): JSX.Element {
  const { pathname } = location;

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus) as AuthorizationStatus;
  const user = useAppSelector((state) => state.userData);

  const dispatch = useAppDispatch();

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (AuthorizationStatus.Auth) {
      evt.preventDefault();
      dispatch(logoutAction());
    }
  };

  return(

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={ AppRoute.Main }>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>

          {
            (pathname === AppRoute.Main.toString() ||
            pathname === AppRoute.Favorites.toString() ||
            pathname === AppRoute.Offer.toString()) &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    authorizationStatus === AuthorizationStatus.Auth &&
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Favorites }>
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__user-name user__name">{ user.email }</span>
                          <span className="header__favorite-count">3</span>
                        </Link>
                      </li>
                  }

                  <li className="header__nav-item">
                    {
                      authorizationStatus === AuthorizationStatus.Auth ?
                        <Link
                          className="header__nav-link"
                          to={ AppRoute.Main }
                          onClick={ handleLogout }
                        >
                          <span className="header__signout">Sign out</span>
                        </Link> :
                        <Link className="header__nav-link" to={ AppRoute.Login }>
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__login">Sign in</span>
                        </Link>
                    }
                  </li>
                </ul>
              </nav>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
