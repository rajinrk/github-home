import './footer.css'
export default function Footer() {
    return (
        <div className='footer-container'>
            <span style={{fontSize:'.7rem'}}>© 2023 GitHub, Inc.</span>
            <ul style={{listStyleType:'none',fontSize:'.7rem'}}>
                <li>Blog</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>GitHub</li>
                <li>Pricing</li>

            </ul>
            <ul style={{listStyleType:'none',fontSize:'.7rem'}}>
                <li>API</li>
                <li>Training</li>
                <li>Status</li>
                <li>Security</li>

            </ul>
            <ul style={{listStyleType:'none',fontSize:'.7rem'}}>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Docs</li>

            </ul>
        </div>
    )
}