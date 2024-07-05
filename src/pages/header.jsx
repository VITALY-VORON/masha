import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div style={{
            display: 'flex',
            alignItems: "center",
            padding: 10
        }}>
            <span>Фотограф</span>
                <div style={{
                    display: "flex",
                    gap: 20,
                    marginLeft: "auto",
                }}>
                    <button><Link to={"/"}>Главная</Link></button>
                    <button><Link to={"/about"}>Обо мне</Link></button>
                    <button><Link to={"examples"}>Мои работы</Link></button>
                    <button><Link to={"coast"}>Тарифы</Link></button>
                    <button><Link to={""}>Контакты</Link></button>
                    <button>Заказать</button>
                </div>
        </div>
     );
}
 
export default Header;