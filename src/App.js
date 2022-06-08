
import React from 'react';
// import ReactDOM from 'react-dom/client';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: 1
        };
    }

    render() {

        const { numbers } = this.state;
        // const test = [42 + ' -', 'Stan', + " " + 'Cat ' + "-" + 5 + ' '];
        const test = ['Stan test tt'];


        return (
            <div className="App" >
                <header className="App-header">
                    <h1>{test}</h1>
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
                {console.log(numbers)}

            </div >
        );
    }
}


export default App;
