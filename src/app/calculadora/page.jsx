"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { useState } from "react";

export default function Calculadora() {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [operacao, setOperacao] = useState("");

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <h1 className="text-3xl mb-5" >Página da calculadora</h1>
                <form action="" className="flex flex-col gap-4 w-full max-w-xs" >
                    <Input
                        type="number"
                        placeholder="Primeiro número"
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                        required
                    />
                    <Select value={operacao} onValueChange={(e) => setOperacao(event.target.value)} required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione uma operação" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key={1} value={'Somar'}>{'Somar'}</SelectItem>
                            <SelectItem key={2} value={'Subtrair'}>{'Subtrair'}</SelectItem>
                            <SelectItem key={3} value={'Multiplicar'}>{'Multiplicar'}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        type="number"
                        placeholder="Segundo número"
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                        required
                    />

                    <Button>Relaizar Operação</Button>
                </form>
            </div>
        </>
    )
}