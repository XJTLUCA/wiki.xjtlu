export default function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center mt-8 gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element -- next/image is way too heavy */}
        {/*<img src="" width={600} height={600} alt="foxact Logo" className="block h-16 w-16 md:h-28 md:w-28" />*/}
        <h1 className="text-center text-5xl font-extrabold md:text-8xl tracking-wide block">XJTLU Wiki</h1>
      </div>

      <div className="mx-auto max-w-full w-[880px] text-center px-4 mt-4 mb-10">
        <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
          XJTLU 百科
        </p>
        <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
          解答你的所有疑惑
        </p>
      </div>
    </>
  );
}
