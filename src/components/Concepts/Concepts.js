function Concepts({ img, title, description }) {
  return (
    
    <li className="concept">
      <img src={img} alt="conceptsIMG" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>

  );
}

export default Concepts;
