import React, { Component } from "react";
import players from "./players.json";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useDrag } from 'react-dnd'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
// inputs of players (array of playercards)
// sort players by rank 
// display them in order of highest rank to lowest

const PlayerList = (props) => {
    const cardList = players.players.map((player, index) => {
        return <PlayerCard
            name = {(index + 1) + ". " + player.name}
            feet = {player.feet}
            inches = {player.inches}
            plays = {player.plays}
            backhand = {player.backhand}
            wins = {player.wins}
            losses = {player.losses}
            />;
    });

    return (
        <DndProvider backend={HTML5Backend}>
           {cardList} 
        </DndProvider>   
    )
}

export default PlayerList;