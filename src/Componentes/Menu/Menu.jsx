import { Link } from "react-router-dom";


const Menu = () => {
    return (<>
    <div>
        <Link to="productos">
        Productos
        </Link>
        <Link to="login">
        Login
        </Link>
    </div>
    </>  );
}
 
export default Menu;