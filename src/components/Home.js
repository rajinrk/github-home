import RightBar from "./utility/rightSideBar";
import './Home.css'
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";
import LeftBar from "./utility/leftSideBar";
import LeftSection from "./utility/leftSection";
import RightSection from "./utility/rightSection";

export default function HomePage() {
    const [showRightBar, setShowRightBar] = useState(false)
    const rightBarRef = useRef()
    const [showLeftBar, setShowLeftBar] = useState(false)
    const leftBarRef = useRef()
    
//below functions and useEffect is for the offCanvas from right and left
    function onRightBarShow() {
        setShowRightBar(true)

    }
    function onRightBarClose() {
        setShowRightBar(false)
    }

    useEffect(() => {
        if (showRightBar) {
            rightBarRef.current.click()
        }
    }, [showRightBar])


    function onLeftBarShow() {
        setShowLeftBar(true)
    }
    function onLeftBarClose() {
        setShowLeftBar(false)
    }
    useEffect(() => {
        if (showLeftBar) {
            leftBarRef.current.click()
        }
    }, [showLeftBar])

    return (
        <div >
            <NavBar onRightBarShow={onRightBarShow} onLeftBarShow={onLeftBarShow} />
            <button class={`btn btn-primary not-visible`} ref={rightBarRef} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></button>
           {/* if showRightBar state is true then rightbar component will render */}
            {showRightBar && <RightBar onRightBarClose={onRightBarClose} />}
            <button class={`btn btn-primary not-visible`} ref={leftBarRef} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></button>
           {/* if showLeftBar state is true then rightbar component will render */}
            {showLeftBar && <LeftBar onLeftBarClose={onLeftBarClose} />}
            <div className="main-element" >
                {/* LeftSection is for the repositories containing section */}
                <LeftSection/>
                 {/* RightSection is for the main contents containing section */}
                <RightSection/>
            </div>

        </div>
    )
}
