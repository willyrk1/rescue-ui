import React from 'react'
import StandardLayout from './StandardLayout'

const FormSubmitted = ({ children }) => (
  <StandardLayout>
    <div>
      <h1>Thank You!</h1>
      <hr />
      <p>
        A St. Francis team member will review your submission and contact you
        shortly. {children}
      </p>
    </div>
  </StandardLayout>
)

export default FormSubmitted
