import "./Poster.css"


const Poster = () => {
    return (
        <div className="poster"> 
        <div class="hr-line"></div>
        <div class="hr-icon"><i class="material-icons">favorite</i></div>
        <div class="hr-line"></div>
            <h1 className="header-wanted">WANTED</h1>
            <div className="repo" role="img" aria-label="repo-img"></div>
            <p className="name">Repo name goes here</p>
            <em>Categories</em>
        </div>
    )
}

export default Poster;