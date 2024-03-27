import Home from "./Home";


function AppComponent(props) {
  return <div>
    <h1>Salam {props.ad} {props.age} </h1>
    <p>axsaminiz xeyirli ugurlu olsun</p>
    <Home />
  </div>
}

export default AppComponent;
