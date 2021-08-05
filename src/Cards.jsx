//component
function Card(props)
{
 return ( <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="whre is my bike!"className="card_img"></img>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href="" target="_blank">
              <button>Watch when you're free</button>
            </a>
          </div>
      </div>
      <button>Like it 👍</button>
    </div>
    )
    
}

export default Card;