import { Link } from "react-router-dom";

export const MainPage = () => {
    
  return (
    <main>
      <h4>Добро пожаловать</h4>
      <Link to="products">
        <p>Товары</p>
      </Link>
    </main>
  );
};
