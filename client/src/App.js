import React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.json())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    if (this.state.apiResponse) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
              {this.state.apiResponse.data.map((article) => {     
                console.log(article);                 
                return <p>{article.name}</p>
              })}
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              You have no peanut news:(
            </p>
          </header>
        </div>
      )}
  }
}

export default App;
