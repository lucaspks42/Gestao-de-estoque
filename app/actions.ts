'use server'

import { z } from "zod"

const schema = z.object({
    nome: z.string(), quantidade: z.coerce.number()
})

export async function inserirProduto(formData: FormData) {
    const data = schema.parse({
        nome: formData.get("nome"),
        quantidade: formData.get("quantidade")
    })
    console.log(data)
}

export async function removerProduto(formData: FormData) {
    const data = schema.parse({
        nome: formData.get("nome"),
        quantidade: formData.get("quantidade")
    })
    console.log(data)
}
