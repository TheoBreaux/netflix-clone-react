import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieRow from "./MovieRow";
import Counter from "./Counter";
import Modal from "./Modal";
import "./style.css";

const App = () => {
    const [openModal, setOpenModal] = useState(false);
    const [rowData, setRowData] = useState([]);

    useEffect(() => {

        const promise1 = fetch('https://api.themoviedb.org/3/list/1?api_key=4e02ee41f18b6000a79c719f36533b0a');
        const promise2 = fetch('https://api.themoviedb.org/3/list/2?api_key=4e02ee41f18b6000a79c719f36533b0a');
        const promise3 = fetch('https://api.themoviedb.org/3/list/3?api_key=4e02ee41f18b6000a79c719f36533b0a');

        Promise.all([promise1, promise2, promise3])
            .then((results) => {
                let promises = results.map((result) => result.json());
                Promise.all(promises).then((allResults) => {
                    console.log('allResults', allResults)
                    setRowData(allResults);
                })
            });
    }, []);

    return (
        <div>
            <Header setOpenModal={setOpenModal} />
            <main>
                {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
                <Counter />

                {rowData.map((rowDataObj, index) => (
                    <MovieRow key={rowDataObj.id} index={index} data={rowDataObj} />))}

            </main>

        </div>
    );
};



export default App;