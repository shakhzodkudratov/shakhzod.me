import Image from 'next/image';
import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <Image
          src="/long-website-logo.svg"
          height={111}
          width={624}
          alt="shakhzod's lab"
        />
      </Link>
    </div>
  );
}
