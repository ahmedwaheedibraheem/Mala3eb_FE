import React from 'react';
import {Carousel} from 'element-react';

const SliderImages = (props) => {
    console.log(props.images)
    return (
        <div className="demo-4 medium">
          <Carousel interval="4000" type="card" height="200px">
            {
              props.images.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                   <img src={item}/>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
      )

}
export default SliderImages;
