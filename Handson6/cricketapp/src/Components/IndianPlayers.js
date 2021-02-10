import React from 'react';
function OddPlayers([first,,third,,fifth]) {
    return (
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    )
}

export function EvenPlayers([,second,,fourth,,sixth]) {
    return (
        <div>
            <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
        </div>
    )
}

export class ListOfIndianPlayers extends React.Component {

    render() {
        return this.props.players.map((item)=> {
            return (<li>{item}</li>)
        })
    }
}
export default OddPlayers;