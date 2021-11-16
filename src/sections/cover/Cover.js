import myProfile from "../../images/my-profile.png";
import "./Cover.css"

function Cover() {
    return (
        <div className="section-cover">
            <div className="cover-header">
                <img src={myProfile} alt="" className="img-header"/>
                <div className="title-header">ANANDA <span className="text-yellow">RIFKIY</span> HASAN</div>
                <div className="divider-header"></div>
                <code className="subtitle-header">Fullstack Developer</code>
                <div className="wrapper-information-header">
                    <a href="https://github.com/rifkiystark" className="information-header">Github</a>
                    <div className="information-header">|</div> 
                    <a href="mailto:ananda.rifkiy32@gmail.com" className="information-header">Email</a>
                    <div className="information-header">|</div> 
                    <a href="https://www.linkedin.com/in/anandarifkiy/" className="information-header">Linkedin</a>
                    <div className="information-header">|</div> 
                    <a href="https://wa.me/0895417459300" className="information-header">Phone</a>
                    <div className="information-header">|</div> 
                    <a href="https://www.dicoding.com/users/anandarifkiy/academies" className="information-header">Dicoding</a>
                    <div className="information-header">|</div> 
                    <a href="https://www.instagram.com/anndrfky_/" className="information-header">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Cover;