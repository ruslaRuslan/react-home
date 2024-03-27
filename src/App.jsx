// import Home from "./Home";


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



function App() {
  let counter = 0
  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => counter++}>
        +</button>

      <button
        onClick={() => counter--}>
        -</button>

      <button
        onClick={() => console.log(counter)}
        >console</button>

    </>
  )
}

export default App;