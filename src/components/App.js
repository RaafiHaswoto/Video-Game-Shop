import React from 'react';
import GamesList from "./GamesList"

const games = [
    {
        name: "Quadropolis",
        thumbnail:
        "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: "32.99",
        players: "2-4",
        duration: "60"
    },
    {
        name: "Five Tribes",
        thumbnail:
        "https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
        price: "51.00",
        players: "2-4",
        duration: "80"
    },
    {
        name: "Roll for The Galaxy",
        thumbnail:
        "https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg",
        price: "32.99",
        players: "2-4",
        duration: "60"
    }
]


const App = () => (
    <div className="ui container">
    <GamesList games={games} />
    </div>
)

export default App;