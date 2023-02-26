import React from "react";

const App = () => {
    return (
        <div>
            <header>
                <div className="header__top-row">
                    <div>
                        <h1 className="red">Netflix</h1>
                        <span href="">Browse</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-bell"></i>
                        <img src="" alt="" />

                    </div>
                </div>
                <div className="header-main">
                    <div className="header-main__left-section">
                        <p>
                            <span className="red">N</span>
                            <span className="gray">SERIES</span>
                        </p>
                        <h3>THE GREAT BRITISH
                            BAKING SHOW</h3>
                        <h3><i>The Professionals</i></h3>
                        <h4>#7 in TV Shows Today</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae a doloribus ratione cum
                            perferendis corrupti inventore quod consequatur similique accusamus, sapiente, quae animi
                            distinctio, minus nulla quas temporibus et.
                        </p>
                        <button>Play</button>
                        <button className="gray-button">More Info</button>
                    </div>
                </div>
            </header>



            <main>

                <div className="row">
                    <h4>Released in the past year</h4>
                    <div className="images-container">
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <h4>Trending Now</h4>
                    <div className="images-container">
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <h4>My List</h4>
                    <div className="images-container">
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                        <img src="./megan.jpg" alt="" />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default App;