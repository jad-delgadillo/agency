import type { NextPage } from 'next'
import { Main } from '../components/main'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen max-w-7xl m-auto'>
      <Header/>
      <div className='flex font-extralight text-justify m-auto md:pr-[20vw] p-7 md:p-0 text-2xl'>
        <Main/>
      </div>
    </div>
    
  )
}

export default Home
