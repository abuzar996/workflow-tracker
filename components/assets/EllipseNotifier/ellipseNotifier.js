import React from 'react'
import Ellipse from '../EllipseWrapper'
import Typography from '../Typography'
const EllipseNotifier = ({children,value}) => {
  return (
    <Ellipse size='md' theme='opaque'>
        {children}
        <Ellipse size='xs' theme='primary'>
             <Typography font='info' theme='primary'>{value}</Typography>
        </Ellipse>
       
    </Ellipse>
  )
}

export default EllipseNotifier