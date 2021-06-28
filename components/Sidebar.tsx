import {AiFillGithub,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import {AiTwotonePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/dist/client/image'

const Sidebar = () => {
    const {theme,setTheme}=useTheme();

    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return (
       
        <div>
            {/* <img src="images/IMG_01605.png" alt="user picture" className="object-top mx-auto rounded-full h-45 w-45"/> */}
         
            <Image className="object-top mx-auto rounded-full h-45 w-45"
                    src="/images/IMG_01605.png"
                    alt="user picture"
                    width={700}
                    height={500}
                />
            
            <h3 className="my-4 text-3xl font-medium tracking-wider">Moktadir Khan</h3>     
            {/* tracking-wider is used for letter spacing */}
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="moktadirkhan.com/Md. Abdul Moktadir Khan - Resume.pdf" download="name">Download Resume</a>

            {/* social icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full" >
                <a href="https://github.com/moktadirkhan"><AiFillGithub className="w-8 h-8 cursor-pointer dark:bg-gray-200"/></a>
                <a href="tel:+8801750671009"><AiTwotonePhone className="w-8 h-8 cursor-pointer dark:bg-gray-200"/></a>
                <a href="https://linkedin.com/in/moktadir-khan"><AiFillLinkedin className="w-8 h-8 cursor-pointer dark:bg-gray-200"/></a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    {/* space-x is used for spacing between letters */}
                    <GoLocation/>
                    <span>Dhaka, Bangladesh</span>
                </div>
                <p className="my-2">moktadirkhan@gmail.com</p>
                
            </div>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full text bg-gradient-to-tr from-blue-700 to-black focus:outline-none" onClick={()=>window.open('mailto:moktadirkhan@gmail.com')}>Mail Me</button>
            {/* <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full text bg-gradient-to-tr from-blue-700 to-black">Toggle Theme</button> */}
        </div>
    )
}

export default Sidebar
