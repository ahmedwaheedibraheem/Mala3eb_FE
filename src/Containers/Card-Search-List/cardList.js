import React from 'react';
import CardItem from '../Card-Result/card-result';

const CardList = (props) => {
    if (props.location.state.pitchesMatched || props.location.state.playersMatched) {
        return (
            <>
                <div className="container" style={{ width: '50rem' }}>
                    {props.location.state.pitchesMatched.map((pitch) => {
                        console.log(pitch._id);
                        return (
                            <React.Fragment key={pitch._id}>
                                <CardItem
                                    id={pitch._id}
                                    name={pitch.name}
                                    address={pitch.address}
                                    mobileNo={pitch.mobileNo}
                                    rate={pitch.rate}
                                    image={pitch.imgURL}>
                                    <br />
                                    <span style={{ fontWeight: 600, fontSize: '18px', marginLeft: '1rem', color: '#415260' }}>التقييم  :</span>{props.rate}
                                </CardItem>
                            </React.Fragment>
                        )
                    })}
                    {props.location.state.playersMatched.map((player) => {
                        console.log(player._id);
                        return (
                            <React.Fragment key={player._id}>
                                <CardItem
                                    id={player._id}
                                    name={player.name}
                                    address={player.address}
                                    mobileNo={player.mobileNo}
                                    age={player.age}
                                    image={player.imgURL}
                                    address={player.address}
                                ></CardItem>
                            </React.Fragment>
                        )
                    })}
                </div>
            </>
        )
    }
    else return null;
}

export default CardList;