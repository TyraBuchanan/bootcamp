import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
      .then(employees => employees.json())
      .then(_employees => {
        console.log(_employees)
        this.setState({
          employees: _employees
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className= "AppContainer">
      <div className="App">
        <h1>Sogeti Employee Directory</h1>
        <div className= "row">
        {this.state.employees.map((employee, index) => {
          return (
          
            <div className="media col-12 mb-4 directory-entry p-6" key={index}>
              <img src={employee.image}
                 className="mr-10 directory-image" alt="..." />
              <div className="media-body">
                <h5 className="mt-2">{employee.name}</h5>
                <div>
                {employee.from}
                </div>
                {employee.id}
              </div>
            </div>
          )
        })
        }
      </div>
      </div>
      </div>
    );
  }
}

export default App;
