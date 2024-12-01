function Footer() {
  return (
    <div className="bg-[url('/img/footer-bg.jpeg')] w-full bg-[bottom_center] bg-cover bg-no-repeat pt-10 pb-64">
      <div className="container mx-auto">
        <div className="flex gap-10 justify-between flex-wrap">
          <div className="w-[420px] flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white flex gap-2 items-center">
              <img src="/img/logo.png" alt="logo" className="size-12" />
              <span className="capitalize">shopcy</span>
            </h2>

            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Important Links</h2>
            <ul>
              {[`home`, `about`, `contact`, `blog`].map((li) => (
                <li className="text-white">{li}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Links</h2>
            <ul>
              {[`home`, `about`, `contact`, `blog`].map((li) => (
                <li className="text-white">{li}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Social Links</h2>
            <p className="text-white">Lorem ipsum dolor sit amet.</p>
            <p className="text-white">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
