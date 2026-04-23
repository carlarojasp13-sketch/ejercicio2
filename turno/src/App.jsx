import { useState } from 'react'

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
      owner: ''
    }

    if (pet === '') {
      nuevoError.pet = 'Campo Obligatorio'
      setError(nuevoError)
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
    ;(setPet(''), setVet(''), setMotive(''), setDate(''), setOwner(''), setError(''))
  }

  return (
    <div>
      <form onSubmit={agregarTurno}>
        <button type="submit">Agregar</button>
        <input type="text" placeholder="Pet Name" value={pet} onChange={e => setPet(e.target.value)} />
        {error.pet && <p style={{ color: 'red' }}>{error.pet}</p>}
        <input type="text" placeholder="Vet" value={vet} onChange={e => setVet(e.target.value)} />
        <input type="text" placeholder="Motive" value={motive} onChange={e => setMotive(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="text" placeholder="Owner" value={owner} onChange={e => setOwner(e.target.value)} />
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
