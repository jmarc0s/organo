import Colaborador from '../Colaborador'
import './Time.css'

const Time =  ({time, colaboradores, aoDeletar, mudarCor}) => {
    return (
        colaboradores.length > 0 ?
            <section className='time' style={{ backgroundColor: time.corSecundaria}}>
                <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.corPrimaria} type='color' className='input-cor' />
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