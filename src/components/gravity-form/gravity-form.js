import React from "react"
import GravityFormForm from "gatsby-gravityforms-component"
import { AllGravityData } from "../../hooks/gravityforms"
import { navigate } from "gatsby"
import "./gravityFormStyles.scss"

function handleError({ values, error, reset }) {
  console.log(error)
  console.log(values)
}

function handleSuccess({ values, reset, confirmations }) {
  reset()
  navigate("/contact/thank-you")
}

const GravityForm = props => (
  <GravityFormForm
    id={1}
    formData={AllGravityData()}
    lambda={`/.netlify/functions/newGfEntry`}
    successCallback={handleSuccess}
    errorCallback={handleError}
    className={props.className}
  />
)

export default GravityForm
