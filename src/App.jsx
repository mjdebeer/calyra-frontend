import Hero from './components/Hero';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget'; // Add this

function App() {
    return (
        <div className="max-h-screen flex flex-col">
            <Hero />
            <Footer />
            <ChatWidget /> {/* Insert it here so it floats over the whole page */}
        </div>
    );
}

export default App;
