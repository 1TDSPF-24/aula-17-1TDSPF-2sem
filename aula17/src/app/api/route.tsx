import { TipoParametro } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        // Leitura do arquivo JSON na pasta src/data/base.json
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');

        // Parsing do JSON e retorno da resposta
        const data = JSON.parse(file);
        return NextResponse.json(data);
    } catch (error) {
        // Log de erro no console e retorno de uma resposta de erro para o cliente
        console.error("Erro ao ler o arquivo JSON:", error);
        return NextResponse.json({ message: "Erro ao ler o arquivo produtos" }, { status: 500 });
    }
}
