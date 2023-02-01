import "./Select.css";

export default function CustomSelect({ name, options, handleChange, handleBlur }) {
  return (
    <div>
    	<select name={name} onChange={handleChange} onBlur={handleBlur}>
    		<option>Selecciona una opción</option>
    		{ options?.length ?
				options.map(el => <option key={el.value}
									value={el.value}>{el.label}</option>)
							 : <option>No hay opciones</option>	}
    	</select>
    </div>
  );
}