import React from "react";
import PlayerList from "./PlayerList";
import playerData from './players.json';

export default {
    title: 'PlayerList'
};

export const myPlayerList = () => {
    return (
        <div>
            <PlayerList players={playerData.players} test="my test string"/>
        </div>
    );
};