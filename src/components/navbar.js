"use client"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => router.push("/")}>
            Challenge1
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push("/challenge2")}>
            Challenge2
          </button>
        </li>
      </ul>
    </>
  )
}
