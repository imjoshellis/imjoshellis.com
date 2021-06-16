import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface ExternalRedirectProps {
  url: string
}

export const ExternalRedirect: React.FC<ExternalRedirectProps & RouteProps> = ({
  url,
  ...RouteParams
}) => {
  return (
    <Route
      {...RouteParams}
      component={() => {
        window.location.replace(url)
        return null
      }}
    />
  )
}

export default ExternalRedirect
