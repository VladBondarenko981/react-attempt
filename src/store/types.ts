export type registrationPayload = {
  email: string;
  password: string;
};

export type loginPayload = {
  email: string;
  password: string;
};

export type loginData = {
  password: string;
  token: {
    token: string;
  };
  email: string;
  message: string;
};

export type GeoData = {
  longitude: number;
  latitude: number;
};

export type FavouriteCities = {
  city: string;
  email: string;
};
