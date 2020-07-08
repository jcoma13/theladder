import React from 'react';
// import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

class PlayerList2 extends React.Component {
    state = initialData;

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         players: initialData,
    //     };
    // }

    onDragEnd = result => {
        // dropped outside the list
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId && 
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newPlayerIds = Array.from(column.playerIds);
        newPlayerIds.splice(source.index, 1);
        newPlayerIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            playerIds: newPlayerIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    };

    addPlayer = player => {
        this.setState({
            players: [player,...this.state.players]
        });
    }

    render() {
        return(
            <DragDropContext onDragEnd={this.onDragEnd} >
                {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const players = column.playerIds.map(playerId => 
                    this.state.players[playerId]);
                return <Column key={column.id} column={column} players={players} />;
                    })}
            </DragDropContext>
        );
    }
}

export default PlayerList2;
