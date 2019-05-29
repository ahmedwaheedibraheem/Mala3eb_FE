import React from "react";
import * as classes from './mytrophy.module.css';

const Mytrophy = (props) => {

  let highlight = {
    boxShadow: "rgb(43, 187, 43) 0px 0px 20px 0px"
  }

  return (
    <tbody
      style={localStorage.getItem('id') === props.id ? highlight : null}
      align='middle'
      id={props.id}
      className={classes.separator}>
      <tr className={classes.firstRow}>
        <td className='rowspan' rowSpan="4" style={{ borderTop: 'none' }}>
          <div className={classes.imageContainer} >
            <img className={classes.imageUrl} src={props.imageUrl} alt="" />
          </div>
        </td>
        <td style={{ borderTop: 'none' }}><h4 className={classes.name} >{props.name}</h4> </td>
      </tr>
      <tr>
        <td className={classes.price}>{props.rank}<span className={classes.rank}> Rank </span></td>
      </tr>
      <tr>
        <td className={classes.description}>{props.description}</td>
      </tr>
    </tbody>
  )
}

export default Mytrophy;