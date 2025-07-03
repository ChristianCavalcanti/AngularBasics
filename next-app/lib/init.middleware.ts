import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

export function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const cors = initMiddleware(
  Cors({
    origin: 'http://localhost:4200', // ou '*', mas cuidado em produção
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);