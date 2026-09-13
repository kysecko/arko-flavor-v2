import LandingTopBar from '../../components/layout/LandingNav';
import HeroSection from './HeroSection';

function LandingPage() {
    return (
        <div className="relative min-h-screen">
            <LandingTopBar />
            <HeroSection />
        </div>
    );
}

export default LandingPage;