

const HeroSection = () => {
    return (
        <div className="hero bg-white w-10/12 mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://png.pngtree.com/png-clipart/20231104/original/pngtree-corporate-man-showing-thumbs-up-adult-picture-image_13232627.png"
            className="max-w-md rounded-lg  " />
          <div>
            <h1 className="text-7xl font-bold pt-3 space-x-3">Let's Get Your <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Dream Job !!</span></h1>
            <p className="py-6 font-thin text-justify w-8/12">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;