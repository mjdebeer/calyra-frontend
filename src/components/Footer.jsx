export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-[#07090d] px-6 py-10 text-slate-400">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="font-medium text-slate-200">Calyra (Pty) Ltd</p>
                    <p className="mt-2">Software &bull; Experiments &bull; Tools</p>
                </div>
                <p>&copy; {new Date().getFullYear()} Calyra. All rights reserved.</p>
            </div>
        </footer>
    );
}
