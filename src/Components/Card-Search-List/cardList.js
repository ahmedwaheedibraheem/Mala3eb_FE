import React from 'react';
import CardItem from '../Card-Result/card-result';
import { Tabs } from 'element-react';
import * as classes from './cardList.module.css';
import Navbar from '../../Containers/Navbar/navbar';

const CardList = (props) => {

    if ((props.location.state.pitchesMatched).length > 0 || (props.location.state.playersMatched).length > 0) {
        return (

            <>
                <Navbar></Navbar>
                <div className={classes.bgimg}>
                    <div className="container" style={{ width: '50rem' }}>
                        <Tabs type="card" value="1" className={classes.tabs}>

                            <Tabs.Pane label="لاعبين" name="1">

                                {props.location.state.playersMatched.map((player) => {
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
                            </Tabs.Pane>
                            <Tabs.Pane label="ملاعب" name="2">
                                {props.location.state.pitchesMatched.map((pitch) => {
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
                            </Tabs.Pane>
                        </Tabs>
                    </div>
                </div>
            </>
        )
    }

    else return (
        <>
            <Navbar></Navbar>
            <div className={classes.bgimg}>
                <div className="container" style={{ width: '50rem' }}>
                    <Tabs type="card" value="1" className={classes.tabs}>

                        <Tabs.Pane label="لاعبين" name="1">
                            <div className="card border-danger mb-3" style={{maxWidth:'30rem',margin:'1rem auto',padding:'2rem'}} >
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <h4 className="card-title">نتائج البحث</h4>
                                    <p className="card-text">لا يوجد نتائج للبحث</p>
                                </div>
                            </div>
                        </Tabs.Pane>
                        <Tabs.Pane label="ملاعب" name="2">
                            <div className="card border-danger mb-3" style={{maxWidth:'30rem',margin:'1rem auto',padding:'2rem'}}>
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <h4 className="card-title">نتائج البحث</h4>
                                    <p className="card-text">لا يوجد نتائج للبحث</p>
                                </div>
                            </div>
                        </Tabs.Pane>
                    </Tabs>
                </div>
            </div>
        </>
    )

}
export default CardList;