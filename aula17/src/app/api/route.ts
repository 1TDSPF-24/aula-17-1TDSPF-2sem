import { client } from "@/lib/appwrite_client";
import { TipoProduto } from "@/types";
import { Databases, ID } from "appwrite";
import { NextResponse } from 'next/server';

const database = new Databases(client)

export async function createProduct(produto: TipoProduto) {
    try {
        console.log(database)

        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
            ID.unique(),
            produto
        )

        return response
    } catch (error) {
        console.error("Erro ao criar o produto", error)
        throw new Error("Falha ao criar o produto")
    }
}

export async function POST(request: Request) {
    try {
        const { nome, preco } = await request.json()
        const produto: TipoProduto = { nome, preco }

        await createProduct(produto)

        return NextResponse.json(produto, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: "Falha ao criar o produto" }, { status: 500 })
    }
}