export async function POST(req: Request) {

  const form = await req.formData()

  const name = form.get("name")
  const email = form.get("email")
  const message = form.get("message")

  console.log({ name, email, message })

  return Response.json({
    message: "Message received successfully!"
  })
}