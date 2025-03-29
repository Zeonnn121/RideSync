export interface Driver {
  id: string;
  name: string;
  phone: string;
  rating: number;
  carModel: string;
  licensePlate: string;
  availableSeats: number;
  location: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  subscription: {
    active: boolean;
    expiryDate?: string;
  };
}