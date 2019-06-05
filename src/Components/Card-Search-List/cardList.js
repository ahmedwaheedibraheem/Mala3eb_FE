import React, { Component } from 'react';
import CardItem from '../Card-Result/card-result';

const CardList = (props) => {
    if (props.location.state.pitchesMatched || props.location.state.playersMatched) {
        return (
            <>
                <div className="container" style={{ width: '50rem' }}>
                    {props.location.state.pitchesMatched.map((pitch, index) => {
                        console.log(pitch._id);
                        return (
                            <React.Fragment key={pitch._id}>
                                <CardItem
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
                    {props.location.state.playersMatched.map((palyer, index) => {
                        console.log(palyer._id);
                        return (
                            <React.Fragment key={palyer._id}>
                                <CardItem
                                    name={palyer.name}
                                    address={palyer.address}
                                    mobileNo={palyer.mobileNo}
                                    age={palyer.age}
                                    image={palyer.imgURL}
                                    address={palyer.address}
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