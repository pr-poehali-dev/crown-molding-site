import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ПотолокПлинтус</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#baseboards" className="text-gray-700 hover:text-blue-600 transition-colors">Плинтусы</a>
              <a href="#ceilings" className="text-gray-700 hover:text-blue-600 transition-colors">Потолки</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Плинтусы и потолки
              <span className="block text-blue-200">полный цикл услуг</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Консультация • Материалы • Монтаж • Гарантия
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Icon name="Phone" className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества полного цикла</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="MessageCircle" className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">Профессиональная консультация по выбору материалов и дизайну</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Package" className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Материалы</h3>
              <p className="text-gray-600">Качественные материалы напрямую от производителя</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Wrench" className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Монтаж</h3>
              <p className="text-gray-600">Профессиональный монтаж силами опытных мастеров</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Полная гарантия на материалы и выполненные работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Baseboards Section */}
      <section id="baseboards" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Плинтусы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий выбор плинтусов для любого интерьера. От классических до современных решений.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Square" className="mr-2 text-blue-600" />
                  Деревянные плинтусы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Натуральное дерево, экологичность, классический вид</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Дуб</Badge>
                  <Badge variant="secondary">Сосна</Badge>
                  <Badge variant="secondary">Береза</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Layers" className="mr-2 text-blue-600" />
                  МДФ плинтусы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Доступная цена, влагостойкость, простота монтажа</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Белый</Badge>
                  <Badge variant="secondary">Под дерево</Badge>
                  <Badge variant="secondary">Цветной</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" className="mr-2 text-blue-600" />
                  Полиуретановые
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Гибкость, влагостойкость, долговечность</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Гибкие</Badge>
                  <Badge variant="secondary">Высокие</Badge>
                  <Badge variant="secondary">Декоративные</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ceilings Section */}
      <section id="ceilings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Потолки</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Современные потолочные решения для создания идеального интерьера.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Sparkles" className="mr-2 text-blue-600" />
                  Натяжные потолки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Быстрый монтаж, идеально ровная поверхность, большой выбор цветов</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Матовые и глянцевые
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Многоуровневые
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    С подсветкой
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Grid3x3" className="mr-2 text-blue-600" />
                  Подвесные потолки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Армстронг, грильято, реечные потолки для офисов и дома</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Армстронг
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Грильято
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Реечные
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг от консультации до завершения проекта.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Ruler" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Замер</h3>
              <p className="text-gray-600">Точный замер помещения с выездом мастера</p>
            </div>
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Palette" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Дизайн</h3>
              <p className="text-gray-600">Подбор цветов и стилей под ваш интерьер</p>
            </div>
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Truck" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Быстрая доставка материалов на объект</p>
            </div>
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Hammer" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Монтаж</h3>
              <p className="text-gray-600">Профессиональная установка опытными мастерами</p>
            </div>
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Sparkles" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Уборка</h3>
              <p className="text-gray-600">Уборка после завершения работ</p>
            </div>
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Icon name="Award" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Официальная гарантия на все виды работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-blue-100">Получите бесплатную консультацию и расчет стоимости</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3" size={20} />
                  <span>info@potolokplintus.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-3" size={20} />
                  <span>г. Москва, ул. Строительная, 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-3" size={20} />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Быстрая заявка</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <textarea 
                  placeholder="Описание работ" 
                  rows={3}
                  className="w-full p-3 rounded-lg text-gray-900"
                ></textarea>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Home" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">ПотолокПлинтус</span>
            </div>
            <p className="text-gray-400">
              © 2024 ПотолокПлинтус. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;