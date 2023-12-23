"use client"
import { useRouter } from "next/navigation"
import ExpandableList from "@/components/challenge2/ExpandableList"

export default function Page() {
  const router = useRouter()

  return (
    <>
      <ExpandableList />
    </>
  )
}
