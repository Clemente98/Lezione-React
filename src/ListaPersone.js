import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

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

        setTimeout(() => {
            let datiDalServer = {
                listaPusher: [
                    "Daniel",
                    "Fred",
                    "Fiocco Bloods",
                    "Krinkoli",
                ]
            }

            this.setState({
                lista: datiDalServer.listaPusher,
                loading: false
            });
        }, 2000)
    }

    renderItemList(item) {
        if (item === "Daniel") {
            return;
        } else {
            return (
                <div>
                    <p>
                        {item}
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
