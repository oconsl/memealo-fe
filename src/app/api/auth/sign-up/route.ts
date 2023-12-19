import { NextResponse } from "next/server"
import { signUp } from "@/app/api/services/user"

export async function POST(request: Request) {
  const { username, password, email } = await request.json()

  const response = await signUp({ username, password, email })

  return NextResponse.json(response)
}
