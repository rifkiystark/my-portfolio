import myProfile from "../../images/my-profile.png";
import "./Cover.css"

function Cover() {
    return (
        <div className="section-cover">
            <div className="cover-header">
                <img src={myProfile} alt="" />
                <div className="title-header">ANANDA <span className="text-yellow">RIFKIY</span> HASAN</div>
                <div className="divider-header"></div>
                <code className="subtitle-header">Fullstack Developer</code>
            </div>
        </div>
    )
}

export default Cover;