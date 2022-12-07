import Link from 'next/link'
import React from 'react'

export default function LinkButton({className,children,...rest}:any) {
  return (
              <Link className={`text-dark bg-indigo-300 border-2 border-black py-2 px-6 hover:bg-lime-600 hover:text-lime-50 rounded text-md shadow-offset-black ${className}`} {...rest}>{children}</Link>

  )
}
