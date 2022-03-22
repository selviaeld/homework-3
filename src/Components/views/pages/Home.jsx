import React from "react";

function Home(props) {
    return (
        <div className="playlist">
            <div className="container">
                <div className="image">
                    <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
                </div>
                <div className="descriptions">
                    <h2>{props.title}</h2>
                    {props.artist}, {props.album}
                </div>
                <button type="submit" className="btn">Select</button>
            </div>
        </div>
    );
}

export default Home;
