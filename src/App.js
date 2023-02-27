import React from "react";
import Header from "./Header";
import MovieRow from "./MovieRow";

const App = () => {
    return (
        <div>
            <Header />
            <MovieRow rowText={'Released in the past year'} />
            <MovieRow rowText={'Trending Now'} />
            <MovieRow rowText={'My List'} />
        </div>
    );
};

export default App;