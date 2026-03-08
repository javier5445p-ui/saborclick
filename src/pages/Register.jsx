import { useState } from "react";

function Register(){

const [mensaje,setMensaje] = useState("");

function registrar(){
setMensaje("✅ Cuenta creada correctamente");
}

return(

<div className="page-container">

<div className="form-card">

<h2>Crear cuenta</h2>

<input type="text" placeholder="Nombre"/>

<input type="email" placeholder="Correo"/>

<input type="password" placeholder="Contraseña"/>

<input type="password" placeholder="Confirmar contraseña"/>

<button
className="button-main"
onClick={registrar}
>
Registrarse
</button>

{mensaje && <p className="mensaje">{mensaje}</p>}

</div>

</div>

)

}

export default Register;