function Banner() {
  return (
    <>
      <div>
        <div className="w-full">
          {/* <img src="banner.gif" alt="" className="w-full h-[27%] object-cover"></img> */}
          <img
            src={`${import.meta.env.BASE_URL}banner.gif`}
            alt="Banner"
            className="w-full h-[27%] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
