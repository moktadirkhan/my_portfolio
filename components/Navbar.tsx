import React from 'react'
import {FunctionComponent, useState,useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function, 
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem}) => {
    return activeItem!==name ? (
            <Link href={route}>
                <a>
                    <span onClick={()=>setActiveItem(name)} className="hover:text-blue-800">{name}</span>
                </a>
            </Link>
        
    ):null
}


const Navbar = () => {
    // for the active element in the navbar
    const [activeItem, setactiveItem] = useState<string>('')
    // for making urls of pages
    const {pathname} = useRouter()
    useEffect(() => {
        if(pathname=="/")setactiveItem('About')
        if(pathname=="/projects")setactiveItem('Projects')
        if(pathname=="/resume")setactiveItem('Resume')
    }, [])
    return (
        <div className="flex justify-between px-5 py-3 my-3 md:text-2xl">
            {/* for the element which active */}
            <span className="text-xl font-bold text-blue-800 border-b-4 border-blue-800">{activeItem}</span>
            {/* for the element which are not active */}
            <div className="flex space-x-5 text-lg"> 
                {/* checking the active element and putting validation */}
                <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="About" route="/"/>
                <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Projects" route="/projects"/>
                <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Resume" route="/resume"/>
            </div>
        </div>
    )
}

export default Navbar
