import React from 'react';
import { Radar } from 'react-chartjs-2';
import * as classes from './radar-chart.module.css';

const RadarComponent = (props) => {
    var values = Object.values(props.data);
    var skills = values.every(el => el === 0) ? [null] : values;
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.label,
                backgroundColor: '#rrggbb',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: skills
            }
        ]
    };
    return (

        <div className="card" style={{ maxWidth: '40rem' }}>
            <div className="card-body">
                <h4 className={classes.title}>المهارات الشخصية</h4>
            </div>
            <Radar data={data} />
            <div className={classes.btndiv + " bg-white p-3"}>
                <button disabled type="button" className={`${classes.csbtn} btn btn-primary `}>{props.favPosition}</button>
            </div>
        </div>

    );
}
export default RadarComponent;