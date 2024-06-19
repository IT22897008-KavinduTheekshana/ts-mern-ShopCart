import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingBox() {
  return (
    <Spinner animation='"border' role='starus'>
        <span className='visually-hidden'>Loading...</span>
    </Spinner>
  )
}
