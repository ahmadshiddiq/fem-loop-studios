const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto py-12 px-6 md:py-40 md:px-40"
    >
      <div className="md:grid md:grid-cols-12">
        <div className="about-image w-full bg-center bg-cover md:col-start-1 md:col-end-8 md:row-start-1"></div>
        <div className="about-text mt-8 md:bg-white md:col-start-7 md:col-end-13 md:row-start-1 md:mt-0">
          <h2 className="josefin text-3xl uppercase text-center mb-8 md:text-4xl md:text-left">
            The leader in interactive VR
          </h2>
          <p className="text-center text-gray-500 md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
