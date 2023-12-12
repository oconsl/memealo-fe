import { NextResponse } from "next/server"
import { updateUserMiscellaneous } from "@/app/api/services/user"

export async function PUT(request: Request, { params }: { params: { userId: string } }) {
  const { cosmetics, coins, achievements } = await request.json()
  const { userId } = params

  const response = await updateUserMiscellaneous({ id: userId, cosmetics, coins, achievements})

  return NextResponse.json(response)
}
