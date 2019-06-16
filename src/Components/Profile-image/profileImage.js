import React from 'react';
import '../../Theme/bootstrap.css';
import * as classes from './profileImage.module.css';
import {Card , Layout} from 'element-react';

const ProfileImage = (props) => {
    return (
        <>
         <Layout.Col span={ 26 } offset={ 0 } >
        <Card bodyStyle={{ padding: 0 }}  >
        <div style={{overflow:'hidden'}}>
          <img src={props.image} className="image" className={classes.imgProfile} />
          </div>
          <div style={{ padding: 14,border:'2px solid #18BC9C' }}>
            <span className={classes.userName}> {props.name}</span>
          </div>
        </Card>
      </Layout.Col>
        </>
    );
}

export default ProfileImage;