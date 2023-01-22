import "./Poster.css"
import Topic from "./Topic.js"
import { FaGithub } from 'react-icons/fa'


const Poster = (props) => {
    return (
        <div className="poster">
            <div className="hr-line"></div>
            <FaGithub className="fa-3x" />
            <h1 className="header-wanted">WANTED</h1>
            <div className="hr-line"></div>
            <div className="repo" role="img" aria-label="repo-img"></div>
            <p className="name">{props.repoName}</p>
            <em>Categories</em>
            {/* needs a dynamic list of components  */}
            <div className="topics">
                <Topic />
            </div>

            {/* <div class="BorderGrid-row">
                <div class="BorderGrid-cell">
                    <h2 class="h4 mb-3">Languages</h2>
                    <div class="mb-2">
                        <span data-view-component="true" class="Progress">
                            <span style="background-color:#e34c26 !important;;width: 45.9%;" itemprop="keywords" aria-label="HTML 45.9" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
                            <span style="background-color:#563d7c !important;;width: 30.9%;" itemprop="keywords" aria-label="CSS 30.9" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
                            <span style="background-color:#f1e05a !important;;width: 23.2%;" itemprop="keywords" aria-label="JavaScript 23.2" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
                        </span></div>
                    <ul class="list-style-none">
                        <li class="d-inline">
                            <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
                                <svg style="color:#e34c26;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                                </svg>
                                <span class="color-fg-default text-bold mr-1">HTML</span>
                                <span>45.9%</span>
                            </span>
                        </li>
                        <li class="d-inline">
                            <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
                                <svg style="color:#563d7c;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                                </svg>
                                <span class="color-fg-default text-bold mr-1">CSS</span>
                                <span>30.9%</span>
                            </span>
                        </li>
                        <li class="d-inline">
                            <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
                                <svg style="color:#f1e05a;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                                </svg>
                                <span class="color-fg-default text-bold mr-1">JavaScript</span>
                                <span>23.2%</span>
                            </span>
                        </li>
                    </ul>

                </div>
            </div> */}
        </div>
    )
}

export default Poster; 