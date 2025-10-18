function Banner() {
  return (
    <>
      <div className="relative">
        <div className=" relative w-full h-[9rem] sm:h-[11rem] md:h-[14rem] lg:h-[24rem] xl:h-[40rem] 2xl:h-[32rem]">
          <img
            src={`${import.meta.env.BASE_URL}banner.gif`}
            alt="Banner"
            className="absolute w-full h-full object-cover md:object-top"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
