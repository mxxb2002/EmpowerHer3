import React from "react";

export default function AboutUs() {
  return (
    <main className="container mx-auto px-10 pb-8 pt-24">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-pink-600">Our Mission</h2>
        <p className="mt-2 text-lg text-gray-700">
          To empower women through access to comprehensive safety resources,
          support networks, and education, fostering a community of strength,
          safety, and support.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-pink-600">Our History</h2>
        <p className="mt-2 text-lg text-gray-700">Founded in 2023</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-pink-600">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4 mt-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <img
                src="/assets/maisha.jpeg"
                alt="Team Member Name"
                className="w-full h-80 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Maisha Begum
              </h3>
              <p className="text-gray-600">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
