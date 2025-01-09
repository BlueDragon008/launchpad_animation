import React from 'react'
import logo_white from '../assets/logo-white.png'
export default function Header() {
  return (
    <div className='bg-black  py-5 fixed sm:w-auto w-1/3'>
        <img alt='img' src={logo_white} className=''></img>
    </div>
  )
}
