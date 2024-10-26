import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {

    const [players, setplayers] =useState([]);
    
   useEffect(()=>{
        fetch('players.json')
        .then(res=> res.json())
        .then(data=>{
            setplayers(data.players)
        })
    },[])
    return (
        <div className="w-11/12 mx-auto grid grid-cols-3">
              
              {
                players.map((p)=> <Player key={p.id} player={p} ></Player>)
              }
            
        </div>
    );
};

export default Players;