import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center fixed h-100vh w-100vw inset-0">
      <h1>Welcome to the Home Page</h1>
      <ul className="text-center">
        <li><Link href={"/debounce"}>Debounce Example</Link>  </li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </main>
  );
}
