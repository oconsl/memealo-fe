import { NextResponse } from "next/server"
import { signIn } from "@/app/api/services/user"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  const response = await signIn({ username, password })

  return NextResponse.json(response)
}
