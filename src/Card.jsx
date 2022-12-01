function Cards(props) {
  console.log(props)
  return (
    <>
        <div className="blog_cards">
          <img src={props.imgsrc} width="300px" alt="blogImg" />
          <h2 className="title">{props.title}</h2>
          <p className="card_text">{props.text}</p>
          <a href={props.btn_link} className="btn">Learn More..</a>
        </div>
        
    </>
  );
}  

export default Cards;
