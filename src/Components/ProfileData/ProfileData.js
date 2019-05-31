import React from 'react';
import cssClasses from './ProfileData.module.css';
import '../../Theme/bootstrap.css';

const ProfileData = (props) => {
    return (
        <section className="container text-right">
            <div className="row">
                <div className="col-md-12">
                    <div className={cssClasses.Datacontainer}>
                        <div className={cssClasses.Dataheader}>بيانات</div>
                        {props.children}
                        <div className={cssClasses.Databtn}>
                            <button type="button" className=" btn btn-success" >تعديل</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default (ProfileData);