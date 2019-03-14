import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import ChoiceSelector from './containers/ChoiceSelector/ChoiceSelector';
import StudentSelector from './containers/StudentSelector/StudentSelector';

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
