const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="py-24 px-6 lg:px-40">
          <div className="lg:grid lg:grid-cols-12">
            {/* image */}
            <div
              id="about-image"
              className="w-full bg-center bg-cover mb-12 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:mb-0"
            ></div>

            {/* text */}
            <div
              id="about-text"
              className="lg:bg-white lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:self-end lg:pt-20 lg:pl-20"
            >
              <h2 className="josefin uppercase text-center text-3xl mb-7 lg:text-left lg:text-5xl">
                The leader in interactive VR
              </h2>
              <p className="text-gray-500 text-center lg:text-left">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
