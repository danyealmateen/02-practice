function Concepts({img, title, description}) {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={img} alt="conceptsIMG" />
          <h2>{title}</h2>
          <p>{description}</p>
        </li>
      </ul>
    </div>
  );
}

export default Concepts;
