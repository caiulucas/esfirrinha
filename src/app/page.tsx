import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-36">
      <h1 className="text-3xl font-medium">Esfirrinha??</h1>

      <form className="flex flex-col gap-4 w-full">
        <Input label="Nome:" placeholder="Digite seu nome ou apelido" />
        <Button title="Inciar pedido" />
      </form>
    </main>
  );
}
