import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";
import {todos} from "./API";

//componente classe che renderizza una lista di persone simulando una chiamata al server attraverso la funzione setTimeout
//aggiunta animazione di loading e evento onClick al bottone che riesegue la chiamata al server simulata

class ListaPersone extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            lista: [],
            loading: false,
        };
    }

    componentDidMount() {
        console.log("component did mount");

        this.chiamataServer();
    }

    chiamataServer() {
        this.setState({
            loading: true,
            lista: [],
        })

        // Make a request for a user with a given ID
        todos((err, dati)=>{
            if(err === true){
                alert("errore generico controllare la console")
            }else{
                this.setState({
                    lista: dati.todos,
                    loading: false
                });
            }
        })

        //sijdiosndosn


    }

    renderItemList(item) {
        if (item === "Daniel") {
            return;
        } else {
            return (
                <div>
                    <p>
                        {item.id}
                    </p>
                </div>
            )
        }
        //quale è l aspetto grafico dell item

    }


    render() {
        console.log("render");
        return (
            <div className="App">

                {
                    !this.state.loading &&
                    <button onClick={() => {
                        this.chiamataServer()
                    }}>
                        Ricarica la lista
                    </button>
                }

                <ClimbingBoxLoader
                    size={15}
                    color={"white"}
                    loading={this.state.loading}
                />

                {this.state.lista.map(
                    (item) => {
                        return this.renderItemList(item)
                    }
                )}
            </div>
        );
    }
}

export default ListaPersone;
