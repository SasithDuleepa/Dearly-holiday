import Link from 'next/link';

const Home = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-20 bg-ivory-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Welcome to Tissa Nature Stay</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Nestled in the heart of Tissamaharama, our guest house offers a serene escape with easy access to Yala National Park. Experience authentic Sri Lankan hospitality, learn to cook traditional meals, and embark on unforgettable safari adventures.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-warm-sand-beige">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-forest-green mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Guest House */}
            <div className="bg-ivory-background p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-forest-green mb-4">Comfortable Stays</h3>
              <p className="text-gray-700 mb-4">Relax in our cozy and well-equipped rooms, designed for your comfort and convenience.</p>
              <Link href="/guest-house" className="text-terracotta-accent font-bold hover:underline">
                Learn More
              </Link>
            </div>

            {/* Cooking Class */}
            <div className="bg-ivory-background p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-forest-green mb-4">Cooking Classes</h3>
              <p className="text-gray-700 mb-4">Discover the secrets of Sri Lankan cuisine with our hands-on cooking lessons.</p>
              <Link href="/cooking-class" className="text-terracotta-accent font-bold hover:underline">
                Learn More
              </Link>
            </div>

            {/* Yala Safari */}
            <div className="bg-ivory-background p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-forest-green mb-4">Yala Safari Tours</h3>
              <p className="text-gray-700 mb-4">Explore the stunning wildlife of Yala National Park with our guided jeep safaris.</p>
              <Link href="/yala-safari" className="text-terracotta-accent font-bold hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
