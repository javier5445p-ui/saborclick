import { useState } from "react";

function ReservationForm() {

const [fecha, setFecha] = useState("");
const [personas, setPersonas] = useState("");
const [nombre, setNombre] = useState("");

function reservar(e){
e.preventDefault();

alert(`Reserva confirmada
Nombre: ${nombre}
Fecha: ${fecha}
Personas: ${personas}`);
}

return(

<div className="form-container">

<h2>Reservar mesa</h2>

<form onSubmit={reservar}>

<input
type="text"
placeholder="Nombre"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
required
/>

<input
type="date"
value={fecha}
onChange={(e)=>setFecha(e.target.value)}
required
/>

<input
type="number"
placeholder="Número de personas"
value={personas}
onChange={(e)=>setPersonas(e.target.value)}
required
/>

<button type="submit">Confirmar reserva</button>

</form>

</div>

)

}

export default ReservationForm;