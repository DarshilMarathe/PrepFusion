import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ToastNotification() {
  return (
    <>
        <ToastContainer autoClose={5000} />
    </>
  )
}
