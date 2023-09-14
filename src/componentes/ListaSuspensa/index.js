import './ListaSuspensa.css'


const ListaSuspensa = (props) => {

    return (
        <di>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </di>
    )
}

export default ListaSuspensa;