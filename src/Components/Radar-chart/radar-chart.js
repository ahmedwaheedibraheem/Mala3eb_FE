import React from 'react';
import { Radar } from 'react-chartjs-2';
import * as classes from './radar-chart.module.css';

const RadarComponent = (props) => {
    var skills = Object.values(props.data);
    const data = {
        labels: ['التمرير', 'التسديد', 'المرواغه', 'اللياقة', 'السرعة'],
        datasets: [
            {
                label: 'المهارات',
                backgroundColor: '#F39C12',
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
        <div>
            <div className="card border-warning mb-3" style={{ maxWidth: '40rem' }}>
                <div className="card-body">
                    <h4 className={classes.title}>المهارات الشخصية</h4>
                </div>
                <Radar data={data} />
            </div>
            <div className={classes.btndiv}>
                <button disabled type="button" className={`${classes.csbtn} btn btn-primary`}>LB</button>
                <button disabled type="button" className={`${classes.csbtn} btn btn-secondary`}>CB</button>
                <button disabled type="button" className={`${classes.csbtn} btn btn-success`}>GK</button>
            </div>
        </div>
    );
}
export default RadarComponent;