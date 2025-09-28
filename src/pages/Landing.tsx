import { ArrowRight, Shield, Zap, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { CyberButton } from "@/components/ui/cyber-button";
import heroBg from "@/assets/hero-bg.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-hero particles-bg relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero/80"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface/50 px-4 py-2 border border-border backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI-Powered Analysis Engine</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            CryptoFirm
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered cryptographic firmware analysis tool that identifies, analyzes, and reports on embedded security implementations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CyberButton variant="hero" size="xl" asChild className="group">
              <Link to="/upload">
                Start Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CyberButton>
            <CyberButton variant="outline" size="xl" asChild>
              <Link to="/results">
                View Demo Results
              </Link>
            </CyberButton>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary/30 transition-all hover:shadow-glow">
            <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Deep Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced pattern recognition identifies cryptographic primitives including AES, RSA, SHA, ECC, and custom implementations.
            </p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-secondary/30 transition-all hover:shadow-glow">
            <div className="h-12 w-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Lightning Fast</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-accelerated analysis processes firmware in seconds, not hours. Support for ARM, MIPS, RISC-V, and AVR architectures.
            </p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-glow">
            <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get AI-powered recommendations and security insights with detailed protocol analysis and vulnerability detection.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Firmware Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Crypto Algorithms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.7%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-muted-foreground">Average Analysis Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to analyze your firmware?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your firmware file and get comprehensive cryptographic analysis with AI-powered insights in seconds.
          </p>
          <CyberButton variant="matrix" size="xl" asChild glow>
            <Link to="/upload">
              Get Started Now
              <Download className="ml-2 h-5 w-5" />
            </Link>
          </CyberButton>
        </div>
      </div>
    </div>
  );
}