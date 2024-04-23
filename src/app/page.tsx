import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <span className=" w-[30%] h-screen bg-primary-200 absolute right-0 top-0 z-10 "></span>
      <div className="h-[calc(100vh-8rem)] w-[70%] flex flex-col  justify-center items-center relative z-50 ">
        <div className=" flex flex-col gap-4">
          <h3 className=" text-secondary-300 text-2xl "> Shkar Diary </h3>
          <h1 className=" text-blue-950 text-6xl leading-[4rem]  ">
            <span className="tracking-[0.05rem]">Graphic Designer</span> <br />&
            Web Developer
          </h1>

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
      </div>
    </main>
  );
}
