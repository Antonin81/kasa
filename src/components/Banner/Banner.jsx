function Banner({ text, img }) {
  return (
    <div className="banner">
      <img src={img} alt="" />
      {text ? <p>{text}</p> : ""}
    </div>
  );
}

export default Banner;
