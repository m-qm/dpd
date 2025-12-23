import { redirect } from "next/navigation"

export default function HomeEs() {
  // Legacy Spanish path: redirect permanently to the default Spanish homepage at "/"
  redirect("/")
}

