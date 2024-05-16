


function ListClubs({clubs, filtered, setClubs}) {

  let filteredClubs = clubs;

  if(filtered === "weekdays"){
    filteredClubs = clubs.filter(club => club.openOnWeekdays);
  }else if(filtered === "weekend"){
    filteredClubs = clubs.filter(club => club.openOnWeekend)
  }
    
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
  
const handleClick=(event)=>{
  const index = event.target;
  const updatedClubs = ([...clubs]);
 
  updatedClubs.splice(index, 1);
  setClubs(updatedClubs)
}

  return (
    <section className="container">
      <ul className="ol">
        {filteredClubs.map((club, i)=>   
            <li className="card" key={i}>
              <button className="button" onClick={handleClick}>X</button>
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