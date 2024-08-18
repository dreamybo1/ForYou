import React from 'react'
import Content from './app/layouts/content/Content'
type PropTypes = {
    children?: React.ReactElement | any,
    
}
function App({children}: PropTypes) {
  return (
    <Content>
        {children}
    </Content>
  )
}

export default App