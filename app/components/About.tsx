import React from "react";
import { Element } from "react-scroll";

export default function About() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900" id="about">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/img/about-image1.jpeg"
              alt="Image About"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/img/about-image2.jpeg"
              alt="Image About"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Profile
            </h2>
            <p className="mb-4">
              SD NEGERI TALAGA 2 Merupakan salah satu sekolah dasar negeri
              terbaik di Kabupaten Cianjur pada tahun 2023 yang membanggakan, SD
              NEGERI TALAGA 2 memiliki fasilitas yang lengkap, lingkungan yang
              bersih dan aman, serta guru-guru yang berkualitas dan
              berpengalaman.
            </p>
            <p>
              Sekolah ini juga memiliki kurikulum yang terus diperbarui sehingga
              memastikan anak-anak mendapatkan pendidikan terbaik. Sumber
              Artikel berjudul "Cianjur Membanggakan! Ini 25 Sekolah Dasar (SD)
              Terbaik di Kabupaten Cianjur Tahun 2023 Akreditasi A".
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
