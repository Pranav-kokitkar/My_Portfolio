import "../Styles/Footer.css";

export const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="l-footer">
                <h2>Pranav K</h2>
            </div>
            <div className="r-footer">
                <div className="social-links">
                    <h4>Social Links</h4>
                    <ul>
                        <li>GitHub</li>
                        <li>Linkden</li>
                        <li>Gmail</li>
                    </ul>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Me</li>
                        <li>SKills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}