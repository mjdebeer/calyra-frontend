export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#07090d] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(148,163,184,0.11),transparent_30%),linear-gradient(180deg,rgba(7,9,13,0)_0%,#07090d_88%)]" />
            <div className="relative mx-auto flex min-h-[760px] w-full max-w-6xl flex-col justify-center px-6 py-24 md:min-h-[820px]">
                <div className="mb-10 flex items-center gap-4">
                    <img src="/logo.png" alt="Calyra" className="h-12 w-12 object-contain opacity-90" />
                    <span className="font-orbitron text-lg tracking-[0.18em] text-cyan-100">calyra</span>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
                        Software tools for builders and curious minds.
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                        Calyra creates thoughtful software and experiments that help people understand,
                        create and work more effectively. From developer tools to niche products, we believe
                        useful things should be simple and enjoyable.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center rounded-md bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                        >
                            Explore
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-100 hover:text-white"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
