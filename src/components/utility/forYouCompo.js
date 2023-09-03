import { useNavigate } from "react-router-dom";
import GetStarted from "./getStarted";
import ToolsUse from "./tools";

export default function ForYouComponent() {
    const navigate = useNavigate()
    return (
        // below code is the foryou section in the page
        <div style={{ width: '100%',display:'flex',flexDirection:'row',flexWrap:'wrap' }}>
            <section style={{ width: "100%", textAlign: 'left',padding: '10px 20px 0px 20px' }}>
                <span style={{ color: 'grey' }} >start writing code</span>
                <span style={{ float: 'right', fontWeight: '1000' }} >...</span>
            </section>
            <section style={{ display: 'flex', justifyContent: "space-between",flexWrap:'wrap' }}>
                <div class="card" style={{ width: '22rem', marginTop: '20px' }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ textAlign: 'left', fontSize: '1rem' }}>Start a new repository</h5>
                        <p class="card-text" style={{ textAlign: 'left' }} >A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                        <span style={{ float: 'left' }}>Username/</span>
                        <input style={{ border: '1px solid grey', borderRadius: '9px', padding: '3px 7px' }} type='search' placeholder="Name your new repository..." />

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label style={{ float: 'left' }} class="form-check-label" for="flexRadioDefault1">
                                Public
                            </label>

                        </div>
                        <p style={{ marginLeft: '10%', color: 'grey', fontSize: '.8rem', width: '70%', textAlign: 'left' }}>Anyone on the internet can see this repository</p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2" style={{ float: 'left' }} >
                                Private
                            </label>

                        </div>
                        <p style={{ marginLeft: '10%', color: 'grey', fontSize: '.8rem', width: '70%', textAlign: 'left' }}>You choose who can see and commit to this repository</p>
                        <button style={{ marginTop: '20px', backgroundColor: 'green', padding: '4px 7px', border: 'none', borderRadius: '7px', color: "white" }} onClick={()=>navigate('/new')}>Create Repository</button>
                    </div>
                </div>


                <div class="card" style={{ width: '22rem', marginTop: '20px' }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{ textAlign: 'left', fontSize: '1rem' }}>Introduce yourself with a profile README</h5>
                        <p class="card-text" style={{ textAlign: 'left' }}>Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                        <div class="card" style={{ width: "18rem" }}>

                            <div class="card-body">
                                <div class='d-flex'>
                                    <h5 class="card-title">Card title</h5>
                                    <button style={{ width: '30%',marginLeft:'30%' , backgroundColor: 'green', fontSize: '1rem',border:'none', padding: '1px 7px' }} class="btn btn-primary" onClick={()=>navigate('/new')}>create</button>

                                </div>
                                <p class="card-text" style={{textAlign:'left'}}>
                                    - 👋 Hi, I’m @rajinrk<br/>
                                    - 👀 I’m interested in ...<br/>
                                    - 🌱 I’m currently learning ...<br/>
                                    - 💞️ I’m looking to collaborate on ...<br/>
                                    - 📫 How to reach me ...</p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ToolsUse/>
            <GetStarted/>

        </div>
    )
}