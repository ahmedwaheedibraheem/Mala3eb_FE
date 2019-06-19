import React from "react";
import * as classes from './mytrophy.module.css';

const Mytrophy = (props) => {

  let highlight = {
    boxShadow: "rgb(41, 217, 255) 0px 0px 40px 10px",
    opacity: " 0.8",
    background: "rgb(44, 43, 43)",

  }

  return (
    <div
      style={localStorage.getItem('id') === props.id ? highlight : null}
      // align='middle'
      id={props.id}
      className={classes.separator + ' row'}>


      <div className="col-md-4">
        <div>

          <img className={classes.imageUrl} src={props.imageUrl} alt="" />
        </div>

      </div>



      <div className={classes.trophycontent + " col-md-8"} >
        <div>
          <div ><h4 className={classes.name + " row "} >{props.name}</h4> </div>


          <div className={classes.price}><span className={classes.rank + " row"}>  التقييم </span>{props.rank}</div>


          <div className={classes.description + " row"} align="right" >{props.description}</div>

        </div>
      </div>


    </div>
  )
}

export default Mytrophy;