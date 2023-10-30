import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'

const SeccionNoticias = props => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img1.jpg"
          alt="Primera noticia"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img2.jpeg"
          alt="Primera noticia"
        />
      </Carousel.Item>
    </Carousel>
  )
}

SeccionNoticias.propTypes = {}

export default SeccionNoticias