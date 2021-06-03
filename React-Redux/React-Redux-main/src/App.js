import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickButton } from './actions/';

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue:event.target.value
    })
  }
  
  render (){
    const {
      clickButton,
      newValue
    } =this.props;

    const{inputValue}= this.state;

    return (
      <div className="App" style={{ paddingTop: '50px' }}> 
        <h2>Demonstração de React com Redux</h2> 
        <h2>Qual seu nome?</h2>
        <input type='text' 
          onChange={this.inputChange}
          value={inputValue}
        />
        <button onClick= {() => clickButton(inputValue)}>
        Enviar 
        </button> 
        <h3>Bem Vindx   {newValue}</h3> 
   
      </div> 
    );
  }
}

const mapStateToProps = store => ({
  newValue:store.clickState.newValue
});

const mapDispatchToProps= dispatch =>
bindActionCreators ({clickButton},dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(App);


