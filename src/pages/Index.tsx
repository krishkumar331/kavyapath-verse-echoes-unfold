
import { useEffect, useState } from "react";
import { ArrowDownIcon, Heart, Lightbulb, PenTool, Sparkles, Star, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PoemCard from "@/components/PoemCard";
import ParallaxSection from "@/components/ParallaxSection";
import CategoryCard from "@/components/CategoryCard";
import FeaturedPoet from "@/components/FeaturedPoet";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample featured poems
  const featuredPoems = [
    {
      id: 1,
      title: "मेरी प्रेम कविता",
      authorName: "अमित शर्मा",
      excerpt: "इस जीवन को सुंदर बनाने वाली, तुम हो मेरी प्रेरणा। हर पल, हर क्षण, मुझे याद आती है तुम्हारी मुस्कान।",
      likes: 127,
      comments: 23,
      category: "प्रेम",
      language: "hindi" as const,
    },
    {
      id: 2,
      title: "स्वतंत्रता का गीत",
      authorName: "प्रिया वर्मा",
      excerpt: "आज़ादी के परवाने, हम उड़ते जाएंगे। देश के लिए अपना सब कुछ, न्योछावर कर देंगे।",
      likes: 89,
      comments: 11,
      category: "देशभक्ति",
      language: "hindi" as const,
    },
    {
      id: 3,
      title: "अतीत की यादें",
      authorName: "राजीव सिन्हा",
      excerpt: "वो पुराने दिन, वो यादें, वो बातें। कहाँ गए वो लम्हे, ज़िंदगी के अनमोल रत्न।",
      likes: 165,
      comments: 31,
      category: "जीवन",
      language: "hindi" as const,
    },
  ];

  // Sample categories
  const categories = [
    {
      title: "प्रेम",
      description: "प्रेम और रोमांस की कविताएं",
      icon: <Heart className="h-6 w-6" />,
      count: 243,
      to: "/categories/love",
      color: "bg-red-50 dark:bg-red-950/30",
    },
    {
      title: "देशभक्ति",
      description: "देश के प्रति समर्पण और प्रेम",
      icon: <Sunrise className="h-6 w-6" />, 
      count: 156,
      to: "/categories/patriotic",
      color: "bg-orange-50 dark:bg-orange-950/30",
    },
    {
      title: "प्रकृति",
      description: "प्रकृति की सुंदरता पर कविताएं",
      icon: <Sparkles className="h-6 w-6" />,
      count: 189,
      to: "/categories/nature",
      color: "bg-green-50 dark:bg-green-950/30",
    },
    {
      title: "अध्यात्म",
      description: "आत्मा और ईश्वर की खोज",
      icon: <Lightbulb className="h-6 w-6" />,
      count: 122,
      to: "/categories/spiritual",
      color: "bg-purple-50 dark:bg-purple-950/30",
    },
  ];

  // Featured poets
  const featuredPoets = [
    {
      name: "सुमित राय",
      bio: "प्रकृति और मानव संबंधों पर प्रसिद्ध कवि, कई पुरस्कारों से सम्मानित। हिंदी साहित्य में नए प्रयोगों के लिए जाने जाते हैं।",
      poemCount: 47,
      followers: 1243,
    },
    {
      name: "अनिता मिश्रा",
      bio: "प्रेम और सामाजिक मुद्दों पर लेखन के लिए प्रसिद्ध। इनकी शैली साधारण शब्दों में गहरे भावों को व्यक्त करने के लिए जानी जाती है।",
      poemCount: 38,
      followers: 952,
    },
  ];

  return (
    <div className="min-h-screen bg-kavya-cream/30 dark:bg-kavya-ink">
      <Navbar />

      {/* Hero Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1530739776231-cc8bacbf5760?q=80&w=1974&auto=format&fit=crop" 
        className="h-screen"
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 relative">
          <div className="absolute inset-0 bg-kavya-brown/40 dark:bg-kavya-ink/60 backdrop-blur-sm -z-10"></div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-center"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            काव्यपथ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl text-center mb-8 font-hindi leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            शब्दों से निर्मित एक ऐसा संसार, जहां कविता के माध्यम से आत्मा का सफर होता है
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-6">शुरू करें</Button>
            <Button className="btn-ghost bg-white/20 text-white border-white text-lg px-8 py-6">
              अधिक जानें
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDownIcon className="h-8 w-8 text-white" />
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Poems Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-kavya-maroon dark:text-kavya-gold mb-4">
              चुनिंदा रचनाएँ
            </h2>
            <p className="text-kavya-brown/80 dark:text-kavya-cream/80 max-w-2xl mx-auto">
              प्रेम, विरह, प्रकृति और जीवन के विभिन्न रंगों पर आधारित कुछ बेहतरीन कविताएँ
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPoems.map((poem) => (
              <PoemCard key={poem.id} {...poem} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-secondary">और कविताएँ देखें</Button>
          </div>
        </div>
      </section>

      {/* Categories Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop" 
        className="py-20"
      >
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-kavya-brown/50 dark:bg-kavya-ink/70 backdrop-blur-sm -z-10"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              कविता श्रेणियाँ
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              विभिन्न विषयों और भावनाओं पर आधारित कविताओं का संग्रह
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Poets Section */}
      <section className="py-16 md:py-24 bg-white/50 dark:bg-kavya-ink/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-kavya-maroon dark:text-kavya-gold mb-4">
              प्रमुख कवि
            </h2>
            <p className="text-kavya-brown/80 dark:text-kavya-cream/80 max-w-2xl mx-auto">
              कुछ प्रतिष्ठित कवि जिनकी रचनाएँ पाठकों के दिलों को छू लेती हैं
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredPoets.map((poet, index) => (
              <FeaturedPoet key={index} {...poet} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-secondary">सभी कवि देखें</Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1512386233331-f023884a92e8?q=80&w=2035&auto=format&fit=crop" 
        className="py-20"
      >
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-kavya-brown/50 dark:bg-kavya-ink/70 backdrop-blur-sm -z-10"></div>
          
          <div className="bg-white/90 dark:bg-kavya-ink/90 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kavya-maroon dark:text-kavya-gold mb-4">
                हमारी समुदाय में शामिल हों
              </h2>
              <p className="text-kavya-brown/80 dark:text-kavya-cream/80">
                अपनी कविताएँ साझा करें, अन्य कवियों से जुड़ें और साहित्य के इस यात्रा का हिस्सा बनें
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="text-center p-4">
                <div className="bg-kavya-cream dark:bg-kavya-brown/30 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-kavya-maroon dark:text-kavya-gold mb-4">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-kavya-brown dark:text-kavya-cream mb-2">रचना करें</h3>
                <p className="text-sm text-kavya-brown/80 dark:text-kavya-cream/80">अपनी कविताएँ लिखें और प्रकाशित करें</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-kavya-cream dark:bg-kavya-brown/30 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-kavya-maroon dark:text-kavya-gold mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-kavya-brown dark:text-kavya-cream mb-2">सराहना करें</h3>
                <p className="text-sm text-kavya-brown/80 dark:text-kavya-cream/80">अन्य कवियों की रचनाओं को पढ़ें और सराहें</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-kavya-cream dark:bg-kavya-brown/30 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-kavya-maroon dark:text-kavya-gold mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-kavya-brown dark:text-kavya-cream mb-2">प्रेरित हों</h3>
                <p className="text-sm text-kavya-brown/80 dark:text-kavya-cream/80">साहित्य के माध्यम से एक-दूसरे को प्रेरित करें</p>
              </div>
            </div>

            <div className="text-center">
              <Button className="btn-primary">आज ही जुड़ें</Button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-kavya-brown dark:bg-kavya-ink border-t border-kavya-cream/20 dark:border-kavya-brown/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-display font-bold text-white mb-2">काव्यपथ</h2>
              <p className="text-white/70 max-w-md">
                हिंदी कविता के प्रेमियों के लिए एक मंच, जहां साहित्य सृजन और संवाद का संगम होता है
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-white font-medium mb-3">त्वरित लिंक</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">होम</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">कविताएँ</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">कवि</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">हमारे बारे में</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">संपर्क</h3>
                <ul className="space-y-2">
                  <li className="text-white/70">contact@kavyapath.com</li>
                  <li className="text-white/70">+91 9876543210</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-4 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} काव्यपथ। सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
