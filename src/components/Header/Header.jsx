import { Link } from "react-router-dom";
import "./header.module.css";

export const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-success p-2 text-white bg-opacity-75">
      <Link to="/">
        <div className="d-flex align-items-center">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h1>Dog Food</h1>
        </div>
      </Link>
      <div className="d-flex">
        <Link to="/signup">
          <button type="button" className="btn btn-success mb-4 mt-4">
            Регистрация
          </button>
        </Link>
        <Link to="/signin">
          <button type="button" className="btn btn-success mb-4 mt-4 mx-1">
            Войти
          </button>
        </Link>
      </div>
    </header>
  );
};
