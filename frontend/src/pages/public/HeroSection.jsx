import heroBg from '../../assets/images/hero-bg.jpg';

function HeroSection() {
    return (
        <section
            style={{ backgroundImage: `url(${heroBg})` }}
            className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-start"
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="text-start">
                    <h1 className="text-4xl font-tapestry sm:text-6xl font-bold text-white mb-4">
                        Arko Flavors
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                        Fresh food, delivered your way.
                    </p>
                    <a
                        href="#menu"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Browse Menu
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;