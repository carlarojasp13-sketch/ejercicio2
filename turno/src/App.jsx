import { useState } from 'react'
import './App.css'

function App() {
  const [pet, setPet] = useState('')
  const [vet, setVet] = useState('')
  const [motive, setMotive] = useState('')
  const [date, setDate] = useState('')
  const [owner, setOwner] = useState('')
  const [error, setError] = useState({
    pet: '',
    vet: '',
    motive: '',
    date: '',
    owner: '',
  })

  const [turnos, setTurnos] = useState([])

  const agregarTurno = e => {
    e.preventDefault()

    const nuevoError = {
      pet: '',
      vet: '',
      motive: '',
      date: '',
      owner: '',
    }

    if (pet === '') {
      nuevoError.pet = 'Campo Obligatorio'
    }

    if (vet === '') {
      nuevoError.vet = 'Campo Obligatorio'
    }

    if (motive === '') {
      nuevoError.motive = 'Campo Obligatorio'
    }

    if (owner === '') {
      nuevoError.owner = 'Campo Obligatorio'
    }
    setError(nuevoError)

    if (nuevoError.pet || nuevoError.vet || nuevoError.motive || nuevoError.owner) {
      return
    }

    const nuevoTurno = {
      pet: pet,
      vet: vet,
      motive: motive,
      date: date,
      owner: owner,
    }
    setTurnos([...turnos, nuevoTurno])
    ;(setPet(''), setVet(''), setMotive(''), setDate(''), setOwner(''))
  }

  return (
    <div>
      <form className="formulario" onSubmit={agregarTurno}>
        <div className="campos">
          <input
            className={error.pet ? 'input errorInput' : 'input'}
            type="text"
            placeholder="Pet Name"
            value={pet}
            onChange={e => {
              setPet(e.target.value)
              setError({
                ...error,
                pet: '',
              })
            }}
          />
          <p className="errorTexto">{error.pet}</p>
        </div>
        <div className="campos">
          <input
            className={error.vet ? 'input errorInput' : 'input'}
            type="text"
            placeholder="Vet"
            value={vet}
            onChange={e => {
              setVet(e.target.value)
              setError({
                ...error,
                vet: '',
              })
            }}
          />
          <p className="errorTexto">{error.vet}</p>
        </div>
        <div className="campos">
          <input
            className={error.motive ? 'input errorInput' : 'input'}
            type="text"
            placeholder="Motive"
            value={motive}
            onChange={e => {
              setMotive(e.target.value)
              setError({
                ...error,
                motive: '',
              })
            }}
          />
          <p className="errorTexto">{error.motive}</p>
        </div>
        <div className="campos">
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className="campos">
          <input
            className={error.owner ? 'input errorInput' : 'input'}
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={e => {
              setOwner(e.target.value)
              setError({
                ...error,
                owner: '',
              })
            }}
          />
          <p className="errorTexto">{error.owner}</p>
          <button className="boton" type="submit">
            Agregar
          </button>
        </div>
      </form>

      {turnos.map((turno, index) => (
        <div key={index}>
          <p>
            Pet: {turno.pet} | Vet: {turno.vet} | Motive: {turno.motive} | Date: {turno.date} | Owner: {turno.owner}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
