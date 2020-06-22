import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import PhrBuilder from './containers/PhrBuilder/PhrBuilder';


class App extends Component {
  render() {
    return (
      <div >
        <Layout>
         <PhrBuilder></PhrBuilder>
        </Layout>

      </div>
    );
  }
}

export default App;
