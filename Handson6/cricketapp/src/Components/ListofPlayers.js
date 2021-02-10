import React from 'react';
class ListofPlayers extends React.Component {
    render(){
    this.players = this.props.players;
    return this.players.map((item)=>{
        return (
            <div>
                <li>Mr. {item.name} <span> {item.score}</span></li>
            </div>
        )
    })
    }
}

export default ListofPlayers;