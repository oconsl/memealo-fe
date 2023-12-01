import { NextResponse } from "next/server"
import { updateUser } from "@/app/api/services/user"

export async function PUT(request: Request, { params }: { params: { userId: string } }) {
  const { username, password, email } = await request.json()
  const { userId } = params

  const response = await updateUser({ id: userId, username, password, email})

  return NextResponse.json(response)
}
