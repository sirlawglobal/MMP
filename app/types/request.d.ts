// app/types/request.d.ts
import { Request as ExpressRequest } from 'express';

declare module '@remix-run/node' {
  interface Request extends ExpressRequest {
    userId?: string;
    role?: string;
    // Add any other custom properties you attach to the request
  }
}