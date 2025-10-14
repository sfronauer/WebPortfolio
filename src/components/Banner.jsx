function Banner() {

  return (
    <>
        <div>
          <div className="relative w-full">
            <img src="/image.png" alt="Banner" className="w-full h-150 object-cover"></img>
            </div>
            <div className="absolute left-0 right-0 lg:bottom-170 sm:px-8">
              <h2 className="text-3xl font-bold">Hi! I'm Sophie</h2>
            </div>
        </div>
    </>
  )
}

export default Banner