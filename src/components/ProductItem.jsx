const ProductItem = (props) => {
  return (
    <div className="product-item w-full h-32 bg-cover bg-center">
      <div className="pt-12 px-5 w-2/3">
        <p className="josefin uppercase text-white text-3xl leading-7">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
