import React from 'react'
import '../Clientes/Clientes.css'
import cliente1 from '../../assets/cliente1.jpeg'
import cliente2 from '../../assets/cliente2.jpeg'
import cliente3 from '../../assets/cliente3.jpeg'
import cliente4 from '../../assets/cliente4.jpeg'


const Clientes = () => {
    return (
        <body>
            <div class="parent">
                <div class="card">
                    <h1>Diana Gomez</h1>
                    <p>Correo: diana@gamil.com</p>
                    <p>Telefono: 555-55-55</p>
                    <p>Ciudad: Medellín</p>
                    <img src={cliente1} alt="" />
                    <button>Consultar cliente</button>

                </div>
                <div class="card">
                    <h1>Carlos Ramirez</h1>
                    <p>Correo: diana@gamil.com</p>
                    <p>Telefono: 555-55-55</p>
                    <p>Ciudad: Medellín</p>
                    <img src={cliente2} alt="" />
                    <button>Consultar cliente</button>
                </div>
                <div class="card">
                    <h1>Diana Asprilla</h1>
                    <p>Correo: diana@gamil.com</p>
                    <p>Telefono: 32087643</p>
                    <p>Ciudad: Medellín</p>
                    <img src={cliente3} alt="" />
                    <button>Consultar cliente</button>

                </div>
                <div class="card">
                    <h1>PEDRO MORENO</h1>
                    <p>Correo: pedrog@gamil.com</p>
                    <p>Telefono: 645-80-55</p>
                    <p>Ciudad: Medellín</p>
                    <img src={cliente4} alt="" />
                    <button>Consultar cliente</button>

                </div>
            </div>
        </body>
    )
}

export default Clientes