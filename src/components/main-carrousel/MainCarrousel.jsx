import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './styles.scss'

const MainCarrousel = () => {
  return (
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
  )
}

export default MainCarrousel