import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section id="products">
      <div className="container mx-auto">
        <div className="px-6">
          {/* maybe delete this flex later */}
          <div className="flex flex-col">
            <h2 className="josefin uppercase text-center text-3xl mb-14 order-1">
              Our creations
            </h2>

            <div className="text-center order-3">
              <a
                href="#products"
                className="josefin uppercase inline-block py-3.5 px-10 border-2 border-black mt-8"
              >
                See all
              </a>
            </div>

            <div className="order-2 grid gap-y-6">
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
