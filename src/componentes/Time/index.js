import Colaborador from '../Colaborador'
import './Time.css'

const Time =  ({time, colaboradores, aoDeletar}) => {
    return (
        colaboradores.length > 0 ?
            <section className='time' style={{ backgroundColor: time.corSecundaria}}>
                <input value={time.corSecundaria} type='color' className='input-cor' />
                <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => 
                        <Colaborador corDeFundo={time.corPrimaria} key={colaborador.nome} 
                        nome={colaborador.nome} cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} aoDeleta={aoDeletar}  />)}
                </div>
                
            </section>

            : ''
    )
}

export default Time