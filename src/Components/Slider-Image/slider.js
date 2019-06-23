import React from 'react';
import { Carousel } from 'element-react';

const SliderImages = (props) => {
  let dataImages=["https://www.cricket365.com/content/uploads/2016/08/picture-5333.jpg",
                   "https://images.mylocalpitch.com/large/pitch_image_1441617168_79835.jpeg",
                  "https://www.wycombewanderers.co.uk/siteassets/image/news-articles/april-2018/pitch-of-the-year.jpg/Large",
              "https://www.haverhillecho.co.uk/_media/img/750x0/L1P1WMYJNE57HELBXWO5.jpg"]
  return (
    <div className="demo-4 medium">
      <Carousel interval="4000" type="card" height="20rem">
        {
          dataImages.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item} />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}
export default SliderImages;