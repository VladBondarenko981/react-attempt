export type LoadWeatherDataFunction = (value: string) => Promise<void>;

export type LoadAddFavouriteCitiesFunction = (
  city: string,
  email: string
) => Promise<void>;

export interface WeatherData {
  nameCity: string;
  temperature: number;
  icon: string;
}
