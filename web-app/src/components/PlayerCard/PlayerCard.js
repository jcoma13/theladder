import Card, {
    CardTitle,
    CardContent,
    CardImage
  } from 'calcite-react/Card';
import React from 'react';

const PlayerCard = (props) => {
    var height;
    if (height === null || height === "") {
        height = 'N/A';
    } else {
        height = props.height;
    }
 return (
    <Card bar="blue" style={{margin: '0 480px', flex: '1 1 20%' }}>
        <CardContent>
            <CardTitle>{props.name}</CardTitle>
            <p>
                <li>height: {height}</li>
                <li>plays: {props.plays}</li>
                <li>backhand: {props.backhand}</li>
                <li>record: {props.record}</li>
            </p>
        </CardContent>
    </Card>
 );
}

export default PlayerCard;