function Banner() {
  return (
    <>
      <div>
        <div className="relative w-full">
          {/* <img src="banner.gif" alt="" className="w-full h-[27%] object-cover"></img> */}
          <img
            src={`${import.meta.env.BASE_URL}banner.gif`}
            alt="Banner"
            className="w-full h-[27%] object-cover"
          />
        </div>
        <div className="absolute left-0 right-0 lg:bottom-130 sm:px-8">
          <h2 className="text-3xl font-bold">Hi! I'm Sophie</h2>
        </div>
      </div>
    </>
  );
}

export default Banner;
