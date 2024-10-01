export default function App() {
  return (
    <main className="flex flex-col justify-center h-screen   bg-yellow font-Figtree ">
      <div className=" w-[320px] max-h-fit bg-white mx-auto p-5 ring-1 ring-black rounded-2xl shadow-black shadow-[10px_10px_0px_0_rgb(0,0,0)]">
        <img
          src="/illustration-article.svg"
          alt="illustration"
          className="rounded-xl"
        />

        <div className="bg-yellow  w-fit font-black mt-6 px-3 py-1 rounded-md">
          Learning
        </div>

        <div className="mt-4 font-semibold">Published 21 Dec 2023</div>

        <h1 className="my-3 font-black text-xl hover:text-yellow hover:cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className=" text-sm text-[#6b6b6b] font-medium">
          These languages are the backbone of every website, defining
          structure,content and presentation
        </p>
        <div className="flex items-center space-x-4 mt-5">
          <img src="/image-avatar.webp" width={40} alt="author" />
          <h2 className="font-black">Greg Hooper</h2>
        </div>
      </div>
    </main>
  );
}
