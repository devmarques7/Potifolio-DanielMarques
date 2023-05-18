interface IImg {
  className: string;
  src: string;
  alt: string;
}

const Image = ({ src, className, alt }: IImg) => {
  return <img src={src} className={className} alt={alt} />;
};

export default Image;
