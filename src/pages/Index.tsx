import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: string;
  status: 'active' | 'inactive' | 'maintenance';
}

interface House {
  id: string;
  number: string;
  address: string;
  services: Service[];
  x: number;
  y: number;
}

const HOUSES: House[] = [
  // Левая часть комплекса
  {
    id: '69a',
    number: '69а',
    address: 'ул. Минская, д. 69а',
    x: 15,
    y: 20,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Домофон', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '69b',
    number: '69б',
    address: 'ул. Минская, д. 69б',
    x: 15,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,150₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,600₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,400₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '250₽', status: 'maintenance' }
    ]
  },
  {
    id: '69v',
    number: '69в',
    address: 'ул. Минская, д. 69в',
    x: 15,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,700₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Уборка', price: '150₽', status: 'active' }
    ]
  },
  {
    id: '69g',
    number: '69г',
    address: 'ул. Минская, д. 69г',
    x: 15,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,220₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,850₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,520₽', status: 'active' },
      { id: '4', name: 'Консьерж', price: '400₽', status: 'active' }
    ]
  },
  // Центральная часть
  {
    id: '67a',
    number: '67а',
    address: 'ул. Минская, д. 67а',
    x: 25,
    y: 15,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,300₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,000₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,600₽', status: 'active' },
      { id: '4', name: 'Видеонаблюдение', price: '200₽', status: 'active' }
    ]
  },
  {
    id: '67b',
    number: '67б',
    address: 'ул. Минская, д. 67б',
    x: 25,
    y: 30,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'inactive' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Интернет', price: '800₽', status: 'active' }
    ]
  },
  {
    id: '67v',
    number: '67в',
    address: 'ул. Минская, д. 67в',
    x: 25,
    y: 45,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'maintenance' },
      { id: '4', name: 'Мусоропровод', price: '120₽', status: 'active' }
    ]
  },
  // Правая часть
  {
    id: '65',
    number: '65',
    address: 'ул. Минская, д. 65',
    x: 65,
    y: 25,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Парковка', price: '500₽', status: 'active' }
    ]
  },
  {
    id: '63',
    number: '63',
    address: 'ул. Минская, д. 63',
    x: 55,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Охрана', price: '300₽', status: 'active' }
    ]
  },
  {
    id: '61',
    number: '61',
    address: 'ул. Минская, д. 61',
    x: 55,
    y: 45,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Детская площадка', price: '80₽', status: 'active' }
    ]
  },
  {
    id: '59',
    number: '59',
    address: 'ул. Минская, д. 59',
    x: 75,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Благоустройство', price: '200₽', status: 'maintenance' }
    ]
  },
  {
    id: '57',
    number: '57',
    address: 'ул. Минская, д. 57',
    x: 65,
    y: 45,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Спортплощадка', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '55',
    number: '55',
    address: 'ул. Минская, д. 55',
    x: 55,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Зеленые насаждения', price: '120₽', status: 'active' }
    ]
  },
  {
    id: '53',
    number: '53',
    address: 'ул. Минская, д. 53',
    x: 45,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Освещение', price: '150₽', status: 'active' }
    ]
  },
  // Нижняя часть
  {
    id: '51',
    number: '51',
    address: 'ул. Минская, д. 51',
    x: 75,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Магазин в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '49',
    number: '49',
    address: 'ул. Минская, д. 49',
    x: 65,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Почта', price: '50₽', status: 'active' }
    ]
  },
  {
    id: '47',
    number: '47',
    address: 'ул. Минская, д. 47',
    x: 85,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,400₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,200₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,700₽', status: 'active' },
      { id: '4', name: 'Аптека в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '45',
    number: '45',
    address: 'ул. Минская, д. 45',
    x: 85,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Кафе в доме', price: '0₽', status: 'active' }
    ]
  }
];

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [showServices, setShowServices] = useState(false);

  const handleLogin = () => {
    if (password === 'rodnik2024') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль');
    }
  };

  const handleHouseClick = (house: House) => {
    setSelectedHouse(house);
    setShowServices(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-red-500';
      case 'maintenance': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активна';
      case 'inactive': return 'Отключена';
      case 'maintenance': return 'Обслуживание';
      default: return 'Неизвестно';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Building2" size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">УК "Родник"</CardTitle>
            <CardDescription>Система управления жилым комплексом</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Пароль доступа</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти в систему
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">УК "Родник"</h1>
              <p className="text-sm text-gray-500">Управление жилым комплексом</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center space-x-2"
          >
            <Icon name="LogOut" size={16} />
            <span>Выйти</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Map" size={24} className="text-primary" />
                  <span>Карта жилого комплекса</span>
                </CardTitle>
                <CardDescription>
                  Нажмите на номер дома для просмотра услуг
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-gray-100 via-green-50 to-gray-200 rounded-lg p-8 h-96 overflow-hidden" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`}}>
                  
                  {/* Territory borders */}
                  <div className="absolute inset-2 border-2 border-blue-300 border-dashed opacity-40 rounded-lg"></div>
                  
                  {/* Street names */}
                  <div className="absolute top-2 left-4 text-xs font-semibold text-gray-600 bg-white/80 px-2 py-1 rounded">
                    ул. Минская
                  </div>
                  
                  {/* Infrastructure objects */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-2 text-xs text-center">
                      <Icon name="Car" size={16} className="text-blue-600 mx-auto mb-1" />
                      <div className="text-blue-800 font-semibold">Парковка</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-16 right-8">
                    <div className="bg-green-100 border border-green-300 rounded-lg p-2 text-xs text-center">
                      <Icon name="TreePine" size={16} className="text-green-600 mx-auto mb-1" />
                      <div className="text-green-800 font-semibold">Сквер</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 right-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 text-xs text-center">
                      <Icon name="Baby" size={16} className="text-yellow-600 mx-auto mb-1" />
                      <div className="text-yellow-800 font-semibold">Детсад №78</div>
                    </div>
                  </div>
                  
                  {/* Houses */}
                  {HOUSES.map((house) => (
                    <button
                      key={house.id}
                      onClick={() => handleHouseClick(house)}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: `${house.x}%`, top: `${house.y}%` }}
                    >
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-2 shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 hover:scale-105">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-primary rounded mx-auto mb-1 flex items-center justify-center">
                            <Icon name="Building2" size={16} className="text-white" />
                          </div>
                          <div className="font-bold text-gray-900 text-sm">{house.number}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {/* Roads and paths */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-300 opacity-50 rounded-b-lg"></div>
                  <div className="absolute top-1/2 left-0 w-full h-3 bg-gray-300 opacity-30"></div>
                  <div className="absolute left-1/4 top-0 w-2 h-full bg-gray-300 opacity-25"></div>
                  <div className="absolute right-1/4 top-0 w-2 h-full bg-gray-300 opacity-25"></div>
                  
                  {/* Legend */}
                  <div className="absolute top-2 right-2 bg-white/90 rounded-lg p-2 text-xs">
                    <div className="font-semibold text-gray-700 mb-1">УК "Родник"</div>
                    <div className="text-gray-600">{HOUSES.length} домов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            
            {/* Statistics */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                  <span>Статистика</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Всего домов:</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">{HOUSES.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Активных услуг:</span>
                  <Badge className="bg-green-500 text-lg px-3 py-1">
                    {HOUSES.reduce((acc, house) => acc + house.services.filter(s => s.status === 'active').length, 0)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">На обслуживании:</span>
                  <Badge className="bg-yellow-500 text-lg px-3 py-1">
                    {HOUSES.reduce((acc, house) => acc + house.services.filter(s => s.status === 'maintenance').length, 0)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Отключено:</span>
                  <Badge className="bg-red-500 text-lg px-3 py-1">
                    {HOUSES.reduce((acc, house) => acc + house.services.filter(s => s.status === 'inactive').length, 0)}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span>Контакты УК</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-gray-500" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-gray-500" />
                  <span className="text-gray-700">info@rodnik-uk.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-gray-500" />
                  <span className="text-gray-700">ул. Лесная, д. 1, офис 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-gray-500" />
                  <span className="text-gray-700">Пн-Пт: 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency */}
            <Card className="shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-600">
                  <Icon name="AlertTriangle" size={24} />
                  <span>Экстренные службы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Диспетчерская:</span>
                  <span className="font-bold text-red-600">101</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Слесарь:</span>
                  <span className="font-bold text-red-600">102</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Электрик:</span>
                  <span className="font-bold text-red-600">103</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Services Dialog */}
      <Dialog open={showServices} onOpenChange={setShowServices}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Icon name="Home" size={24} className="text-primary" />
              <span>Дом № {selectedHouse?.number}</span>
            </DialogTitle>
            <DialogDescription>
              {selectedHouse?.address}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {selectedHouse?.services.map((service) => (
              <Card key={service.id} className="shadow-sm">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                    <div>
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">{getStatusText(service.status)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-900">{service.price}</div>
                    <div className="text-xs text-gray-500">в месяц</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowServices(false)}>
              Закрыть
            </Button>
            <Button>
              <Icon name="FileText" size={16} className="mr-2" />
              Отчет по дому
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}