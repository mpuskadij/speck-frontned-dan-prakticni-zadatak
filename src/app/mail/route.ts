import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const apiKey = "re_A5mBt7h8_M7gFCUwnvxS1E9LjFFSfyCKF";
const receiverMail = "mpuskadij20@student.foi.hr";

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const resend = new Resend(apiKey);
		const body = await request.json();
		const files = new Array<string>();
		body.files.forEach((file: Buffer) => files.push(file.toString("base64")));

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: receiverMail,
			subject: "New Contact Form Filled",
			html:
				"<p>Data from contact form:<br></br> " +
				"First name: " +
				body.firstName +
				"<br></br>Last name: " +
				body.lastName +
				"<br></br>Email: " +
				body.email +
				"<br></br>Phone number: " +
				body.phone +
				"<br></br>Company: " +
				body.company +
				"<br></br>How they heard about us: " +
				body.methodOfFinding +
				"<br></br>Challenge to solve: " +
				body.challenge +
				"<br></br>Budget: " +
				body.budget +
				"<br></br>Project info: " +
				body.projectInfo +
				"</p>",
		});
		console.log("Email sent");
		return NextResponse.json(
			{ message: "Successfully sent email to Speck!" },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ message: error });
	}
}
