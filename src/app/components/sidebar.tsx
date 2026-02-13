import Link from "next/link";

export default function SideBar() {
  return (
    <ul className="max-h-100vh w-[120px] min-w-[200px] md:min-w-[300px] p-4 flex flex-col gap-4 border-r border-gray-300 text-[12px]">
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
        <Link href={"/questions/add-two-numbers"}>
          #4 Add Two Numbers - Jan 20 2026
        </Link>
      </li>
      <li>
        <Link href={"/questions/array-reduce-transformation"}>
          #5 Array Reduce Transformation - Feb 13 2026
        </Link>
      </li>
      <li>
        <Link href={"/questions/filter-elements-from-array"}>
          #6 Filter Elements From Array - Feb 13 2026
        </Link>
      </li>
      <li>
        <Link href={"/questions/function-composition"}>
          #7 Function Composition - Feb 13 2026
        </Link>
      </li>
      <li>
        <Link href={"/questions/return-length-of-arguments-passed"}>
          #8 Return Length Of Arguments Passed - Feb 13 2026
        </Link>
      </li>

      <li>
        <Link href={"/questions/allow-one-function-call"}>
          #9 Allow One Function Call - Feb 13 2026
        </Link>
      </li>
    </ul>
  );
}
