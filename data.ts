import {RiComputerLine} from 'react-icons/ri'
import { IProject, IService, ISkill } from './type'
import {FaServer} from 'react-icons/fa'
import { AiOutlineAntDesign,AiOutlineApi } from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'
// getting the struture from type.ts
export const services:IService[]=[
    {
        Icon:RiComputerLine,
        title:"Frontend Developement",
        about:"Experienced in <b> HTML</b>,<b> CSS </b>,<b> Bootstrap </b> and <b> React.js </b>",
        
    },
    {
        Icon:FaServer,
        title:"Backend Developement",
        about:"Experienced in <b> Laravel </b>, <b> Django </b>, <b> PHP </b> and <b> Next.js </b>",
        
    },

]

export const languages:ISkill[]=[
    {
        name:'Python',
        level:'70',
        Icon:BsCircleFill
    },
    {
        name:'C/C++',
        level:'90',
        Icon:BsCircleFill
    },
    {
        name:'PHP',
        level:'60',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'70',
        Icon:BsCircleFill
    },
    
    
]

export const Backend:ISkill[]=[
    {
        name:'Laravel',
        level:'60',
        Icon:BsCircleFill
    },
    {
        name:'Django',
        level:'70',
        Icon:BsCircleFill
    },
    {
        name:'Next.js',
        level:'30',
        Icon:BsCircleFill
    }
    
]

export const Projects:IProject[]=[
    {
        id:1,
        name:"Docket",
        description:"This project was made for academic purpose.A website to keep track of Anime, Movies, Tv Series, Games and Books. Also writing review blogs and sharing with friends",
        image_path:"/images/Docket.png",
        github_url:"https://github.com/moktadirkhan/Docket",
        category:["PHP"],
        key_tech:["PHP","Javascript","HTML","CSS"]
    },
    {
        id:2,
        name:"Watch Store",
        description:"This project was made for self-developement.A ecommerce website for watch store done with laravel frame work with admin dashboard.",
        image_path:"/images/watch_store.png",
        github_url:"https://github.com/moktadirkhan/Ecommerce_watch_store_with_Dashboard",
        category:["Laravel"],
        key_tech:["Laravel","PHP","HTML","CSS"]
    }


]