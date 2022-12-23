import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './loading.gif'

const spinner =()=> {


  
    return (
      <div>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner
