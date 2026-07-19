import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeveloperBios from './DeveloperBios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      language: '',
      year: '',
      developers: []
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, language, year } = this.state;

    if (!name && !language && !year) {
      return;
    }

    this.setState((prevState) => ({
      developers: [
        ...prevState.developers,
        { name, language, year }
      ],
      name: '',
      language: '',
      year: ''
    }));
  };

  render() {
    const { name, language, year, developers } = this.state;

    return (
      <div className="App">
        <header className="App-header">
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

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Developer name"
              value={name}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="language"
              placeholder="Favorite language"
              value={language}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="year"
              placeholder="Year started"
              value={year}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Add Bio</button>
          </form>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            {developers.map((developer, index) => (
              <div key={index} style={{ margin: '10px' }}>
                <DeveloperBios
                  name={developer.name}
                  language={developer.language}
                  year={developer.year}
                />
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
