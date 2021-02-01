import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section id="products">
      <div className="container mx-auto">
        <div className="px-6 pt-1.5 pb-24 lg:px-40">
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center justify-between">
            <h2 className="josefin uppercase text-center text-3xl mb-14 order-1 lg:mb-0">
              Our creations
            </h2>

            <div className="text-center order-3 lg:order-2">
              <a
                href="#products"
                className="josefin uppercase inline-block py-3.5 px-10 border-2 border-black mt-8 lg:mt-0"
              >
                See all
              </a>
            </div>

            <div
              id="product-wrapper"
              className="order-2 grid gap-y-6 lg:grid-cols-4 lg:gap-7 lg:order-3 lg:mt-12"
            >
              <ProductItem name="Deep Earth" />
              <ProductItem name="Night Arcade" />
              <ProductItem name="Soccer team VR" />
              <ProductItem name="The grid" />
              <ProductItem name="From up above VR" />
              <ProductItem name="Pocket borealis" />
              <ProductItem name="THe curiosity" />
              <ProductItem name="Make it fisheye" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
