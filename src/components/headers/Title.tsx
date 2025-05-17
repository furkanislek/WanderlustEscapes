const Title = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 px-4 py-8">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Unforgettable Journeys
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Unbeatable Prices - Your
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Adventure Starts Here!
        </h1>
      </div>
      <p className="text-base md:text-lg max-w-3xl text-center mt-2 mb-6">
        Discover our handpicked, cost-effective travel deals to dream
        destinations around the globe. Dive into a world of exploration without
        the hefty price tag – because amazing travel experiences should be
        accessible to everyone
      </p>
      <button className="bg-[#D4AC0D] text-white px-6 py-3 rounded-md text-lg md:text-xl font-medium hover:bg-[#B7950B] transition-colors">
        Book Now
      </button>
    </div>
  );
};

export default Title;
