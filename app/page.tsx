import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-5xl mb-10">
        dashboard
      </h1>
      <div className="flex flex-row gap-5">
        <Link href={"/entrada"} className="mx-4 my-2 bg-slate-500">
          Entrada de estoque
        </Link >
        <Link href={"/saida"} className="mx-4 my-2 bg-slate-500">
          Saída de estoque
        </Link >
        <input type="checkbox" id="incluir" />
        <label htmlFor="incluir">incluir estado atual do estoque</label>

        <Link href={"/exportar"} className="mx-4 my-2 bg-slate-500">
          Exportar dados
        </Link >
      </div>
    </main>
  );
}
