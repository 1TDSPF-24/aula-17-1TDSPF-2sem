import client from "@/lib/appwrite_client";
import { TipoProduto } from "@/types";
import { Databases, ID } from "appwrite";

const database = new Databases(client)

export async function pegaProduto(produto: TipoProduto) {
    try {
        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.EXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
            ID.unique(), produto
        )
    } catch (error) {
        console.error("Erro criando produto.", error)
        throw new Error("Falha ao criar produto.")
    }
}
