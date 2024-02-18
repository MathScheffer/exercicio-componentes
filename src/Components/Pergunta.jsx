import React, { useEffect, useRef, useState } from 'react'
import Radio from './Radio'

const Pergunta = ({
  slideAtual,
  pergunta,
  acertos,
  setAcertos,
  respostas,
  setRepostas,
}) => {
  if (slideAtual !== pergunta.id) return null

  const [value, setValue] = useState()
  const firstRun = useRef(true)

  useEffect(() => {
    if (!firstRun.current) {
      setAcertos({
        ...acertos,
        [[pergunta.id]]: value === pergunta.resposta,
      })

      setRepostas({ ...respostas, [[pergunta.id]]: value })
    }

    firstRun.current = false
  }, [value])

  return (
    <section>
      <h2>{pergunta.pergunta}</h2>
      {pergunta.options.map((o) => (
        <Radio
          key={o}
          option={o}
          value={respostas[[pergunta.id]]}
          setValue={setValue}
        />
      ))}
    </section>
  )
}

export default Pergunta
