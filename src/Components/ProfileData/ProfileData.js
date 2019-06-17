import React from 'react';
import * as classes from './ProfileData.module.css';
import '../../Theme/bootstrap.css';
import image from '../../Assets/commentImg.png'

const ProfileData = (props) => {
  return (
    <>
      <div className="card border-success" style={{ marginTop: '1rem' }}>
        <div className={classes.profileData}>
          <div className="card-header" style={{
            backgroundColor: '#000', color: 'white', fontWeight: 'bold',
            fontSize: 20
          }}>البيانات</div>
          <div className="card-body">
            {props.children}
          </div>
          <button type="button" className="btn btn-success" style={{ float: "left", margin: '1rem' }}>تعديل</button>
        </div>
      </div>
    </>
  )
}
export default (ProfileData);