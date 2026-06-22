import Hero from './components/Hero';
import Footer from './components/Footer';

const principles = [
    {
        title: 'Useful over complicated',
        body: 'We prefer focused tools that solve real problems.',
    },
    {
        title: 'Built to last',
        body: 'Thoughtful design, maintainable systems and long-term thinking.',
    },
    {
        title: 'Curious by nature',
        body: 'Experimentation and continuous learning drive everything we do.',
    },
];

const products = [
    'Developer utilities',
    'Focused applications',
    'Small experiments',
];

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name') || 'Website visitor';
        const email = form.get('email') || '';
        const message = form.get('message') || '';
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            '',
            message,
        ].join('\n');

        window.location.href = `mailto:info@calyra.io?subject=${encodeURIComponent('Calyra website enquiry')}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
                    placeholder="Your name"
                />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
                    placeholder="you@example.com"
                />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="resize-none rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
                    placeholder="Tell us what you have in mind."
                />
            </div>
            <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
                Contact
            </button>
        </form>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-[#07090d] text-white">
            <Hero />
            <main>
                <section id="about" className="border-y border-slate-800 bg-slate-950/55 px-6 py-24">
                    <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">About</p>
                        <div>
                            <h2 className="text-3xl font-semibold text-white md:text-4xl">Built with curiosity</h2>
                            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                                Calyra is an independent software company focused on creating practical tools
                                and exploring new ideas. We enjoy solving interesting problems and building
                                products that people genuinely find useful.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24">
                    <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-3">
                        {principles.map((principle) => (
                            <article key={principle.title} className="rounded-lg border border-slate-800 bg-slate-950/70 p-6">
                                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                                <p className="mt-4 leading-7 text-slate-400">{principle.body}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="products" className="border-y border-slate-800 bg-slate-950/55 px-6 py-24">
                    <div className="mx-auto w-full max-w-6xl">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-semibold text-white md:text-4xl">Products and projects</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                New products are currently in development. Future services and applications
                                will be available under dedicated subdomains.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {products.map((product) => (
                                <article key={product} className="min-h-44 rounded-lg border border-slate-800 bg-[#090d13] p-6">
                                    <span className="rounded-full border border-cyan-200/25 bg-cyan-100/10 px-3 py-1 text-xs font-medium text-cyan-100">
                                        Coming Soon
                                    </span>
                                    <h3 className="mt-8 text-xl font-semibold text-white">{product}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="px-6 py-24">
                    <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Contact</p>
                            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                                Let's build something interesting
                            </h2>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                Questions, collaborations or just curious? We'd love to hear from you.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-6">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
