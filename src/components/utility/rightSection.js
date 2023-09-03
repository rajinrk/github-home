import {  useState } from 'react';
import './rightSection.css'
import NavBarII from './navBar-2';
import ForYouComponent from './forYouCompo';

import Footer from './footer';
import Following from './following';
export default function RightSection(){
    // below state and function is to render any one component according to user selection by
    // sending state as a props as well as function as a props for child to parent communication to NavBarII component
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
            <NavBarII handleForYou={handleForYou} following={following} handleFollowing={handleFollowing} />
            {/* below component will render only if user select the foryou component from NavBarII component  */}
            {forYou && <ForYouComponent/>}
            {/* below component will render only if user select the following component from NavBarII component  */}
            {following && <Following/>}
            <Footer/>
        </section>
        <section className='explore-container'>

        </section>
        
    </div>
    )
}