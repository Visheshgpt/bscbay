import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const partnerArray = [{
  name: '0xguard', imgurl:'guard.jpg', links:'https://0xguard.com/'
},
  {
    name: 'Flooz', imgurl:'flooz.png', links:'https://www.flooz.trade/buzz'
  },
  {
  name: 'Solid Proof', imgurl:'sp.png', links:'https://solidproof.io/'
},{
  name: 'SER Investment', imgurl:'sers.jpg', links:'https://sersinvestmentgroup.com/'
},{
  name:'Herd Ventures', imgurl: 'herd.jpg', links:'https://www.herd-ventures.com/'
}]

const HomeSectionPartnership = () => {
  const imagesArr = [{ key: 0 }, { key: 1 }, { key: 2 }];

  const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
 
// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

  return (
    <section className="py-5 bg-color-homepage-section-one text-white partnerpage">
      <Container fluid="xxl">
        <Row>
          <Col lg={12} sm={12}>
           
            <div className="border-secondary py-4 partners">
             
                <Row
                  className="justify-content-center align-items-center"
                  style={{ gap: 30 }}
                >
                  <Col lg={12}>
                    <h1 className="text-center">Official Partners</h1>
                  </Col>
                  <div>
        <Slider {...settings}>
          {partnerArray.map((item) => (
            <div>
              <a href={item.links} target="_blank" rel="noreferrer">
               <div className="slider_item">   
                  <div className="slider_item_img">
    
                        <img
                            className="w-100"
                            src={`./assets/partners/${item.imgurl}`}
                            alt={item.name}
                          />
                       
                  </div>
                  <div className="flexCenter my-4">
                    <h6 className="text-primary">{item.name}</h6>
                  </div>
              </div>
              </a>
            </div>
          ))}
        
        
        </Slider>
      </div>
                </Row>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSectionPartnership;
