import React, { Component } from 'react';

import API from "API";
import Searchbar from 'components/Searchbar'

const service = new API();

class App extends Component {
    render() {
      service.getQueryImages('cat').then(({ data: { hits } }) => {
        console.log(hits)
      })
       return (
        <Searchbar/>
       )
    }
  };

  export default App;