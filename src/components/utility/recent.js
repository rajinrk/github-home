import { useState } from "react"

export default function Recent(){
    const [recent,setRecent]=useState([{
        time:'2 days ago',
        description:'Sign up to be invoiced for Sponsors with a few clicks'
    },
    {
        time:'3 days ago',
        description:'Wikis are now available for Enterprise Managed User namespace repositories'
    },
    {
        time:'3 days ago',
        description:'Code scanning with CodeQL improves support for Java codebases that use Project Lombok'
    },
    {
        time:'4 days ago',
        description:'GitHub Desktop 3.3 – Repository rules'
    },
])
    return (
        <div style={{width:'100%',textAlign:'left'}}>
            <h6 style={{margin:'30px 0px 0px 20px'}}>Latest Changes</h6>
            <ul style={{color:'grey'}}>
            {recent.map(({time,description},idx)=>{
               return <li key={idx}>
                    <p style={{fontSize:'.7rem',marginBottom:'0px',marginTop:'10px'}}>{time}</p>
                    <p style={{fontSize:'.9rem',marginBottom:'0px',color:'black'}}>{description}</p>
                </li>
            })}
            </ul>
        </div>
    )
}