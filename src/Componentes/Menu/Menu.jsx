import { Link } from "react-router-dom";


const Menu = () => {
    return (<>
    <div>
        <Link to="/">
        Home
        </Link>
        <Link to="productos">
        Productos
        </Link>
        <Link to="login">
        Login
        </Link>
        <Link to="clientes">
        Clientes
        </Link>
    </div>
    </>  );
}
 
export default Menu;