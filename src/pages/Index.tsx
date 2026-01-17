import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-black opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full border border-black opacity-5"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight">
            СОЗДАВАЙ
            <br />
            <span className="text-primary">ВМЕСТЕ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Сообщество творцов и мечтателей. 
            <br />
            Присоединяйся к тем, кто меняет правила.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-12 py-7 rounded-none font-semibold hover:scale-105 transition-transform"
          >
            Вступить в паблик
          </Button>
        </div>
      </section>

      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-white">
                <Icon name="Users" size={40} />
              </div>
              <h3 className="text-2xl font-bold">15K+</h3>
              <p className="text-gray-400 leading-relaxed">
                Активных участников обсуждают идеи каждый день
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in [animation-delay:200ms]">
              <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-white">
                <Icon name="Zap" size={40} />
              </div>
              <h3 className="text-2xl font-bold">Актуально</h3>
              <p className="text-gray-400 leading-relaxed">
                Свежий контент и горячие новости без задержки
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in [animation-delay:400ms]">
              <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-white">
                <Icon name="Heart" size={40} />
              </div>
              <h3 className="text-2xl font-bold">Атмосфера</h3>
              <p className="text-gray-400 leading-relaxed">
                Место где ценят мнение и поддерживают начинания
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-6 py-2 border-2 border-black mb-4">
            <p className="text-sm font-semibold tracking-widest">ВРЕМЯ ДЕЙСТВОВАТЬ</p>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Не упусти
            <br />
            момент
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Каждый день — новые возможности, новые знакомства, новые истории.
          </p>
          
          <Button 
            size="lg"
            className="text-lg px-12 py-7 rounded-none font-semibold bg-black text-white hover:bg-primary hover:scale-105 transition-all"
          >
            Подписаться сейчас
          </Button>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
