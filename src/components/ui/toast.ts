import React from "react"

// Lightweight typing for toast system used by use-toast.ts
export type ToastActionElement = React.ReactNode

export type ToastProps = {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  // allow consumers to render a trailing action area if desired
  action?: ToastActionElement
}
