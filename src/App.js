import logo from './logo.svg';
import './App.css';
import PageDemo1 from "./PageDemo1";
import Profile from "./Profile";

function App() {
  const mockList = ['https://i.imgur.com/MK3eW3Am.jpg', 'https://i.imgur.com/MK3eW3Am.jpg' , 'https://i.imgur.com/MK3eW3Am.jpg'];

  return (
    <div className="App">
      <header className="App-header">
        <PageDemo1 />
        {mockList.map((item, index) => {
          return <Profile imageSrc={item} key={index} customStyle={index === 0 ? {height: 100} : {}} />
        })}
        {/*<img*/}
        {/*  style={{height: 200, width: 200}}*/}
        {/*  src="https://i.imgur.com/MK3eW3Am.jpg"*/}
        {/*  alt="Katherine Johnson"*/}
        {/*/>*/}
        {/*<img*/}
        {/*  src="https://i.imgur.com/MK3eW3Am.jpg"*/}
        {/*  alt="Katherine Johnson"*/}
        {/*/>*/}
        {/*<img*/}
        {/*  src="https://i.imgur.com/MK3eW3Am.jpg"*/}
        {/*  alt="Katherine Johnson"*/}
        {/*/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
