import React from 'react'

function FilteredSelect({setFiltered}) {

    const handleChange=(event)=>{
        setFiltered(event.target.value);
    }
  return (
    <>
    <label htmlFor="select">Mostrar</label>
    <select name="select" id="select" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="weekdays">Los que abren entre semana</option>
        <option value="weekend">Los que abren en fin de semana</option>
    </select>
    </>
   
  )
}

export default FilteredSelect