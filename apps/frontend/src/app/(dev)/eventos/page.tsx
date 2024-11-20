import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";

export default function PaginaEventos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {eventos.map((evento) => (
                <div key={evento.id} className="
                    flex flex-col w-full
                    bg-zinc-800 rounded-lg
                    overflow-hidden
                ">
                    <div className="relative w-full h-44">
                        <Image src={evento.imagem} fill alt={evento.nome} className="object-cover" />
                    </div>

                    <div className="flex flex-col flex-1 p-7 gap-5">
                        <span className="text-lg font-black">{evento.nome}</span>
                        <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>

                        <div className="flex gap-5">
                            <Link className="flex-1 botao vermelho" href={`/evento/admin/${evento.id}/${evento.senha}`}>
                                Admin
                            </Link>
                            <Link className="flex-1 botao verde" href={`/evento/convite/${evento.alias}`}>
                                Convite
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}