function NotFound(): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <h1>Not Found</h1>
          <a href="main.html">Go to homepage</a>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
