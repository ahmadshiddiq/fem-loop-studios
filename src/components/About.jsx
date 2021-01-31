const About = () => {
  return (
    <section id="about" className="py-12 px-6">
      <div className="md:grid md:grid-cols-12">
        <div className="about-image h-60 w-full bg-center bg-cover md:col-start-1 md:col-end-8 md:row-start-1"></div>
        <div className="mt-8 md:bg-red-200 md:col-start-7 md:col-end-13 md:row-start-1">
          <h2 className="josefin text-3xl uppercase text-center mb-8">
            The leader in interactive VR
          </h2>
          <p className="about-text text-center text-gray-500">
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
