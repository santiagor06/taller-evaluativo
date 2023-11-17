import { Link } from "react-router-dom";
import "./Menu.css"
const Menu = () => {
    return (<>
    <section className="menu">
        <Link to="login">
        
        <button to="login" className="botones">Login</button><br />
        </Link>
        <Link to="registro">
        
        <button  className="botones">Registro</button><br />
        </Link>
        <Link to="productos">
        
        <button  className="botones">Productos</button><br />
        </Link>
        <Link to="clientes">
        
        <button  className="botones" >Clientes</button><br />
        </Link>
        <Link >
        
        <button className="botones">Cerrar sesion</button><br />
        </Link>
        <Link to="/">
        
        <button className="botones">Home</button><br />
        </Link>
    </section>
    
    </>  );
}
 
export default Menu;