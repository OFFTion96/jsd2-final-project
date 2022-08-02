import './CardMyActivites.css'

const CardMyActivites = (props) => {
    console.log(props.imageComment)
    return(
        <div className="card">
            <div className='gird-container'>
                <div className="header-comment">
                    <h3>header-comment</h3>
                    
                </div>
                <div className="left-box">
                    <div className="text-comment">
                    <p>{props.textComment}</p>
                    </div>
                    <div className="footer-cooment">
                    <h3>footer-comment</h3>
                    </div>
                </div>
                <div className="image-comment">
                    <img src="./assert/garden1.jpg" />
                    
                </div>
            </div>
        </div>
    )
}
export default CardMyActivites