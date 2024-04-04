import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <p>Loading ...</p>
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
