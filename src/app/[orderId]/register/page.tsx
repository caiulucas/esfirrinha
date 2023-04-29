import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Register() {
  return (
    <main className="flex flex-col items-center justify-between gap-36 w-96">
      <div>
        <h1 className="text-3xl font-medium">Esfirrinha??</h1>
        <p>Código do pedido: asfgt</p>
      </div>

      <form className="flex flex-col gap-4 w-full">
        <Input label="Nome:" placeholder="Digite seu nome ou apelido" />
        <Button title="Fazer pedido" />
        <Button title="Ver pedido geral" variant="secondary" />
      </form>
    </main>
  );
}
