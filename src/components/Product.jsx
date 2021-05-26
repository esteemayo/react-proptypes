import PropTypes from "prop-types";

import defaultImg from "../img/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.defaultProps = {
  name: "default name",
  price: 4.99,
  image: {
    url: defaultImg,
  },
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
