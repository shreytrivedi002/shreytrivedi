import { useState } from 'react';
import './App.css';
import TodoList from './components/Todos';
import Details from './components/UserDetails';
import { getDetails } from './utils/routes';





function App() {


  const [details, setDetails] = useState('');
  const [titleData, setTitleData] = useState('');
  const [inputText, setInputText] = useState(" ");

  
  const apiHandler = (id,title) => {
    fetch(getDetails+id).then(res => {
      res.json().then(resp => {
        setDetails(resp);
        setTitleData(title);
      })
    })
  }
  console.log(inputText);

  return (
    <div className="App row">
      {/* <div className="row"> */}
      <div className="col-2">
        <h2>Todos</h2>
      </div>
      <div className="col-6">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)
          }
        />
      </div>
      {/* </div> */}

      <div className="col-6">
        <TodoList clickHnadler={apiHandler} inputTextData={inputText} />
      </div>
      <div className="col-6">
        <h2>User Details</h2>
        <Details data={details} titleData={titleData} />
      </div>
    </div>
  );
}

export default App;
