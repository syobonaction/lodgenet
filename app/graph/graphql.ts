export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }

export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
}

export type Query = {
  __typename?: "Query"
  currentWeather: CurrentWeather
}

/* Current weather conditions at a Location */
export type CurrentWeather = {
  __typename?: "CurrentWeather"
  weather: [Weather]
  atmosphere: Atmosphere
  conditions: Conditions
}

export type Weather = {
  __typename?: "Weather"
  id: Scalars['Int']['output']
  type: Scalars['Int']['output']
  description: Scalars['Int']['output']
  icon: Scalars['String']['output']
}

export type Atmosphere = {
  __typename?: "Atmosphere"
  temperature: Temperature
  pressure: Scalars['Int']['output']
  humidity: Scalars['Int']['output']
}

export type Temperature = {
  __typename?: "Temperature"
  real: Scalars['Float']['output']
  min: Scalars['Float']['output']
  max: Scalars['Float']['output']
  feelslike: Scalars['Float']['output']
}

export type Conditions = {
  __typename?: "Conditions"
  wind: Wind
  sunrise: Scalars['Int']['output']
  sunset: Scalars['Int']['output']
}

export type Wind = {
  __typename?: "Wind"
  speed: Scalars['Float']['output']
  degree: Scalars['Int']['output']
  gust: Scalars['Float']['output']
}

export type GetLocalWeatherQueryVariables = Exact<{ [key: string]: string }>