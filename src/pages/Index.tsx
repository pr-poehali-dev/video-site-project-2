import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const videos = [
    {
      id: 1,
      title: "Любовь это... просто быть вместе",
      subtitle: "...just being together",
      thumbnail: "/img/08153a86-b87c-4a4a-a411-a1c85d87842a.jpg",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Любовь это... держать за руку",
      subtitle: "...holding hands",
      thumbnail: "/img/3347b36f-260b-47fd-8c34-94ba8b58c60e.jpg",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Любовь это... обещания навечно",
      subtitle: "...promises forever",
      thumbnail: "/img/e17d8ce2-44e1-425e-ac48-bf7184fff027.jpg",
      duration: "3:15"
    },
    {
      id: 4,
      title: "Любовь это... первый взгляд",
      subtitle: "...first sight",
      thumbnail: "/img/08153a86-b87c-4a4a-a411-a1c85d87842a.jpg",
      duration: "2:10"
    },
    {
      id: 5,
      title: "Любовь это... понимание без слов",
      subtitle: "...understanding without words",
      thumbnail: "/img/3347b36f-260b-47fd-8c34-94ba8b58c60e.jpg",
      duration: "4:00"
    },
    {
      id: 6,
      title: "Любовь это... общие мечты",
      subtitle: "...shared dreams",
      thumbnail: "/img/e17d8ce2-44e1-425e-ac48-bf7184fff027.jpg",
      duration: "2:55"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl animate-heart-beat mr-4">💕</div>
          <h1 className="font-script text-6xl md:text-8xl text-primary font-bold animate-fade-in">
            Любовь это...
          </h1>
          <div className="text-6xl animate-heart-beat ml-4">💕</div>
        </div>
        <p className="font-script text-3xl md:text-4xl text-gray-600 mb-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Love is...
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          Коллекция романтичных видео о том, что такое настоящая любовь
        </p>
      </header>

      {/* Video Gallery */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden romantic-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="heart-gradient text-white border-0 rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-transform">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4 text-2xl animate-float">
                    ❤️
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-script text-2xl text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="font-script text-lg text-gray-500 italic">
                    {video.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="text-2xl mr-2">💗</div>
          <p className="font-script text-2xl text-gray-600">
            Создано с любовью
          </p>
          <div className="text-2xl ml-2">💗</div>
        </div>
        <p className="text-gray-500">
          Каждое видео рассказывает свою историю любви
        </p>
      </footer>

      {/* Floating Hearts Animation */}
      <div className="fixed top-1/4 left-10 text-pink-300 text-4xl animate-float opacity-20">
        💕
      </div>
      <div className="fixed top-1/3 right-10 text-rose-300 text-3xl animate-float opacity-30" style={{animationDelay: '1s'}}>
        💖
      </div>
      <div className="fixed bottom-1/4 left-20 text-pink-400 text-2xl animate-float opacity-25" style={{animationDelay: '2s'}}>
        💝
      </div>
      <div className="fixed bottom-1/3 right-20 text-rose-400 text-5xl animate-float opacity-20" style={{animationDelay: '0.5s'}}>
        💗
      </div>
    </div>
  );
};

export default Index;