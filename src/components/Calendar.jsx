function Calendar({setDate}){

return(

<div>

<h3>Seleccionar fecha</h3>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

</div>

)

}

export default Calendar;