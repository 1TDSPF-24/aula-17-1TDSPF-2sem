import client from "@/lib/appwrite_client";
import { NextResponse } from "next/server";
import { TipoProduto } from "@/types";
import { Databases, ID } from "appwrite";

//cliente do appwrite
const database = new Databases(client);

// CRIANDO FUNÇÃO PARA O POST
export async function createProduto(produto: TipoProduto) {
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
            ID.unique(),
            produto);

        return response;
    } catch (error) {
        console.error("Erro criando o produto", error);
        throw new Error("Falha ao criar o produto.")
    }
}

// CRIAR POST
export async function POST(request:Request) {
    try {
        
        const {nome,preco} = await request.json();
        const produto = {nome,preco} as TipoProduto;
        await createProduto(produto);
        return NextResponse.json(produto,{ status:201 });

    } catch (error) {
        return NextResponse.json({ error: "Falha ao criar o produto: " + error },{ status:500 });
    }
}