import { inserirProduto } from "../actions";

export default function Entrada() {
    return (
        <main>
            <h1 className="text-5xl mb-10">
                entrada
            </h1>
            <form className="flex flex-col gap-5" action={inserirProduto}>
                <label htmlFor="Nome">Nome do produto</label>
                <input className="text-black" id="Nome" name="nome" type="text"/>
                <label htmlFor="Quantidade">Quantidade</label>
                <input className="text-black" id="Quantidade" name="quantidade" type="number"></input>
                <button className="bg-green-500 p-3" type="submit">registrar entrada</button>
                
            </form>

        </main>
    )
}