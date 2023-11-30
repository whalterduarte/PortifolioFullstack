// Importe as dependências necessárias

import { NextResponse,NextRequest } from 'next/server';

// Função para lidar com o método GET
export const GET = async (req: Request, res:Response) => {

  return NextResponse.json({Ping: 'Pong'})
}
