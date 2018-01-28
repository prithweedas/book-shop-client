import { isDevMode } from '@angular/core'

export const TOKEN = "token";
export const REFRESH_TOKEN = "refreshToken";
export const RESOURCE_URL = isDevMode ? "http://localhost:4200" : '<PRODUCTION-URL>';