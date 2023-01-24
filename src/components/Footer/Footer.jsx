import styleFooter from "./footer.module.css";

export const Footer = () => {
  
  return (
    <footer className="position-absolute bottom-0 w-100 bg-success p-2 text-white bg-opacity-75">
      <div className="d-flex justify-content-around">
        <div>
          <h4>Наши контакты</h4>
          <div className="d-flex flex-column">
            <a href="tel:74959999999">+7 (495) 999-99-99</a>
            <a href="email:dogfood@gmail.com">dogfood@gmail.com</a>
          </div>
        </div>
        <div>
          <h4>Покупателям</h4>
          <div className="d-flex flex-column">
            <a href="#Акции">Акции</a>
            <a href="#Бонусные карты">Бонусные карты</a>
            <a href="#Доставка">Доставка</a>
            <a href="#Условия возврата">Условия возврата</a>
          </div>
        </div>
      </div>
      <div className={styleFooter.copyright}>DodFood © 2023</div>
    </footer>
  );
};
