class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (
          <div>
            <p>Some Text</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
// const onToggleButtonClick = () => {
//   visibility = !visibility
//   renderApp();
// };

// const renderApp = () => {
//   let template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggleButtonClick}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {visibility && (
//         <div>
//           <p>Some text</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// let appRoot = document.getElementById('app');
// renderApp();