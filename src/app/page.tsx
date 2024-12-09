import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen ">
      <Button>primary</Button>
      <Button variant="destructive">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritrary">teritrary</Button>
      <Input/>
    </div>
    
  );
}
