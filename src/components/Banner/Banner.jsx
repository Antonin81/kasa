function Banner({ text }) {
  return (
    <div className="banner">
      <img src="Img.png" alt="" />
      {text ? <p>{text}</p> : ""}
    </div>
  );
}

export default Banner;
