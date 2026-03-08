function Reservation({setPage}){

return(

<div className="page-container">

<div className="form-card">

<h2>Reservar mesa</h2>

<input type="date"/>

<input type="time"/>

<input type="number" placeholder="Número de personas"/>

<button
className="button-main"
onClick={()=>setPage("confirmation")}
>
Reservar mesa
</button>

</div>

</div>

)

}

export default Reservation;