import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate the data
        if (!data.businessName || !data.contactName || !data.email || !data.phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure email transport
        // For production, use a real email service
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Format interests array into string if it exists
        const interests = data.interests ? data.interests.join(', ') : 'None specified';

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New B2B Inquiry from ${data.businessName}`,
            html: `
        <h2>New Business Inquiry</h2>
        <p><strong>Business Name:</strong> ${data.businessName}</p>
        <p><strong>Contact Name:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Monthly Customer Volume:</strong> ${data.trafficVolume}</p>
        <p><strong>Interested In:</strong> ${interests}</p>
        <p><strong>Additional Information:</strong> ${data.message || 'None provided'}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Optional: Save inquiry to database
        // const savedInquiry = await saveToDatabase(data);

        return NextResponse.json(
            { success: true, message: 'Inquiry submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Inquiry submission error:', error);
        return NextResponse.json(
            { error: 'Failed to process inquiry' },
            { status: 500 }
        );
    }
}