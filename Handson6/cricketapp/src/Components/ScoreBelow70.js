import React from 'react';
class ScoreBelow70 extends React.Component {
    state={
        players70:[]
    }
    scoreBelow70() {
        return this.props.players.map((item)=>{
            if(item.score<70) {
                this.state.players70.push(item);
            }
        })
    }
    render() {
        this.scoreBelow70();
        return this.state.players70.map((item)=>{
            return (
                <div>
                    <li>Mr. {item.name} <span> {item.score}</span></li>
                </div>
            )
        })
    }
}


export default ScoreBelow70;
