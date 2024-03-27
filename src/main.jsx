import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// const rootElem = ReactDOM.createRoot(document.getElementById('root'))
// rootElem.render(
//   <div>
//     <h1>Salam abi</h1>
//     <p>axsaminiz xeyirli ugurlu olsun</p>

//   </div>
// )
// render -> code to UI -> (user interface)

// -------------------------------------------------------------------------------------------------------------

// const rootElem = ReactDOM.createRoot(document.getElementById('root'))
// const a = <div>
//   <h1>Salam abi</h1>
//   <p>axsaminiz xeyirli ugurlu olsun</p>
// </div>
// rootElem.render(
//   a
// )

// -------------------------------------------------------------------------------------------------------------

const rootElem = ReactDOM.createRoot(document.getElementById('root'))

function A(ad) {
  return <div>
    <h1>Salam {ad} abi</h1>
    <p>axsaminiz xeyirli ugurlu olsun</p>
  </div>
}

rootElem.render(
  A('Ruslan')
)
