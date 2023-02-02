import { useState } from 'react'
// import logo from './logo.svg'
import bk from './bk.svg'
import venmo from './venmo-square.png'
import zelle from './zelle-square.png'
import './App.css'
import MyLink from './MyLink'

function App() {
  // const [count, setCount] = useState(0)
  const [lang, setLang] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <div className="MainInfo">
          <img src={bk} className="App-logo" alt="logo" />
          <p>
            <button className={lang ? 'active' : 'inactive'} type="button" onClick={() => setLang(true)}>
              {'ENGLISH'}
            </button>
            <button className={lang ? 'inactive' : 'active'} type="button" onClick={() => setLang(false)}>
              {'ESPAÑOL'}
            </button>
          </p>
          <MyLink 
            chosenUrl={"https://www.target.com/gift-registry/gift/tuesday-eternity"}
            localizedText={
              lang ? 'Gift Registry':
              'Regalos'}
          />
          <MyLink 
            chosenUrl={"http://www.brendakevin.wedding"}
            localizedText={
              lang ? 'Our Website':
              'Nuestro sitio de web'}
          />
          <MyLink 
            chosenUrl={"https://goo.gl/maps/7pFtXqmWg77gHVev6"}
            localizedText={
              lang ? 'Wedding Reception Address':
              'Dirección de recepción'}
          />
        </div>
        <a
          href="https://account.venmo.com/u/Brenda-Hernandez-277">
          <img
            className="venmo"
            src={venmo}
            alt="Venmo Image"
          />
        </a>
        <img
          className="zelle"
          src={zelle}
          alt="Zelle Image"
        />
      </header>
    </div>
  )
}

export default App
