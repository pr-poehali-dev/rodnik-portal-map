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
  // Верхняя часть - левый блок
  {
    id: '69_2',
    number: '69/2',
    address: 'ул. Минская, д. 69/2',
    x: 10,
    y: 15,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '250₽', status: 'active' }
    ]
  },
  {
    id: '69d',
    number: '69д',
    address: 'ул. Минская, д. 69д',
    x: 10,
    y: 25,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,150₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,700₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Домофон', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '69e',
    number: '69е',
    address: 'ул. Минская, д. 69е',
    x: 10,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,650₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,400₽', status: 'active' },
      { id: '4', name: 'Уборка', price: '150₽', status: 'active' }
    ]
  },
  {
    id: '69_1',
    number: '69/1',
    address: 'ул. Минская, д. 69/1',
    x: 10,
    y: 45,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,220₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,480₽', status: 'active' },
      { id: '4', name: 'Консьерж', price: '400₽', status: 'active' }
    ]
  },
  {
    id: '69v',
    number: '69в',
    address: 'ул. Минская, д. 69в',
    x: 10,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Видеонаблюдение', price: '200₽', status: 'active' }
    ]
  },
  {
    id: '69a',
    number: '69а',
    address: 'ул. Минская, д. 69а',
    x: 10,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,700₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '250₽', status: 'maintenance' }
    ]
  },
  // Центральный блок
  {
    id: '67_1',
    number: '67/1',
    address: 'ул. Минская, д. 67/1',
    x: 20,
    y: 20,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Интернет', price: '800₽', status: 'active' }
    ]
  },
  {
    id: '67b',
    number: '67б',
    address: 'ул. Минская, д. 67б',
    x: 20,
    y: 30,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'inactive' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Мусоропровод', price: '120₽', status: 'active' }
    ]
  },
  {
    id: '67a_1',
    number: '67а',
    address: 'ул. Минская, д. 67а',
    x: 20,
    y: 40,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,300₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,000₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,600₽', status: 'active' },
      { id: '4', name: 'Охрана', price: '300₽', status: 'active' }
    ]
  },
  {
    id: '67a_2',
    number: '67а',
    address: 'ул. Минская, д. 67а',
    x: 20,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Парковка', price: '500₽', status: 'active' }
    ]
  },
  {
    id: '63a',
    number: '63а',
    address: 'ул. Минская, д. 63а',
    x: 30,
    y: 45,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Детская площадка', price: '80₽', status: 'active' }
    ]
  },
  {
    id: '67v',
    number: '67в',
    address: 'ул. Минская, д. 67в',
    x: 30,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'maintenance' },
      { id: '4', name: 'Благоустройство', price: '200₽', status: 'active' }
    ]
  },
  // Правая часть
  {
    id: '67',
    number: '67',
    address: 'ул. Минская, д. 67',
    x: 40,
    y: 25,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Спортплощадка', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '63',
    number: '63',
    address: 'ул. Минская, д. 63',
    x: 50,
    y: 40,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Зеленые насаждения', price: '120₽', status: 'active' }
    ]
  },
  {
    id: '65',
    number: '65',
    address: 'ул. Минская, д. 65',
    x: 60,
    y: 35,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Освещение', price: '150₽', status: 'active' }
    ]
  },
  {
    id: '61',
    number: '61',
    address: 'ул. Минская, д. 61',
    x: 50,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Магазин в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '53',
    number: '53',
    address: 'ул. Минская, д. 53',
    x: 40,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Почта', price: '50₽', status: 'active' }
    ]
  },
  {
    id: '59',
    number: '59',
    address: 'ул. Минская, д. 59',
    x: 70,
    y: 40,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,400₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,200₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,700₽', status: 'active' },
      { id: '4', name: 'Аптека в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '57',
    number: '57',
    address: 'ул. Минская, д. 57',
    x: 60,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Кафе в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '57a',
    number: '57а',
    address: 'ул. Минская, д. 57а',
    x: 65,
    y: 55,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Домофон', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '55',
    number: '55',
    address: 'ул. Минская, д. 55',
    x: 50,
    y: 60,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '250₽', status: 'active' }
    ]
  },
  {
    id: '47',
    number: '47',
    address: 'ул. Минская, д. 47',
    x: 75,
    y: 50,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Консьерж', price: '400₽', status: 'active' }
    ]
  },
  {
    id: '51',
    number: '51',
    address: 'ул. Минская, д. 51',
    x: 65,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Уборка', price: '150₽', status: 'active' }
    ]
  },
  {
    id: '49',
    number: '49',
    address: 'ул. Минская, д. 49',
    x: 70,
    y: 70,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Видеонаблюдение', price: '200₽', status: 'active' }
    ]
  },
  {
    id: '45',
    number: '45',
    address: 'ул. Минская, д. 45',
    x: 80,
    y: 65,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Интернет', price: '800₽', status: 'active' }
    ]
  },
  {
    id: '43',
    number: '43',
    address: 'ул. Минская, д. 43',
    x: 85,
    y: 70,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Мусоропровод', price: '120₽', status: 'active' }
    ]
  },
  {
    id: '43_3',
    number: '43/3',
    address: 'ул. Минская, д. 43/3',
    x: 90,
    y: 75,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Охрана', price: '300₽', status: 'active' }
    ]
  },
  {
    id: '43a_2',
    number: '43а/2',
    address: 'ул. Минская, д. 43а/2',
    x: 85,
    y: 80,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Парковка', price: '500₽', status: 'active' }
    ]
  },
  {
    id: '43a_3',
    number: '43а/3',
    address: 'ул. Минская, д. 43а/3',
    x: 90,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Детская площадка', price: '80₽', status: 'active' }
    ]
  },
  // Левая группа домов
  {
    id: '69_main',
    number: '69',
    address: 'ул. Минская, д. 69',
    x: 15,
    y: 75,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Благоустройство', price: '200₽', status: 'maintenance' }
    ]
  },
  {
    id: '69b',
    number: '69б',
    address: 'ул. Минская, д. 69б',
    x: 25,
    y: 75,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Спортплощадка', price: '100₽', status: 'active' }
    ]
  },
  // Верхняя группа домов (по образцу карты)
  {
    id: '83',
    number: '83',
    address: 'ул. Минская, д. 83',
    x: 15,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,400₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,200₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,700₽', status: 'active' },
      { id: '4', name: 'Зеленые насаждения', price: '120₽', status: 'active' }
    ]
  },
  {
    id: '81',
    number: '81',
    address: 'ул. Минская, д. 81',
    x: 25,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Освещение', price: '150₽', status: 'active' }
    ]
  },
  {
    id: '79',
    number: '79',
    address: 'ул. Минская, д. 79',
    x: 35,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Магазин в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '77',
    number: '77',
    address: 'ул. Минская, д. 77',
    x: 45,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Почта', price: '50₽', status: 'active' }
    ]
  },
  {
    id: '75a',
    number: '75а',
    address: 'ул. Минская, д. 75а',
    x: 55,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Аптека в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '75',
    number: '75',
    address: 'ул. Минская, д. 75',
    x: 65,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Кафе в доме', price: '0₽', status: 'active' }
    ]
  },
  {
    id: '71',
    number: '71',
    address: 'ул. Минская, д. 71',
    x: 75,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,250₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,900₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,550₽', status: 'active' },
      { id: '4', name: 'Домофон', price: '100₽', status: 'active' }
    ]
  },
  {
    id: '71a',
    number: '71а',
    address: 'ул. Минская, д. 71а',
    x: 85,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,280₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,950₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,580₽', status: 'active' },
      { id: '4', name: 'Лифт', price: '250₽', status: 'active' }
    ]
  },
  {
    id: '73',
    number: '73',
    address: 'ул. Минская, д. 73',
    x: 95,
    y: 85,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,200₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,800₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,500₽', status: 'active' },
      { id: '4', name: 'Уборка', price: '150₽', status: 'active' }
    ]
  },
  // Дополнительные дома
  {
    id: '29a',
    number: '29а',
    address: 'ул. Минская, д. 29а',
    x: 5,
    y: 90,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,350₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,100₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,650₽', status: 'active' },
      { id: '4', name: 'Консьерж', price: '400₽', status: 'active' }
    ]
  },
  {
    id: '40k1',
    number: '40к1',
    address: 'ул. Минская, д. 40к1',
    x: 15,
    y: 90,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,180₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '2,750₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,450₽', status: 'active' },
      { id: '4', name: 'Видеонаблюдение', price: '200₽', status: 'active' }
    ]
  },
  {
    id: '29',
    number: '29',
    address: 'ул. Минская, д. 29',
    x: 25,
    y: 90,
    services: [
      { id: '1', name: 'Водоснабжение', price: '1,320₽', status: 'active' },
      { id: '2', name: 'Отопление', price: '3,050₽', status: 'active' },
      { id: '3', name: 'Электричество', price: '1,620₽', status: 'active' },
      { id: '4', name: 'Интернет', price: '800₽', status: 'active' }
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
                <div className="relative rounded-lg overflow-hidden h-96 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/files/8aee36df-ba9f-4dc7-87b0-030cd0e3f853.png)'}}>
                  {/* Полупрозрачный слой для лучшей видимости домов */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Houses */}
                  {HOUSES.map((house) => (
                    <button
                      key={house.id}
                      onClick={() => handleHouseClick(house)}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: `${house.x}%`, top: `${house.y}%` }}
                    >
                      <div className="bg-white/95 border-2 border-orange-400 rounded-lg p-2 shadow-lg hover:shadow-xl hover:border-primary transition-all duration-200 hover:scale-110 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-primary rounded mx-auto mb-1 flex items-center justify-center">
                            <Icon name="Building2" size={14} className="text-white" />
                          </div>
                          <div className="font-bold text-gray-900 text-xs leading-tight">{house.number}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {/* Legend */}
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-3 text-xs shadow-lg border">
                    <div className="font-bold text-gray-800 mb-1">УК "Родник"</div>
                    <div className="text-gray-600">{HOUSES.length} домов</div>
                    <div className="text-green-600 text-xs mt-1">Кликните на дом</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            


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
                  <span className="text-gray-700">296-10-02</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-gray-500" />
                  <span className="text-gray-700">Минская улица, д. 69/2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-gray-500" />
                  <div className="text-gray-700">
                    <div>Пн-Пт: 08:00-17:00</div>
                    <div className="text-sm text-gray-500">Перерыв: 12:00-13:00</div>
                  </div>
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