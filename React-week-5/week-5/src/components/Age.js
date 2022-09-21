import React from 'react'
import PropTypes from 'prop-types'

const Age = ({name, age}) => {
  return `In 5 years ${name} will be ${age + 5}`
}

Age.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Age