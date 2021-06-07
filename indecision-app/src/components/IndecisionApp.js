import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// babel-class-properties
// get rid of constructor
// get rid of binding, arrow functions don't bind to THIS
// class OldSyntax {
//   constructor() {
//     this.name = 'Yuan'
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = 'Yuan'
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount() {
    // read data from localStorage
    // localStorage stores all data in String type
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // if not valid json, do nothing
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  componentDidUpdate(prevProps, prevState) {
    // save data to localStroage
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  // pass this function to child component as prop
  // when child component click a button, it will trigger the function
  // function will update the state
  // this way we let child component update state

  // because new options is an empty array
  // it will pass new props to child component Options
  // which will trigger the child component to re-render
  handleDeleteOptions = () => {
    this.setState(() => ({options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    } 

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;