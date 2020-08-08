import React, { FunctionComponent } from 'react'

interface TemplatePropTypes {}

export const TemplateView: FunctionComponent<TemplatePropTypes> = () => {
  let classes = {
    base: ''
  }
  return <div className={classes.base} />
}

export default TemplateView
