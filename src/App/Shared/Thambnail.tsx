import image2 from "../../../public/Beige Modern Minimalist Fashion Clothing Sale.png";
import image1 from "../../../public/Pink White Bold Fashion Boutique New.png";

const Thambnail = () => {
  return (
    <>
      <div className="max-w-[1520px] !mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div>
          <img
            src={image1}
            alt="Thumbnail"
            className="w-[750px] h-[500px] object-fill rounded-3xl shadow-md"
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Thumbnail"
            className="w-[750px] h-[500px] object-fill rounded-3xl shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Thambnail;
