import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(){
    console.log('deletando colaborador')
    
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.corPrimaria = cor;
      }

      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time
        mudarCor = {mudarCorDoTime}
        key={time.nome} nome={time.nome} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
       />)}

    </div>
  );
}

export default App;
