import React from 'react'
import { Alert } from 'react-bootstrap'

export default function MeessageBox( {
    variant = 'info',
    children,

}: {
    variant?: string
    children: React.ReactNode
}) {
  return (
    <Alert variant={variant || 'info'}>{children}</Alert>
  )
}
