import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5 justify-center">
      <Image alt="logo" src={'/logo.png'} width={80} height={80} />
      <div>
        <p className="text-5xl">Find People</p>
        <p className="text-4xl font-bold">on Github</p>
      </div>
    </div>
  );
}
