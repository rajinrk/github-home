export default function Following() {
    return (
       // below code is the following section in the page
        <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column',marginTop:'20px'}}>
            <div class="card" style={{ width: '85%', padding: '3% 3% ',textAlign:'left' }}>
                <div class="card-body">
                    <h5 class="card-title " >Discover interesting projects and people to populate your personal news feed.</h5>
                    <p class="card-text">Your news feed helps you keep up with recent activity on repositories you watch or star and people you follow.</p>
                    <a href="https://github.com/explore" style={{padding:'5px 8px',textDecoration:'none',border:'1px solid grey',borderRadius:'7px'}} class="card-link">Explore Github</a>
                  
                </div>
            </div>
            <div style={{display:"block",textAlign:'left',padding:'8px',width: '85%'}}>
            <p style={{fontSize:'.7rem',marginBottom:'2px',color:'grey'}}> ProTip! The feed shows you events from people you follow and repositories you watch or star.</p>
            <p style={{fontSize:'.7rem',color:'grey'}}>Subscribe to your news feed</p>
            </div>
          
        </div>

    )
}