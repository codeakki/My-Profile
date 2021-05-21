import logo from './logo.svg';
import './App.css';
import Page from "./Page"
import Header from "./Header"
import Skills from "./Skills"
import About from "./About"
function App() {

  return (
    <div className="app">
      <a href="https://forms.gle/t7eyDe4j13BP5CjS7" tar><img src={"https://img.icons8.com/color/240/000000/apple-mail.png"}/></a>
      <div className="App">
        <Header/>
        <Page/>
        
      </div>
      <Skills/>
      <div className="ABOUT" id="abb">
        <About/>
      </div>
    </div>
  );
}

export default App;
