export default function ToolsUse() {
    return (
        <div style={{ width: '100%', display:'flex',flexWrap:'wrap' }}>
            <section style={{ width: "100%", textAlign: 'left', paddingTop: '10px' }}>
                <span style={{ color: 'grey' }} >Use tools of the trade</span>
                <span style={{ float: 'right', fontWeight: '1000' }} >...</span>
            </section>
            <section style={{ display: 'flex', justifyContent: "space-between",flexWrap:'wrap' }}>
                <div class="card" style={{ width: '20rem', marginTop: '20px' }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ textAlign: 'left', fontSize: '1rem' }}>Simplify your development workflow with a GUI</h5>
                        <p class="card-text" style={{ textAlign: 'left' }} ><span><a href='github.com'>Install GitHub Desktop</a></span> to visualize, commit, and push changes without ever touching the command line.</p>
                    </div>
                </div>


                <div class="card" style={{ width: '20rem', marginTop: '20px' ,marginLeft:'24px'}}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ textAlign: 'left', fontSize: '1rem' }}>Get AI-based coding suggestions</h5>
                        <p class="card-text" style={{ textAlign: 'left' }}><span><a href='https://github.com/github-copilot/signup'>Try GitHub Copilot free for 30 days</a></span>, which suggests entire functions in real time, right from your editor.</p>
                        
                    </div>
                </div>

            </section>

        </div>
    )
}