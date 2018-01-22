import { isDevMode } from '@angular/core'

export const TOKEN = "token";
export const REFRESH_TOKEN = "refreshToken";
export const RESOURCE_URL = isDevMode ? "http://localhost:3000" : '<PRODUCTION-URL>';