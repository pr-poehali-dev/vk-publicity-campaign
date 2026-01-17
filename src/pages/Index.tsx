import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-black opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full border border-black opacity-5"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tight">
            ОБРАБОТКА
            <br />
            <span className="text-primary">ФОТО</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Зайди в услуги и нажми написать
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-12 py-7 rounded-none font-semibold hover:scale-105 transition-transform"
            onClick={() => window.open('https://vk.ru/pixelfix_editphoto', '_blank')}
          >
            Паблик ВК
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;