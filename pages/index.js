import React from 'react'
import Link from 'next/link'

const Index = () => {
  
  return (
    <div>
      <h1>Olá mundo</h1>
      <div>
        <Link href='/demos'>
          <a>Chatbot Demos</a>
        </Link>

      </div>
    </div>  
  )
}

export default Index