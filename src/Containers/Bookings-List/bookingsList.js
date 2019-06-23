import React, { Component } from 'react';
import * as ApiPitch from '../../API/pitch';
import * as classes from './bookingsList.module.css';
import { DatePicker } from 'element-react';
import CardItem from '../../Components/Card-Result/card-result';

class BookingList extends Component {


    async componentDidMount() {
        let res = await ApiPitch.getBookings(this.props.id);
       
    }
    render() {
      
        return (
            <React.Fragment>
                <div>
                    {this.props.pitch.bookings.map((book) => {
                        return (
                          <div className={classes.card}>
                                <div className="card-body row no-gutters">
                                    <div className="col md-9">
                                        <h5>{book.name}</h5>
                                        <hr/>
                                        <p>
                                        <span className={classes.title}>الاسم:</span>{book.name}
                                        <br/>
                                        <span className={classes.title}>من الساعه:</span>{book.from}
                                        <br/>
                                        <span className={classes.title}> الى الساعه:</span>{book.to}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            
                        )
                    })}


                </div>


            </React.Fragment>

        )
    }
}
export default BookingList;