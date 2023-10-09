import './App'

interface Msg {
  msg: string
}

function helloWorld() {
  const msg: Msg = { msg: 'Hello World' }
  console.log(msg)
  return (
    <div className="Mundo">
      <h1>Hola, Mundo!</h1>
      <p>Typescript 4 the win</p>
    </div>
  )
}

export default helloWorld
