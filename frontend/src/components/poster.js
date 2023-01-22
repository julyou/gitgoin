import "./Poster.css"
import Topic from "./Topic.js"
import { FaGithub } from 'react-icons/fa'


const Poster = (props) => {
    return (
        <div className="poster">
            <div class="hr-line"></div>
            <FaGithub />
            <h1 className="header-wanted">WANTED</h1>
            <div class="hr-line"></div>
            <div className="repo" role="img" aria-label="repo-img"></div>
            <p className="name">{props.repoName}</p>
            <em>Categories</em>
            {/* needs a dynamic list of components  */}
            <div class="topics">
                <Topic />
            </div>
        </div>
    )
}

export default Poster; 