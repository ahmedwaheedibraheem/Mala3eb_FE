import  React,{ Component } from 'react';
import * as classes from './evaluation.module.css';
import RateView from '../Rate/rate';


class Evaluation extends Component {

    render() {
        return (
            <>
            <div className={classes.opacityBack}>
                <div class="card border-primary mb-3" style={{maxWidth:'40rem',margin:'auto',direction:'rtl',
                textAlign:'right',paddingBottom:'2rem'}}>
                    <div class="card-header" style={{backgroundColor:'#000',color:'white'}}>التقييم</div>
                    <div class="card-body">
                        <h4 class="card-title">قم بتقييم اللاعب :-</h4>
                        <div className="row">
                            <div className="col-md-6">
                            <p class="card-text">
                        <ul>
                            <li>التمرير</li>
                            <li>التسديد</li>
                            <li>المراوغه</li>
                            <li>اللياقه</li>
                            <li>السرعه</li>

                        </ul>
                        </p>
                            </div>
                            <div className="col-md-6">
                            <p class="card-text">
                        <ul>
                            <li><RateView></RateView></li>
                            <li><RateView></RateView></li>
                            <li><RateView></RateView></li>
                            <li><RateView></RateView></li>
                            <li><RateView></RateView></li>
                            

                        </ul>
                        </p>
                            </div>

                        </div>
                       
                    </div>
                    <button type="button" class="btn btn-success" style={{padding:'0.7rem',width:'5rem',margin:'auto'}}>تقييم</button>
                </div>
                </div>
            </>
        )
    }
}
export default Evaluation;