https://prod.liveshare.vsengsaas.visualstudio.com/join?65A5336751C78DBED0C5DBFD153CF619222D


https://pixabay.com/pt/vectors/caixa-de-madeira-fr%C3%A1gil-caixa-carga-149006/


//Criar uma lista de objetos de Produtos Eletrônicos
export const listaProdutos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 1500.00,
        marca: "Apple",
        categoria: "Celulares",
        descricao: "Celular com tela de 6 polegadas e 4GB de RAM",
        imagem:"/img/produtos-640×462.png",
    },
    {
        id: 2,
        nome: "Notebook",
        preco: 3000.00,
        marca: "Dell",
        categoria: "Computadores",
        descricao: "Notebook com processador Intel Core i7 e 16GB de RAM",
        imagem:"/img/produtos-640×462.png",
    },
    {
        id: 3,
        nome: "Tablet",
        preco: 800.00,
        marca: "Samsung",
        categoria: "Celulares",
        descricao: "Tablet com tela de 10 polegadas e 3GB de RAM",
        imagem:"/img/produtos-640×462.png",
    },
    {
        id: 4,
        nome: "Impressora",
        preco: 200.00,
        marca: "HP",
        categoria: "Impressoras",
        descricao: "Impressora de alta qualidade com tecnologia de impressão a jato de tinta",
        imagem:"/img/produtos-640×462.png",
    },
];





import client from "@/lib/appwrite_client";
import { TipoProduto } from "@/types";
import { Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

export async function pegaProduto(produto:TipoProduto) {
    
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
            ID.unique(),
            produto);

            return response;

    } catch (error) {
        console.error("Erro criando o produto.", error);
        throw new Error("Falha ao criar o produto.")
    }
}

export async function POST(request:Request) {

    try {
        
        const {nome,preco} = await request.json();
        const produto = {nome,preco} as TipoProduto;

        return NextResponse.json(produto,{status:201});
        
    } catch (error) {
        return NextResponse.json({error:"Falha ao criar o produto.: " + error},{status:500},);
    }
}