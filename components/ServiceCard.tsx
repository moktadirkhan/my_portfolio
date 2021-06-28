import React, { FunctionComponent } from 'react'
import { IService } from '../type'

// here functioncomponent is defining the type of properties , here servicecard is returning the functionalcomponent
//Iservice is from type.ts
const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,about,title}}) => {
    const createMarkup=()=>{
        return{
            __html:about
        }
    }
    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-blue-800"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard