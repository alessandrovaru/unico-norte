import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './styles.scss'

import { Mousewheel, Pagination } from "swiper";

const MainCarrousel = () => {
  return (
    <Swiper 
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper">
      <SwiperSlide>
        <div className='main-carrousel'>
          <Container>
            <Row>
              <Col md={4} lg={4} xl={4} className="carrousel-title">
                <h1>Daniela Barranco</h1>
                <h2>Odio</h2>
              </Col>
              <Col md={8} lg={8} xl={8} >
                <div className="main-gif">
                  <div> 
                    ODIO
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main-carrousel'>
          <Container>
            <Row>
              <Col className="carrousel-title">
                <h1>Daniela Barranco</h1>
                <h2>Odio</h2>
              </Col>
              <Col>
                <div className="main-gif">
                  <div> 
                    Main Div
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default MainCarrousel