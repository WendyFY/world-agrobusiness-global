import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validation basique
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    if (!body.email.includes('@')) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // TODO: Intégrer avec un service d'envoi d'emails (Resend, SendGrid, Nodemailer, etc.)
    // Pour l'instant, on simule l'envoi
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // Simulation d'un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { success: true, message: 'Votre message a été envoyé avec succès.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    )
  }
}
