import React from 'react';
import { action } from '@storybook/addon-actions';
import PlayerCard from './PlayerCard';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'PlayerCard',
  decorators: [withKnobs],
};

export const myPlayerCard = () => { 

    const name = text('Name', 'Jansen Comadena');
    const feet = number('Height(feet)', '6');
    const inches = number('Height(inches)', '1');
    const plays = text('Plays', 'right-handed');
    const backhand = text('Backhand', 'two-handed')
    const wins = number('Wins', 15);
    const losses = number('Losses', 6);

    return (

        <PlayerCard 
        style={{width:100}}
        name={name}
        height={feet + "' " + inches + '"'}
        plays={plays}
        backhand={backhand}
        record={wins + '-' + losses}
        onClick={action('clicked')}/>
    );
}

export const asDynamicVariables = () => {
    const name = text('Name', 'Jansen Comadena');
    const feet = number('Height(feet)', 6);
    const inches = number('Height(inches)', 1);
    const plays = text('Plays', 'right-handed');
    const backhand = text('Backhand', 'two-handed')
    const wins = number('Wins', 15);
    const losses = number('Losses', 6);
    const content = `I am ${name} and I'm ${feet + ' ft. ' + inches + ' in.'} tall. 
    I am a ${plays} tennis player with a ${backhand} backhand. My record is 
    ${wins + '-' + losses}.`;
    return <div>{content}</div>;
};