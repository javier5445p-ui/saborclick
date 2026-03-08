function Home({ setPage }) {

return (

<div className="home">

<div className="home-card">

<h1>SaborClick</h1>

<p>Reserva tu mesa en segundos</p>

<button onClick={() => setPage("reservation")}>
Reservar una mesa
</button>

</div>

</div>

);

}

export default Home;