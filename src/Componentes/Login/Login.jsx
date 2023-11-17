import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <section className='container'>

            <form action="" >
                <div className='login'>
                    <img src="public\ImgLogin\ceshops.png" alt="Logo" />
                    <div className='labels'>
                        <label htmlFor="Usuario">Usuario</label>
                        <input type="text" id='Usuario' ></input>
                    </div>
                    <div className='labels'>
                        <label htmlFor="Correo">Correo</label>
                        <input type="text" id='Correo'></input>
                    </div>
                    <div className='labels'>
                        <label htmlFor="">Contraseña</label>
                        <input type="text"></input>
                    </div>
                    <div className='buttoms'>
                        <button type="submit">Registro</button>
                    </div>
                    <div>
                        <p>¿Ya tienes una cuenta? <a href="">Inicia sesion</a></p>
                    </div>
                </div>
            </form>
            <section className='imagen'>
                <img src="public\ImgLogin\imagenCompra.jpg" alt="" />
            </section>

        </section>

    )
}

export default Login