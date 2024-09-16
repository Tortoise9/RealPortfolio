import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from './../../assets/again.png'
import profilePic from './../../assets/profile.jpg'
const Navbar = () => {
 
    const [number,setNumber] = useState(0)
    const [{color,bgcolor},setAll] =useState({
        color:"black",
        bgcolor:"bg-cyan-50"
    })
    
    let optionme = [0,1];
   
    // function handleme(){
        
    //     let threedotContent = document.querySelector('.first');
    //     let timetohide = document.querySelector('.disppearme');
    //     let crossme = document.querySelector('.cross');
    //     let smallme = document.querySelector('.logosm');
    //     console.log(threedotContent)
    //     console.log(timetohide)
    //     threedotContent.style.display = 'flex';
        
    //     timetohide.style.display = "none"
    //     smallme.style.display="none"
    //     crossme.style.display = "block"

    // }
    // function Crossme(){
    //     let smallme = document.querySelector('.logosm');
    //     let threedotContent = document.querySelector('.first');
    //     let timetohide = document.querySelector('.disppearme');
    //     let crossme = document.querySelector('.cross');
    //     console.log(crossme)
    //     smallme.style.display="block"
    //     timetohide.style.display = "inline-block";
    //     crossme.style.display = "none";
    //     threedotContent.style.display = "none";
    // }
    function toggleMe(){
       var bg = document.body;
       let  bordersmall = document.querySelector(".first")
       let toggle = document.querySelector(".LightToggle")
       setNumber(number+1)
      let  choice= optionme[(number)%2]
       console.log(choice)
       
       if(choice===0){
    //    black mode 
    bg.style.color ="#ecfeff"
           bg.style.backgroundColor = "#374151"
           toggle.style.backgroundColor ="#374151"
           bordersmall.style.backgroundColor="black"
        //    bordersmall.style.borderColor  = "grey"
        }
        else{
            // whitemode
            
          bg.style.color="black"
            bg.style.backgroundColor = "#ecfeff"
           toggle.style.backgroundColor ="#ecfeff"
           bordersmall.style.borderColor = "#cffafe"
           bordersmall.style.backgroundColor="white"
        }
    }
  
function HideMeCross(){


        console.log("hiding")
        let optionme = document.querySelector('.optionme')
        console.log(optionme)
        optionme.style.display ='none'
      

    
}

function showme(){
   

    console.log("showing")
    let optionme = document.querySelector('.optionme')
    console.log(optionme)
    optionme.style.display = "block"

        

}
const [hideme , sethideme] = useState(false)
const [count , setcount]  = useState(0)
function profile(){
    setcount(count+1)
    let result = count%2
    if(result===1){

        console.log('hello')
        const profile = document.querySelector('.profile')
        profile.style.display = "block"
    }
    else if(result===0){
        // console.log(hideme)
         const profile = document.querySelector('.profile')
        profile.style.display = "none"
    }
}
function overcontent(){
    let contentme = document.querySelector('.documentme')
    contentme.style.display='block'

}

  return (
    <div className='mt-4'>
        <section className='h-[40px] flex justify-end'>
            <div>
                
            </div>
            {/* symbol */}
            <div >
                <ul className='flex gap-5 mr-20 relative'>
                    {/* bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 */}
                    {/* h-full w-full bg-fuchsia-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-90 backdrop-saturate-50 backdrop-contrast-125 */}
                    {/* bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 */}
                            <li className='mt-1' ><svg class="h-4 w-4 stroke-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M21 21L15.8091 15.8091M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></li>
                            <li className='cursor-pointer'><svg onClick={toggleMe} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q-1.671 0-2.836-1.164T8 12q0-1.671 1.164-2.836T12 8q1.671 0 2.836 1.164T16 12q0 1.671-1.164 2.836T12 16M2 12.5q-.213 0-.356-.144Q1.5 12.212 1.5 12t.144-.356Q1.788 11.5 2 11.5h2.5q.213 0 .356.144Q5 11.788 5 12t-.144.356q-.143.143-.356.143zm17.5 0q-.213 0-.356-.144Q19 12.212 19 12t.144-.356q.144-.143.356-.143H22q.213 0 .356.144q.144.144.144.357t-.144.356q-.143.143-.356.143zM12 5q-.213 0-.357-.144q-.143-.143-.143-.356V2q0-.213.144-.356q.144-.144.357-.144t.356.144q.143.144.143.356v2.5q0 .213-.144.356Q12.212 5 12 5m0 17.5q-.212 0-.356-.144q-.143-.143-.143-.356v-2.5q0-.213.144-.356Q11.788 19 12 19t.356.144q.143.144.143.356V22q0 .213-.144.356q-.144.144-.357.144M6.362 7.03l-1.44-1.395q-.147-.14-.144-.345q.003-.203.149-.369q.16-.165.354-.165q.194 0 .354.165L7.05 6.342q.16.166.16.354q0 .189-.15.354t-.342.153q-.191-.013-.356-.172m12.003 12.048l-1.415-1.421q-.16-.166-.16-.357q0-.191.16-.351q.13-.165.327-.153t.361.172l1.44 1.396q.147.14.144.345q-.003.203-.149.369q-.16.165-.354.165q-.194 0-.354-.165M16.95 7.059q-.165-.15-.153-.34t.172-.357l1.396-1.44q.14-.147.345-.144q.203.003.369.149q.165.16.165.354q0 .194-.165.354L17.658 7.05q-.166.16-.354.16q-.189 0-.354-.15M4.921 19.083q-.165-.17-.165-.364q0-.194.165-.354l1.421-1.415q.166-.16.357-.16q.191 0 .351.16q.146.13.134.327t-.153.361l-1.396 1.44q-.16.166-.354.163q-.194-.003-.36-.158"/></svg></li>
                            <li ><div className='p-1 rounded-full border-blue-200 border-2 text-[12px] font-poppin cursor-pointer'><a href='src\assets\Profile.pdf '>Download CV</a></div></li>
                            <li className='cursor-pointer relative' onClick={profile} ><svg class="h-6 w-6 stroke-current " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </li>
                          {/* h-full w-full bg-sky-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 */}
                            <div className='profile hidden h-25 w-[250px] z-10 rounded-md absolute top-10 right-0 left-0  bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 '> 
                                    {/* profile picture */}
                                    <p className='text-center text-xl font-ibm-plex-mono'>profile</p>
                                    <hr/>
                                <div className='ml-2'>
                                
                                  <div className="flex space-x-4 "><img className='rounded-full' src={profilePic} width={80} height={80}/>
                                 <div><p >@sushilpandey9</p>
                                 <p>Sushil Pandey</p>
                                 </div> 
                                  </div>
                                </div>
                                <hr />
                                
                                <div className='relative'  >
                                    

                                    <div className='text-center'> <button className=' rounded-md bg-blue-400 p-1  text-white inline-block ' onMouseOver={overcontent}><svg style={{display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="15px" fill="blue"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>&nbsp;sign in </button></div>
                                </div>

                            </div>
                           
                </ul>
            </div>
           
        </section>


    {/* for large screen and medium */}
    <section className='hidden sm:block'>
        <nav className='flex justify-between'>
            <span className='ml-3 p-5'><img src={image} width={90} height={90} /></span>

        <div className='inline-block'>
        <ul className='flex   bg-cyan-50-500 justify-end items-center flex-wrap gap-x-4 mr-10 py-4 px-10 border-8 border-cyan-10 rounded-full'>
            <li className='font-ibm-plex-mono hover:border-b-4 cursor-pointer border-blue-400 duration-200 hover:scale-50 hover:z-10 delay-100'><Link to="/">Home</Link></li>
            <li className='font-ibm-plex-mono hover:border-b-4 cursor-pointer border-blue-400 duration-200 hover:scale-50 hover:z-10 delay-75'><Link to="/about">About</Link></li>
            <li className='font-ibm-plex-mono hover:border-b-4 cursor-pointer border-blue-400 duration-200 hover:scale-50 hover:z-10 delay-75'><Link to="/blogs">Blogs</Link></li>
            <li className='font-ibm-plex-mono hover:border-b-4 cursor-pointer border-blue-400 duration-200 hover:scale-50 hover:z-10 delay-75'><Link to="/projects">Projects</Link></li>
            {/* light mode */}
            {/* dark mode */}
            {/* <li><svg xmlns="http://www.w3.org/2000/svg" width="undefined" height="undefined" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q-1.671 0-2.836-1.164T8 12q0-1.671 1.164-2.836T12 8q1.671 0 2.836 1.164T16 12q0 1.671-1.164 2.836T12 16M2 12.5q-.213 0-.356-.144Q1.5 12.212 1.5 12t.144-.356Q1.788 11.5 2 11.5h2.5q.213 0 .356.144Q5 11.788 5 12t-.144.356q-.143.143-.356.143zm17.5 0q-.213 0-.356-.144Q19 12.212 19 12t.144-.356q.144-.143.356-.143H22q.213 0 .356.144q.144.144.144.357t-.144.356q-.143.143-.356.143zM12 5q-.213 0-.357-.144q-.143-.143-.143-.356V2q0-.213.144-.356q.144-.144.357-.144t.356.144q.143.144.143.356v2.5q0 .213-.144.356Q12.212 5 12 5m0 17.5q-.212 0-.356-.144q-.143-.143-.143-.356v-2.5q0-.213.144-.356Q11.788 19 12 19t.356.144q.143.144.143.356V22q0 .213-.144.356q-.144.144-.357.144M6.362 7.03l-1.44-1.395q-.147-.14-.144-.345q.003-.203.149-.369q.16-.165.354-.165q.194 0 .354.165L7.05 6.342q.16.166.16.354q0 .189-.15.354t-.342.153q-.191-.013-.356-.172m12.003 12.048l-1.415-1.421q-.16-.166-.16-.357q0-.191.16-.351q.13-.165.327-.153t.361.172l1.44 1.396q.147.14.144.345q-.003.203-.149.369q-.16.165-.354.165q-.194 0-.354-.165M16.95 7.059q-.165-.15-.153-.34t.172-.357l1.396-1.44q.14-.147.345-.144q.203.003.369.149q.165.16.165.354q0 .194-.165.354L17.658 7.05q-.166.16-.354.16q-.189 0-.354-.15M4.921 19.083q-.165-.17-.165-.364q0-.194.165-.354l1.421-1.415q.166-.16.357-.16q.191 0 .351.16q.146.13.134.327t-.153.361l-1.396 1.44q-.16.166-.354.163q-.194-.003-.36-.158"/></svg></li> */}
        </ul>
        </div>
        {/* last  */}
     
        </nav>
    </section>


{/* small screen */}

    {/* <section className=' hidden max-sm:block'>
        <nav className='flex justify-between'>
             <span className='ml-3 p-5'><img src={image} width={90} height={90} /></span>
        <div className='inline-block mr-5 ' >

        <ul className='first   hidden   bg-white flex-col z-10  items-center text-center  w-screen  shadow-md rounded-l-lg  border-8 border-cyan-50   '>
            <li onClick={Crossme} className='cross cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/">Home</Link></li>
            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/about">About</Link></li>
            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/blogs">Blogs</Link></li>
            <li className="w-screens mb-4 text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/projects">Projects</Link></li>
            
        </ul>
            <span onClick={handleme} className='disppearme cursor-pointer inline-block mr-10'><svg width="30px" height="70px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><line fill="none" id="XMLID_103_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="16" y2="16"/><line fill="none" id="XMLID_102_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="25" y2="25"/><line fill="none" id="XMLID_101_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="7" y2="7"/></svg></span>
        </div>
        </nav>
    </section> */}
    {/* h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 */}
    {/* h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 */}
     <section className=' hidden max-sm:block'>
        <nav className='flex justify-between'>
             <span className='ml-3 p-5'><img src={image} width={90} height={90} /></span>
        <div className='' >
            <ul className='optionme w-screen hidden text-center absolute left-0 \ bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 rounded-sm'>
            <li onClick={HideMeCross} className='cross cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#C73E1D"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>

            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/">Home</Link></li>
            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/about">About</Link></li>
            <li className="w-screens text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/blogs">Blogs</Link></li>
            <li className="w-screens mb-4 text-2xl cursor-pointer hover:border-b-4 hover:text-3xl duration-100"><Link to="/projects">Projects</Link></li>
                
            </ul>
            <span onClick={showme}  className='disppearme cursor-pointer inline-block mr-10'><svg width="30px" height="70px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><line fill="none" id="XMLID_103_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="16" y2="16"/><line fill="none" id="XMLID_102_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="25" y2="25"/><line fill="none" id="XMLID_101_" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="7" y2="7"/></svg></span>

       
        </div>
        </nav>
    </section>
    </div>
  )
}

export default Navbar
