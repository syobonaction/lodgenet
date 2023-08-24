export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }

export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
}

/* Current weather conditions at a Location */
export type Current = {
  __typename?: "Current"
  /* A Location's current temperature */
  temperature: Scalars['Int']['output']
  /* What the Location's current temperature feels like */
  feelslike: Scalars['Int']['output']
  /* Current wind speed at the location */
  windSpeed: Scalars['Int']['output']
  /* Current wind direction at the location */
  windDirection: Scalars['String']['output']
  /* If currently daytime at the Location */
  isDay: Scalars['Boolean']['output']
}

export type Query = {
  __typename?: 'Query';
  /** Get a Location's current weather conditions */
  locale: Location;
};

/* A location given by zipcode */
export type Location = {
  __typename?: "Location"
  /* The name of a location */
  name: Scalars['String']['output']
  /* The region (state) of a location */
  region: Scalars['String']['output']
  /* Current weather conditions at a Location */
  current: Current
}

export type GetLocalWeatherQueryVariables = Exact<{ [key: string]: string }>