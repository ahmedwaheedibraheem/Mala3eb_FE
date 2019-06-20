import React, { Component } from 'react';
import * as classes from './evaluation.module.css';
import { Rate } from 'element-react';
import 'element-theme-default';
import * as EvaluateAPI from '../../API/evaluation';

class Evaluation extends Component {
    state = {
        pass: 0,
        shoot: 0,
        dribble: 0,
        fitness: 0,
        speed: 0
    }

    evaluateHandler() {
        let playerId = this.props.match.params.playerId;
        EvaluateAPI.evaluatePlayer(playerId, this.state).then(() => {
            this.props.history.push(`/profile/${playerId}`);
        })
    }
    render() {
        return (
            <>
                <div className={classes.opacityBack}>
                    <div className="card border-primary mb-3" style={{
                        maxWidth: '40rem', margin: 'auto', direction: 'rtl',
                        textAlign: 'right', paddingBottom: '2rem'
                    }}>
                        <div className="card-header" style={{ backgroundColor: '#000', color: 'white' }}>التقييم</div>
                        <div className="card-body">
                            <h4 className="card-title">قم بتقييم اللاعب :-</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card-text" className={classes.list}>
                                        <ul>
                                            <li>التمرير</li>
                                            <li>التسديد</li>
                                            <li>المراوغه</li>
                                            <li>اللياقه</li>
                                            <li>السرعه</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-text" className={classes.list}>
                                        <ul>
                                            <li><Rate onChange={(value) => { this.setState({ pass: value }) }}></Rate></li>
                                            <li><Rate onChange={(value) => { this.setState({ shoot: value }) }}></Rate></li>
                                            <li><Rate onChange={(value) => { this.setState({ dribble: value }) }}></Rate></li>
                                            <li><Rate onChange={(value) => { this.setState({ fitness: value }) }}></Rate></li>
                                            <li><Rate onChange={(value) => { this.setState({ speed: value }) }}></Rate></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { this.evaluateHandler() }}
                            type="button" className="btn btn-success" style={{ padding: '0.7rem', width: '5rem', margin: 'auto' }}>تقييم</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Evaluation;