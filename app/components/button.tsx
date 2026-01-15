import Link from "next/link";

export default function Button() {
    return (
        <button className="w-40rem h-50rem border bg-amber-900 ">
            <Link href="/database"> Go to database </Link>
        </button>
    )
}