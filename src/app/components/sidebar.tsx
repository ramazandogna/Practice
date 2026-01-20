import Link from "next/link";

export default function SideBar() {
  return (
    <ul className="max-h-100vh w-[200px] min-w-[200px] md:min-w-[300px] p-4 flex flex-col gap-4 border-r border-gray-300">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/questions/debounce"}>
          #1 Debounce Example - Nov 13 2025
        </Link>
      </li>
      <li>
        <Link href={"/questions/flattenobj"}>
          #2 Flatten Object - Nov 13 2025
        </Link>
      </li>
      <li>
        <Link href={"/questions/two-sum"}>#3 Two Sum - Jan 8 2026</Link>
      </li>
      <li>
        <Link href={"/questions/add-two-numbers"}>#4 Add Two Numbers - Jan 20 2026</Link>
      </li>
    </ul>
  );
}
