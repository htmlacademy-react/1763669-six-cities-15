import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <p className="spinner-wrapper__text">Loading ...</p>
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
