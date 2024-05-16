


function ListClubs({clubs}) {

    
const openOnWeek =(club)=>{
    if (club.openOnWeekdays === true){
       return <span>sí</span>
    }else{
        return <span>No</span>
    }
  
  };
  
  const openWeekend = (club) =>{
    if (club.openOnWeekend === true){
      return <span>sí</span>
   }else{
       return <span>No</span>
   }
  
  }
  
  return (
    <section className="container">
      <ul className="ol">
        {clubs.map((club, i)=>   
            <li className="card" key={i}>
                <h3>{club.name} </h3>
                <p>Abierto entre semana: {openOnWeek(club)}</p>
                <p>Abierto el fin de semana:   {openWeekend(club)}</p>
           
          </li>
        )}
        
      </ul>
     </section>
  )
}

export default ListClubs