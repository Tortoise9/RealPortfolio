import React from 'react'
import computerboy from '../assets/computerboy.png'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import myphoto from './../assets/myself.jpg'
import './../Pages/css/contentpage.css'
const ContentPage = () => {
  return (
    <div>
          <div className='m-20'>
        <section className=" relative flex justify-between flex-wrap">
          {/* text section */}
          <section className=' flex justify-center items-center' >

          <div className='alltext relative text-[1.5rem]  font-ibm-plex-mono'>Hello World 👋 <br/> <em className='font-cursivesac '>I'm</em> <div className='inline-block relative'> <strong className='displayname text-4xl font-thin font-playfair'>Sushil Pandey</strong></div><br/><em >Full Stack Web and Mobile Developer</em>   </div>

          {/* <div className=''><img src={computerboy}/></div> */}

          {/* middle1 */}
          <section>
            
          </section>
          {/* middle2 */}
          <section>
          
          </section>
        {/* Image section */}
        </section>
        <div className='imageme'>
          <img className=' p-2 rounded-2xl' src={myphoto} width={250} height={250} alt="" />
        </div>
        </section>
      

      </div>
      <div>
      </div>
    </div>
  )
}

export default ContentPage