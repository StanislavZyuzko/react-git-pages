
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
        const test = ['Stan test deploy gh_pages'];


        return (
            <div className="App" >
                <header className="App-header">
                    <h1>{test}</h1>

                </header>
                {console.log(numbers)}

            </div >
        );
    }
}


export default App;
