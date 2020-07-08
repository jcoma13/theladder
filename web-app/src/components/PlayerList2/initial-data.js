const initialData = {
    players: {
        "player1": { id: "player1", name: "Jansen", feet: 6, inches: 1, 
            plays: "right-handed", backhand: "two-handed", wins: 15, losses: 6 },
        "player2": { id: "player2", name: "Jack", feet: 6, inches: 0, 
            plays: "left-handed", backhand: "one-handed", wins: 17, losses: 13},
        "player3": { id: "player3", name: "Craig", feet: 5, inches: 8, 
            plays: "right-handed", backhand: "one-handed", wins: 12, losses: 12}, 
        "player4": { id: "player4", name: "Adam", feet: 6, inches: 4, 
            plays: "right-handed", backhand: "two-handed", wins: 10, losses: 11 },
    },
    columns: {
        "column1": {
            id: "column1",
            title: "Players",
            playerIds: ["player1", "player2", "player3", "player4"],
        },
    },
    columnOrder: ["column1"],
}

export default initialData;