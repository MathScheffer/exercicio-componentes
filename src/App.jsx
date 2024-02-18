import { useState } from 'react'
import Pergunta from './Components/Pergunta'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
]

function App() {
  const [acertos, setAcertos] = useState({
    p1: null,
    p2: null,
    p3: null,
    p4: null,
  })
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  })
  const [countAcertos, setCountAcertos] = useState(0)
  const [slideAtual, setSlideAtual] = useState('p1')

  const handleClick = () => {
    let count = 0
    for (let p of Object.entries(acertos)) {
      if (p[1]) {
        count++
      }
    }

    setCountAcertos(count)
  }

  const next = () => {
    const atual = parseInt(slideAtual.split('p')[1])

    if (acertos[[slideAtual]] !== null) {
      setSlideAtual(`p${atual + 1}`)
      handleClick()
    }
  }

  const previous = () => {
    const atual = parseInt(slideAtual.split('p')[1])

    if (atual > 1) {
      setSlideAtual(`p${atual - 1}`)
    }
  }
  return (
    <>
      {perguntas.map((p) => (
        <Pergunta
          slideAtual={slideAtual}
          pergunta={p}
          key={p.id}
          acertos={acertos}
          setAcertos={setAcertos}
          respostas={respostas}
          setRepostas={setRespostas}
        />
      ))}
      {parseInt(slideAtual.split('p')[1]) > Object.entries(acertos).length ? (
        <p>Respostas certas: {countAcertos}</p>
      ) : (
        <>
          <button onClick={previous}>Anterior</button>
          <button onClick={next}>Próximo</button>
        </>
      )}
    </>
  )
}

export default App
