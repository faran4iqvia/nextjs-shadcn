import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <section className="">
      <p>Hii</p>
      <div className="m-12">
        <ThemeToggle />
      </div>
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
      <p className="text-5xl">font-normal</p>
      <br />
      <p className="text-5xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum perferendis deserunt at ut obcaecati itaque sint
        dicta fuga perspiciatis culpa officia maxime reiciendis ipsum aut optio, autem illo labore? Maxime libero fugit
        nobis culpa harum 111 
        222 necessitatibus dolorem debitis expedita alias! at ut obcaecati itaque sint dicta fuga
        perspiciatis culpa officia maxime reiciendis ipsum aut optio, autem illo labore? Maxime libero fugit nobis culpa
        harum necessitatibus dolorem debitis expedita alias at ut obcaecati itaque sint dicta fuga perspiciatis culpa
        officia maxime reiciendis ipsum aut optio, autem illo labore? Maxime libero fugit nobis culpa harum
        necessitatibus dolorem debitis end end end faran
      </p>
    </section>
  );
}
