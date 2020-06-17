import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1233'},
    { id: 2, firstName: 'Sally', phone: '123-333-1233'},
    { id: 3, firstName: 'Alex', phone: '123-125-1233'},
  ]}

  render() {
    return(
      <div>
        <Header size="huge" color='blue' textAlign='center'>
          Contact list
        </Header>
      </div>
    )
  }
}

export default App;
