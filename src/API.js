import axios from "axios";

export function todos(cb) {
    axios.get('http://localhost:5000/api/v1/todos')
        .then((response) => {
            // handle success
            let dati = response.data;
            cb(false, dati);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            cb(true, null);
        })
}