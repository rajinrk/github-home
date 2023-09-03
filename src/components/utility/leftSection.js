import { useEffect, useState } from 'react'
import './leftSection.css'
import { useNavigate } from 'react-router-dom';
export default function LeftSection(){
    const [scrollY,setScrollY] = useState(0)
    const [repository,setRepository] = useState(['rajin/repo-1','rajin/repo-2','rajin/repo-3','rajin/repo-4','rajin/repo-5','rajin/repo-6','rajin/repo-7','rajin/repo-8','rajin/repo-9','rajin/repo-10','rajin/repo-11'])
    const navigate = useNavigate()
    const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      // this useffect is for changing the scrollY state according to the windows Y axis change because this component should be position fixed
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className='left-section-container' style={scrollY>65?{position:'fixed',top:`0px`,width:'25.35%'}:null}>
            <section className='new-container'>
                <h6>Top Repositories</h6>
                <button onClick={()=>navigate('/new')}>New</button>
            </section>
            <section style={{width:'100%'}}>
                <input type='search' placeholder='Find a repository...' style={{padding:'2px 5px',width:'100%',marginTop:'7px',borderRadius:'5px', border:'0.5px solid rgb(212, 210, 210)'}}></input>
            </section>
            {/* Below ul will render all the repositories you created we can take all the repositories by an API call to backend as of now will take from repository array */}
            <ul className='repos'  >
                {repository.map((element,idx)=>{
                   return <li key={idx}  style={{textAlign:'left'}}>{element}</li>
                })
                }
            </ul>
            <section className='new-container'>
                <h6>Recent Activity</h6>
            </section>
            <section style={{padding:'10px', width:'100%',fontSize:'.75rem',border:'1px dotted grey',borderStyle:'dashed',borderRadius:'5px'}}>
            When you take actions across GitHub, we’ll provide links to that activity here.
            </section>

        </div>
    )
}