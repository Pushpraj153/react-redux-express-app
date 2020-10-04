import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

//Redux components
import {sendData , getData} from './actions/dashboardAction'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {    
    this.props.getData('/api/hello')
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    this.props.sendData('/api/data',{ post: this.state.post })
  };
  
render() {
  console.log('data===',this.props.dataFromBackend)
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
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.props.dataFromBackend.data}</p>
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