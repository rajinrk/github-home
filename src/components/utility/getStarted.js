import pull from './../icons/pull.png'

export default function GetStarted() {
    
    return (
        <div style={{ width: '100%' }}>
            <section style={{ width: "100%", textAlign: 'left', paddingTop: '10px ' }}>
                <span style={{ color: 'grey' }} >Get started on GitHub</span>
                <span style={{ float: 'right', fontWeight: '1000' }} >...</span>
            </section>
            <section style={{ display: 'flex', flexWrap:'wrap',justifyContent:'space-between' ,width:'100%'}}>
                <div class="card" style={{ width: '20rem', marginTop: '20px' }}> 
                    <div class="card-body"  >
                        
                         <video src='https://www.youtube.com/watch?v=BUE2LaSzijM'  poster='https://www.pullrequest.com/blog/github-code-review-service/images/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png'  type="video/mp4" style={{width:'100%',height:'200px'}}  />
                        <a href='https://www.youtube.com/watch?v=BUE2LaSzijM' style={{ color:'white',textDecoration:'none', padding:'2px 7px', backgroundColor:'rgb(29, 70, 253)',border:'none',borderRadius:'5px'}}>What is github?</a>
                    </div>
                </div>


                <div class="card" style={{ width: '20rem', marginTop: '20px' }}>
                    <div class="card-body">
                        <img style={{float:'left'}} src={pull} alt='pull icon'/><br/><br/><br/>
                        <h5 class="card-title" style={{ textAlign: 'left', fontSize: '1rem' }}>Follow this exercise to try the GitHub flow</h5>
                        <p class="card-text" style={{ textAlign: 'left' }}>GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.</p>
                        <a href='https://docs.github.com/en/get-started/quickstart/hello-world' style={{ color:'black',textDecoration:'none', padding:'4px 7px', backgroundColor:'azure',border:'1px solid grey',borderRadius:'5px'}}>Try the Github Flow</a>
                    </div>
                </div>
               

            </section>

        </div>
    )
}