import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ChoiceSelector from './containers/ChoiceSelector/ChoiceSelector';

class App extends Component {
  render() {
    return (
      <div> 
        <Layout>
          <ChoiceSelector />
        </Layout> 

      </div>
    );
  }
}

export default App;
