import { useState } from "react";

function Login(){

const [mensaje,setMensaje] = useState("");

function iniciarSesion(){
setMensaje("✅ Sesión iniciada correctamente");
}

return(

<div className="page-container">

<div className="form-card">

<h2>Iniciar sesión</h2>

<input type="email" placeholder="Correo"/>

<input type="password" placeholder="Contraseña"/>

<button
className="button-main"
onClick={iniciarSesion}
>
Ingresar
</button>

{mensaje && <p className="mensaje">{mensaje}</p>}

</div>

</div>

)

}

export default Login;