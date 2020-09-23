import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaPersone from "./ListaPersone";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            nome:"Daniel",
        };
    }

    componentDidMount() {
        console.log("component did mount");
        //this.state.nome = "Clemente";
        this.setState({
            nome: "Clemente",
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("component should update");
        if(nextState.nome === this.state.nome){
            return false;
        }else{
            return true;
        }
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Porcodio {this.state.nome}.
                        Porcodio {this.props.nomeProp}.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <ListaPersone/>

                </header>
            </div>
        );
    }
}

export default App;
