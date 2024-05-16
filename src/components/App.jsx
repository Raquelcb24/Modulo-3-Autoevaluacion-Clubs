import '../styles/App.scss';
import initialData from '../services/data.json';
import { useState } from 'react';
import ListClubs from './ListClubs';
import FormAdd from './FormAdd';
import FilteredSelect from './FilteredSelect';


function App() {

const [clubs, setClubs]=useState(initialData);
const [formData, setFormData]=useState({name:"", openOnWeekdays: false, openOnWeekend: false});
const [filtered, setFiltered] = useState("all")

const addNewClub = ()=>{
  setClubs([...clubs, formData]); //funcion que modifica mi listado de clubs, hago una copia y añado mi nuevo clubs que se guarda en formData
  setFormData({name:"", openOnWeekdays: false, openOnWeekend: false})
}

const handleInput =(event)=>{ //esta funcion se encarga de actualizar el estado del formulario cuando cambian los campos
  const {name, value, type, checked} = event.target; //Aqui estamos desestructurando el objeto target del evento. El target es el elemento que ha desencadenado el evento (en este caso, el campo de entrada que ha cambiado). Esto nos da acceso a las propiedades del elemento, como name, value, type y checked
  const newValue = type === "checkbox" ? checked: value; //si es de tipo checkbox, el value sera checked sino sera un value normal
  setFormData({...formData, [name]: newValue})
}



  return (
    <>
     <h1>Mis clubs</h1>
      <FilteredSelect setFiltered={setFiltered}/>
      <ListClubs clubs={clubs} filtered={filtered} />
      <FormAdd addNewClub={addNewClub} handleInput={handleInput} formData={formData}/>
    </>
  )
}

export default App
