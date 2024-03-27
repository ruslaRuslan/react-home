// import Home from "./Home";

// import { useState } from "react";


// function AppComponent(props) {
//   return <div>
//     <h1>Salam {props.ad} {props.age} </h1>
//     <p>axsaminiz xeyirli ugurlu olsun</p>
//     {/* <Home /> */}

//     <Test />
//   </div>
// }

// export default AppComponent;

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

import { useState } from "react";

// function App() {
//   // let counter = 0
//   const [counter, setCounter] = useState(0)
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button
//         onClick={() => setCounter(counter + 1)}
//         >+</button>

//       <button
//         onClick={() => setCounter(counter - 1)}>
//         -</button>

//       <button
//         onClick={() => console.log(counter)}
//       >console</button>

//     </>
//   )
// }
// export default App;

// -----------------------------------------------------------------------------------------------------------

// function App() {
//   // let counter = 0
//   let [counter, setCounter] = useState(0)
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button
//         // onClick={() => setCounter(counter + 1)}
//         onClick={() => counter++}

//         >+</button>

//       <button
//         // onClick={() => setCounter(counter - 1)}
//         onClick={() => counter--}

//         >-</button>

//       <button
//         onClick={() => console.log(counter)}
//       >console</button>

//     </>
//   )
// }
// export default App;

// -----------------------------------------------------------------------------------------------------------


function App() {

  return (
    <>
      <Counter />
    </>
  )
}
export default App;