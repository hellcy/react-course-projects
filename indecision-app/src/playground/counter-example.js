class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'), 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0,
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     console.log('addOne');
//     count++;
//     renderApp();
// };

// const minusOne = () => {
//     console.log('minusOne');
//     count--;
//     renderApp();
// };

// const reset = () => {
//     console.log('reset');
//     count = 0;
//     renderApp();
// };

// let appRoot = document.getElementById('app')

// // we will re-render the whole application when user clicks the buttons
// // React will compare the virtual DOM and find the diffs
// // it is super quick so don't need to worry about if it will slow down when re-render the whole thing
// // react will only re-render the different part.
// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderApp();