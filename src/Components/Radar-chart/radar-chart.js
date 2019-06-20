import React from 'react';
import { Radar } from 'react-chartjs-2';
import * as classes from './radar-chart.module.css';
import { withRouter } from 'react-router-dom';

const RadarComponent = (props) => {
    var values = Object.values(props.data);
    var skills = values.every(el => el === 0) ? [null] : values;
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.label,
                backgroundColor: 'rgb(225, 46, 28,.5)',
                borderWidth: '3px',
                borderColor: 'rgb(225, 46, 28)',
                pointBackgroundColor: 'rgb(225, 46, 28)',
                pointBorderColor: 'rgb(225, 46, 28)',
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: skills,
            }
        ]
    };
    return (
        <div className="col-6"
            style={{
                border: "3px solid black",
                marginTop: "2.3rem",
                borderRadius: "3px",
                background: 'white',
                paddingTop: '.5rem',
                border: '1px solid white'

            }}>

            <div
                style={{
                    background: "white",
                    width: "100%",
                    borderRadius: "3px",
                }}>
                <Radar data={data} />
                <div className={classes.btndiv}>
                    <button disabled type="button" className={`${classes.csbtn} btn btn-warning `}>{props.favPosition}</button>
                    <button
                        onClick={() => { props.history.push(`/evaluation/${props.id}`) }}
                        type="button" className="btn btn-danger">تقييم</button>
                </div>
            </div>
        </div>
    );
}
export default withRouter(RadarComponent);