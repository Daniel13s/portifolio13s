import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    const {name, email, message} = await req.json()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        })
        await transporter.sendMail({
            from:email,
            to: process.env.EMAIL_USER,
            subject: `Contato de ${name}`,
            text: message
        })
        return NextResponse.json({sucess: true})
}