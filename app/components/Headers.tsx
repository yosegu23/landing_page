import React from "react";

export default function Headers() {
  return (
    <section className="bg-white dark:bg-gray-900" id="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            SDN Talaga 2 Cianjur
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Tempat unggul belajar dan tumbuh berkembang. kurikulum inovatif, dan
            tenaga pengajar berdedikasi. Bergabunglah untuk masa depan gemilang!
          </p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img
            src="/img/hero-image.jpeg"
            alt="Hero Banner"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
