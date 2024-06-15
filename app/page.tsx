export default function Home() {
  return (
    <main>
      <h1 className="text-5xl mb-10">
        dashboard
      </h1>
      <div className="flex flex-row gap-5">
        <button className="mx-4 my-2 bg-slate-500">
          Entrada de estoque
        </button>
        <button className="mx-4 my-2 bg-slate-500">
          Saída de estoque
        </button>
        <button className="mx-4 my-2 bg-slate-500">
          Exportar dados
        </button>
      </div>
    </main>
  );
}
