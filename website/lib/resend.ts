import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPurchaseEmail({
  customerEmail,
  customerName,
  amount,
  paymentId,
}: {
  customerEmail: string;
  customerName: string;
  amount: number;
  paymentId: string;
}) {
  const driveLink = process.env.GOOGLE_DRIVE_LINK || "#";
  const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";

  const { data, error } = await resend.emails.send({
    from: `Designora <${senderEmail}>`,
    to: [customerEmail],
    subject: "Your Interior Designer Mastery Bundle - Download Link Inside!",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
          <div style="background-color:#111111;border-radius:16px;padding:40px;border:1px solid #2a2a2a;">
            
            <!-- Header -->
            <div style="text-align:center;margin-bottom:30px;">
              <h1 style="color:#f59e0b;font-size:28px;margin:0;">Designora</h1>
              <p style="color:#888;font-size:14px;margin-top:8px;">Interior Designer Mastery Bundle</p>
            </div>

            <!-- Success Icon -->
            <div style="text-align:center;margin-bottom:24px;">
              <div style="display:inline-block;background-color:#22c55e;border-radius:50%;width:64px;height:64px;line-height:64px;font-size:32px;">
                &#10003;
              </div>
            </div>

            <!-- Greeting -->
            <h2 style="color:#ffffff;text-align:center;font-size:22px;margin-bottom:8px;">
              Payment Successful!
            </h2>
            <p style="color:#cccccc;text-align:center;font-size:16px;margin-bottom:30px;">
              Hi ${customerName}, thank you for your purchase!
            </p>

            <!-- Order Details -->
            <div style="background-color:#1a1a1a;border-radius:12px;padding:20px;margin-bottom:30px;">
              <h3 style="color:#f59e0b;font-size:16px;margin:0 0 16px 0;">Order Details</h3>
              <table style="width:100%;color:#cccccc;font-size:14px;">
                <tr>
                  <td style="padding:6px 0;">Product</td>
                  <td style="text-align:right;color:#ffffff;">Interior Designer Mastery Bundle</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">Amount Paid</td>
                  <td style="text-align:right;color:#ffffff;">&#8377;${amount}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">Payment ID</td>
                  <td style="text-align:right;color:#ffffff;font-size:12px;">${paymentId}</td>
                </tr>
              </table>
            </div>

            <!-- Download Button -->
            <div style="text-align:center;margin-bottom:30px;">
              <a href="${driveLink}" 
                 style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#d97706);color:#000000;font-weight:bold;font-size:18px;padding:16px 40px;border-radius:12px;text-decoration:none;">
                Download Your Bundle Now
              </a>
            </div>

            <p style="color:#888888;text-align:center;font-size:13px;margin-bottom:20px;">
              You can also access your files anytime using the link above. This link will remain active permanently.
            </p>

            <!-- Divider -->
            <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0;">

            <!-- Footer -->
            <p style="color:#666666;text-align:center;font-size:12px;margin:0;">
              Need help? Reply to this email or contact us at support.<br>
              &copy; ${new Date().getFullYear()} Designora. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    console.error("Email send error:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}
