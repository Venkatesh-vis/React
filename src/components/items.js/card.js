const Card = (prop) => {
  const {img,title,desc,price,cat,rating}=prop
  return (
    <div className="card" >
      <img
        className="card-img-top"
        src={img}
        height={350}
        // width={250}
        alt="Card  cap"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}
        </h5>
        <p className="card-text">
         {desc}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Price :</b> ${price}</li>
        <li className="list-group-item"><b>Category :</b> {cat}</li>
        <li className="list-group-item"><b>Rating :</b> {rating}</li>
      </ul>
    </div>
  );
};

export default Card;
