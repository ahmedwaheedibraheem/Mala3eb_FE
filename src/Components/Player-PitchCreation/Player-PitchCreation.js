import React from 'react';
import classes from './Player-PitchCreation.module.css';
import Navbar from '../../Containers/Navbar/navbar';
import { Layout, Card } from 'element-react';
import { withRouter} from 'react-router-dom';

const PlayerPitchCreation = props => {
  return (
    <>
      <Navbar className="row" />
      <div className={classes.bgimg} >
        <div className="container" className={classes.cards}>
          <Layout.Row>
          <Layout.Col span={6} offset={2}>
              <Card bodyStyle={{ padding: 0 }} className={classes.card}>
               <div style={{overflow:'hidden'}}>
                <img src="https://d3u4pi4hof4b65.cloudfront.net/uploads/photograph/image/4308/regular_3G_Pitch_-_Fa_Registered_Brownedge.jpg" className="image" />
               </div>
                <div style={{ padding: 14 }}>
                  <a onClick={()=>{props.history.push(`/createpitch`)}} className={classes.title}>كون ملعبك</a>
                  <div className="bottom clearfix">
                  </div>
                </div>
              </Card>
            </Layout.Col>
            <Layout.Col span={6} offset={1}>
              <Card bodyStyle={{ padding: 0 }} className={classes.card}>
               <div style={{overflow:'hidden'}}>
                <img src="https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/288122/7/1518074651_bd988.jpg" className="image" />
               </div>
                <div style={{ padding: 14 }}>
                  <a onClick={()=>{props.history.push(`/createplayer`)}} className={classes.title}>كن لاعب </a>
                  <div className="bottom clearfix">
                  </div>
                </div>
              </Card>
            </Layout.Col>
            <Layout.Col span={6} offset={1}>
              <Card bodyStyle={{ padding: 0 }} className={classes.card}>
               <div style={{overflow:'hidden'}}>
                <img src="http://www.wruf.com/wp-content/uploads/2017/12/george-anthony-westbrook-660x330.jpg" className="image" />
               </div>
                <div style={{ padding: 14 }}>
                  <a onClick={()=>{props.history.push(`/createcollection`)}} className={classes.title}>انشاء تجمع</a>
                  <div className="bottom clearfix">
                  </div>
                </div>
              </Card>
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>
    </>
  )




}

export default withRouter(PlayerPitchCreation);