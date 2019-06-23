import React, { Component } from 'react';
import { Input, DatePicker, Button } from 'element-react';
import * as classes from './pitchBooking.module.css';
import * as ApiPitch from '../../API/pitch';

class PitchBooking extends Component {

    state = {
        date: "",
        name: "",
        from: 0,
        to: 0
    }

    handleChange(name, value) {
        let state = this.state;
        state[name] = value;
        this.setState({ state });
    }
  

    addBooking = async (pitchId, bookingObj) => {
        try {
            await ApiPitch.bookingPitch(pitchId, bookingObj);
            alert('تم اتمام الحجز بنجاح! !');
        }
        catch{
            alert('هذا الحجز موجود مسبقا حاول الحجز بميعاد اخر!');
        }
    }
    render() {
        const { date } = this.state
        return (
            <React.Fragment>
                <div className={classes.pitchForm}>
                    <form onSubmit={(e) => { this.addBooking(this.props.id, this.state); e.preventDefault()}}>
                        <label>ادخل اسمك:</label>
                        <Input placeholder="" name="userName"
                            onChange={this.handleChange.bind(this, 'name')}
                        />
                        <label>اختر اليوم</label>
                        <br />
                        <DatePicker
                            name="date"
                            value={date}
                            placeholder="Pick a day"
                            onChange={date => {
                                this.setState({ date: date })
                            }}
                            disabledDate={time => time.getTime() < Date.now() - 8.64e7}
                        />
                        <br />
                        <label>من الساعه</label>
                        <input placeholder="" type="number" name="from"
                            onChange={(event) => { this.setState({ from: event.target.value }) }}
                        />
                        <label>الى الساعه:</label>
                        <input placeholder="" type="number" name="to"
                            onChange={(event) => { this.setState({ to: event.target.value }) }}
                        />
                        <button type="submit" class="btn btn-success">حجز</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}
export default PitchBooking;