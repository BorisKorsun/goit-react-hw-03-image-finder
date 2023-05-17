import React, { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

class App extends Component {
  state = {
    formQuery: '',
    page: 1,
  };

  onFormSubmit = ({ formQuery }) => {
    this.setState({
      formQuery,
    })
  }

  onBtnClick = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }
    })
  };
  
    render() {
      const { formQuery, btnClicked, page } = this.state
       return (
        <>
        <Searchbar
        onSubmit={this.onFormSubmit}
        />
        <ImageGallery
        query={formQuery}
        btnClicked={btnClicked}
        page={page}
        />
        <Button onBtnClick={this.onBtnClick}/>
        </>
       )
    }
  };

  export default App;