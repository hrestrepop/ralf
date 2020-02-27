import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, title }) => {
  return (
    <section className="section" style={{ maxWidth: '500px' }}>
      <div className="container">
        <h4
          className="is-size-5 has-text-grey is-family-secondary"
          style={{ marginBottom: '10px' }}
        >
          {title}
        </h4>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

Section.defaultProps = {
  title: ''
}

export default Section
