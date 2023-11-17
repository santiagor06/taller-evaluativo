import { Link } from "react-router-dom";
import "./Menu.css"
const Menu = () => {
    return (<>
    <section className="menu">
     
       
        <Link to="login">
        <button className="botones">Login</button>
        </Link>
        <Link to="registro">
        <button className="botones">Registro</button>
        </Link>
        <Link to="productos">
        <button className="botones">Productos</button>
        </Link>
        <Link to="clientes">
        <button className="botones" >Clientes</button>
        </Link>
        
        <button className="botones">Cerrar sesion</button>
    
        <Link to="/">
        <button className="botones">Home</button>
        </Link>
    </section>
    
    </>  );
}
 
export default Menu;