import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to QuadB
              <strong className="font-extrabold text-blue-700 sm:block">
                {" "}
                Tech Project
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Embark on a journey where advanced technology meets creativity,
              crafting a smooth experience like never before!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/project"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="/project"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
