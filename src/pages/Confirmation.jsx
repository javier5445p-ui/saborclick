function Confirmation({setPage}){

return(

<div className="page-container">

<div className="form-card">

<h2>✅ Reserva confirmada</h2>

<p>Tu mesa ha sido reservada correctamente.</p>

<button
className="button-main"
onClick={()=>setPage("home")}
>
Volver al inicio
</button>

</div>

</div>

)

}

export default Confirmation;