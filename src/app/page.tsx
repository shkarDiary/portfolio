import Facebook from "@/../public/Facebook.png";
import Instagram from "@/../public/Instagram.png";
import MaillINE from "@/../public/MailLine.png";
import nextjs from "@/../public/nextjs.png";
import python from "@/../public/Python-logo-notext.png";
import sprinBoot from "@/../public/spring-boot-logo.png";
import js from "@/../public/js.png";
import react from "@/../public/React-icon.png";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const iconName = [
    {
      name: "facebook",
      img: Facebook,
      link: "https://www.facebook.com/shkar.deary",
    },
    {
      name: "instagram",
      img: Instagram,
      link: "https://www.instagram.com/d4ro_diary/",
    },
    { name: "mailLine", img: MaillINE, link: "mailto:shkardeary4@gmail.com" },
  ];
  const skills = [
    {
      name: "react",
      img: react,
    },
    {
      name: "instagram",
      img: Instagram,
      link: "https://www.instagram.com/d4ro_diary/",
    },
    { name: "mailLine", img: MaillINE, link: "mailto:shkardeary4@gmail.com" },
  ];
  return (
    <main className="">
      <span className=" w-[30%] h-screen bg-primary-200 absolute right-0 top-0 z-10 "></span>
      <section className="h-[calc(100vh-8rem)] w-[70%] flex flex-col  relative z-50 ">
        <div className=" flex flex-col  justify-center items-center gap-4  ">
          <div>
            <h3 className=" text-secondary-300 text-2xl ">Shkar Diary</h3>
            <h1 className=" text-blue-950 text-6xl leading-[4rem]  ">
              <span>Graphic Designer</span> <br />
              &Web Developer
            </h1>
          </div>

          <div className=" w-[30rem]  bg-gray-50 rounded-sm shadow-xl p-3 ">
            <div className=" flex justify-center items-center font-bold  w-10 h-10 rounded-full shadow-[0_0px_75px_5px_rgb(0,0,0,0.3)] bg-white relative top-[-22px] left-[-22px]  ">
              <span className=" text-3xl overflow-hidden leading-none breakwo relative top-[0.4rem]  ">
                "
              </span>
            </div>
            <p className="text-xl text-gray-600  ">
              Web Developer & Graphic Designer Blending code and creativity to
              build engaging digital experiences. Responsive websites,
              user-centric interfaces, and visual storytelling. Transforming
              ideas into interactive and aesthetic realities. ✨
            </p>
          </div>
        </div>
        <div className=" flex gap-3 flex-col px-28  ">
          {iconName.map((icon) => (
            <Link
              href={icon.link}
              key={icon.name}
              title={icon.name}
              target="_blank"
            >
              <Image
                src={icon.img}
                width={24}
                height={24}
                alt={`this is ${icon.name} icon`}
              />
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </main>
  );
}
