import React from 'react'

interface TemplatePropTypes {}

export const TemplateView: React.FC<TemplatePropTypes> = () => {
  let classes = {
    base: ''
  }
  return <div className={classes.base} />
}

export default TemplateView
