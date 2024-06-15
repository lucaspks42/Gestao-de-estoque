import { removerProduto } from "../actions";

export default function Saida() {
    return (
        <main>
            <h1 className="text-5xl mb-10">
                saída
            </h1>
            <form className="flex flex-col gap-5" action={removerProduto}>
                <label htmlFor="Nome">Nome do produto</label>
                <input className="text-black" id="Nome" name="nome" type="text"/>
                <label htmlFor="Quantidade">Quantidade</label>
                <input className="text-black" id="Quantidade" name="quantidade"></input>
                <button className="bg-green-500 p-3">registrar saída</button>
                
            </form>

        </main>
    )
}