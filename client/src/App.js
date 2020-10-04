import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

//Redux components
import {sendData , getData} from './actions/dashboardAction'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component {
  constructor(props){
    super();
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  
  
  componentDidMount() {
    this.callApi();
  }
  
  callApi = () => {    
    this.props.getData('/api/hello')
  };
  
  handleSubmit = () => {
    this.props.sendData('/api/data',{ post: this.state.post })
  };
  
render() {
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
        </header>
        <p>{this.props.getDataFromBackend.express}</p>
        <div>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <p style={{color : 'blue'}}><b>{this.props.dataFromBackend.data}</b></p>
      </div>
    );
  }
}

//React Redux connecting code

function mapStateToProps(state){
  return {
   dataFromBackend : state.dashboardReducer.dataFromBackend,
   getDataFromBackend : state.dashboardReducer.getDataFromBackend
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  sendData,
  getData
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);