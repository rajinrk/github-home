import { useEffect, useState } from 'react';
import './rightSection.css'
import NavBarII from './navBar-2';
import ForYouComponent from './forYouCompo';
import ToolsUse from './tools';
export default function RightSection(){
   const [forYou,setForYou] = useState(true)
    const [following,setFollowing] = useState(false)
   function handleForYou(){
    setForYou(true)
    setFollowing(false)
   }
   function handleFollowing(){
    setFollowing(true)
    setForYou(false)
   }
    return( 
    <div className="right-section-container"  >
        <section className='feeds-container' >
            <NavBarII handleForYou={handleForYou} handleFollowing={handleFollowing} />
            {forYou && <ForYouComponent/>}
            {following && <div>following</div>}
            <ToolsUse/>
        </section>
        <section className='explore-container'>

        </section>
    
    </div>
    )
}