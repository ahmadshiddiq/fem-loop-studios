const ProductItem = (props) => {
  return (
    <div className="product-item w-full bg-cover bg-center relative">
      <div className="w-1/2 absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
        <p className="josefin uppercase text-white text-3xl leading-7">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
