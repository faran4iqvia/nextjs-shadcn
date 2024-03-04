import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="">
     <p>Hii</p>
     <Button>Hello</Button>
     <Button variant={'destructive'}>Hello</Button>
     <Button variant={'secondary'}>Hello</Button>
     <Button variant={'ghost'}>Hello</Button>
     <Button variant={'link'}>Hello</Button>
     <Button variant={'outline'}>Hello</Button>
     <Button variant={'default'}>Hello</Button>

     <p className="font-thin text-5xl">font-thin</p>
     <p className="font-extralight text-5xl">font-extralight</p>
     <p className="font-light text-5xl">font-light</p>
     <p className="font-normal text-5xl">font-normal</p>
     <p className="font-medium text-5xl">font-medium</p>
     <p className="font-semibold text-5xl">font-semibold</p>
     <p className="font-bold text-5xl">font-bold</p>
     <p className="font-extrabold text-5xl">font-extrabold</p>
     <p className="text-5xl">font-</p>
    </main>
  );
}
