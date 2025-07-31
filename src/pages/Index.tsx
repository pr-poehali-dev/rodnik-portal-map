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
  {
    id: '1',
    number: '1',
    address: 'ул. Лесная, д. 1',
    x: 20,
    y: 30,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Уборка подъезда', price: '150₽', status: 'maintenance' }
    ]
  },
  {
    id: '2',
    number: '2',
    address: 'ул. Лесная, д. 2',
    x: 45,
    y: 25,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,100₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,600₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,400₽', status: 'active' },
      { id: '4', name: 'Интернет', price: '800₽', status: 'active' }
    ]
  },
  {
    id: '3',
    number: '3',
    address: 'ул. Лесная, д. 3',
    x: 70,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,300₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,000₽', status: 'inactive' },
      { id: '3', name: 'Электричество', price: '1,600₽', status: 'active' },
      { id: '4', name: 'Консьерж', price: '500₽', status: 'active' }
    ]
  },
  {
    id: '4',
    number: '4',
    address: 'ул. Лесная, д. 4',
    x: 25,
    y: 60,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'maintenance' },
      { id: '4', name: 'Видеонаблюдение', price: '300₽', status: 'active' }
    ]
  },
  {
    id: '5',
    number: '5',
    address: 'ул. Лесная, д. 5',
    x: 60,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '200₽', status: 'active' }
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
                <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 h-96 overflow-hidden">
                  {/* Trees decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <Icon name="Trees" size={40} className="absolute top-4 left-4 text-green-600" />
                    <Icon name="Trees" size={32} className="absolute top-8 right-8 text-green-600" />
                    <Icon name="Trees" size={36} className="absolute bottom-8 left-8 text-green-600" />
                  </div>
                  
                  {/* Houses */}
                  {HOUSES.map((house) => (
                    <button
                      key={house.id}
                      onClick={() => handleHouseClick(house)}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: `${house.x}%`, top: `${house.y}%` }}
                    >
                      <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-primary/20 hover:border-primary transition-all duration-200 hover:scale-110">
                        <div className="flex items-center space-x-2">
                          <Icon name="Home" size={20} className="text-primary" />
                          <div className="text-left">
                            <div className="font-bold text-gray-900">{house.number}</div>
                            <div className="text-xs text-gray-500">дом</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {/* Roads */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-400 opacity-30 rounded-b-lg"></div>
                  <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-400 opacity-20"></div>
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
                  <Badge variant="secondary" className="text-lg px-3 py-1">5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Активных услуг:</span>
                  <Badge className="bg-green-500 text-lg px-3 py-1">18</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">На обслуживании:</span>
                  <Badge className="bg-yellow-500 text-lg px-3 py-1">2</Badge>
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