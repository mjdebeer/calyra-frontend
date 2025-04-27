export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <div className="relative w-80 h-80 mx-auto mb-12">
                <img src="/logo.png" alt="Calyra Logo" className="absolute inset-0 h-full object-contain opacity-70" />
                <h1 className="absolute inset-0 flex items-center justify-center font-orbitron text-cyan-100 text-4xl md:text-5xl tracking-wide text-center">
                    calyra
                </h1>
            </div>
            <h4 className="text-lg md:text-3xl mb-8">Smarter Conversations. Smarter Business.</h4>
            <a href="#chat" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                Talk to Cal
            </a>
        </section>
    );
}
