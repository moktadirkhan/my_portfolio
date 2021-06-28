import {IconType} from 'react-icons'

export interface IService{
    title:string,
    about:string,
    Icon:IconType
}

export interface ISkill{
    name:string,
    level:string,
    Icon:IconType
}

export interface IProject{
    id:number,
    name:string,
    description:string,
    image_path:string,
    github_url:string,
    category:string[],
    key_tech:string[]
}
export type Category="Next.js"|"Laravel"|"Django"|"PHP";