import { apiUrls } from "./constants";

type Environment = "local" | "production";

export const getApiBase = (): Environment => {
  switch (process.env.NODE_ENV) {
    case "development":
      return apiUrls.development as Environment;

    case "production":
      return apiUrls.production as Environment;

    default:
      return apiUrls.production as Environment;
  }
};
