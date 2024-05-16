

function FormAdd({addNewClub, handleInput, formData}) {

    const handleClick =(ev)=>{
        ev.preventDefault();
        addNewClub();
    }

  return (
    <form className="form-container">
        <input onChange={handleInput}
        type="text" 
        name='name' 
        id='name' 
        value={formData.name}
        onInput={handleInput}
        placeholder='Nombre del club' />
        <label htmlFor="diario"> ¿Abre entre semana?</label>
        <input 
        type="checkbox" 
        name='openOnWeekdays' 
        id='diario' 
        onChange={handleInput}
        checked={formData.openOnWeekdays}
    />
        <label htmlFor="findes"> ¿Abre los fines de semana?</label>
        <input 
        type="checkbox" 
        name='openOnWeekend' 
        id='findes' 
        value={formData.name}
        checked={formData.openOnWeekend}
        onChange={handleInput}
    />
    <input type="submit" value="Añadir el nuevo club" onClick={handleClick}/>
  </form>
  )
}

export default FormAdd