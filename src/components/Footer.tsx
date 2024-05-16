"use client";
import "../../public/fonts/heywow.css";
import "../../public/fonts/garibaldi.css";

export default function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "#212129",
				padding: "50px 50px 50px 50px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "baseline",
				}}
			>
				<div>
					<h6
						style={{
							color: "#83838F",
							fontFamily: "HeyWow Bold",
							fontWeight: 900,
							fontSize: "15px",
							lineHeight: "24px",
						}}
					>
						OUR OFFICES
					</h6>
					<p
						style={{
							fontFamily: "HeyWow Bold",
							color: "white",
							fontSize: "24px",
							lineHeight: "32px",
						}}
					>
						Indiana
					</p>
					<p style={{ color: "#CBD3D6", fontFamily: "Garibaldi Medium" }}>
						55 Monument Circle<br></br>Indianapolis 46204
					</p>
					<br></br>
					<a
						href="3175365585"
						style={{ color: "#CBD3D6", textDecoration: "underline" }}
					>
						+1 (317) 536-5585
					</a>
				</div>
				<div style={{ alignSelf: "flex-end" }}>
					<p
						style={{
							fontFamily: "HeyWow Bold",
							color: "white",
							fontSize: "24px",
							lineHeight: "32px",
						}}
					>
						Croatia
					</p>
					<p style={{ color: "#CBD3D6", fontFamily: "Garibaldi Medium" }}>
						Petračićeva 6<br></br>10000 Zagreb
					</p>
					<br></br>
					<a
						href="385953587050"
						style={{ color: "#CBD3D6", textDecoration: "underline" }}
					>
						+385 95 3587 050
					</a>
				</div>
				<div>
					<h6
						style={{
							color: "#83838F",
							fontFamily: "HeyWow Bold",
							fontWeight: 900,
							fontSize: "15px",
							lineHeight: "24px",
						}}
					>
						CONTACT
					</h6>
					<div
						style={{
							display: "flex",
							gap: "15px",
							alignSelf: "center",
							paddingTop: "10px",
						}}
					>
						<a href="https://www.facebook.com/speck.agency/">
							<img
								src="facebook-logo.svg"
								style={{ width: "24px", height: "24px" }}
							></img>
						</a>
						<a href="https://www.linkedin.com/company/speck-agency">
							<img
								src="linkedin-logo.svg"
								style={{ width: "24px", height: "24px" }}
							></img>
						</a>
						<a href="https://clutch.co/profile/speck">
							<img
								src="clutch-logo.svg"
								style={{ width: "24px", height: "24px" }}
							></img>
						</a>
					</div>
					<br></br>
					<a
						href="mailto:hello@speck.agency"
						style={{ color: "#CBD3D6", textDecoration: "underline" }}
					>
						hello@speck.agency
					</a>
					<br></br>
					<br></br>
					<a
						href="mailto:career@speck.agency"
						style={{ color: "#CBD3D6", textDecoration: "underline" }}
					>
						career@speck.agency
					</a>
				</div>
				<div>
					<h6
						style={{
							color: "#83838F",
							fontFamily: "HeyWow Bold",
							fontWeight: 900,
							fontSize: "15px",
							lineHeight: "24px",
						}}
					>
						LEGAL
					</h6>
					<div style={{ alignSelf: "flex-end", paddingTop: "10px" }}>
						<a
							href="https://www.speck.agency/privacy-policy"
							style={{
								fontFamily: "HeyWow Bold",
								fontWeight: 700,
								fontSize: "15px",
								lineHeight: "24px",
								display: "block",
								color: "#F2F4F5",
							}}
						>
							Privacy Policy
						</a>
						<a
							href="https://www.speck.agency/company"
							style={{
								fontFamily: "HeyWow Bold",
								fontWeight: 700,
								fontSize: "15px",
								lineHeight: "24px",
								color: "#F2F4F5",
							}}
						>
							Company
						</a>
						<p
							style={{
								fontFamily: "HeyWow Bold",
								fontWeight: 700,
								fontSize: "15px",
								lineHeight: "24px",
								color: "#F2F4F5",
							}}
						>
							EU Project
						</p>
						<br></br>
						<p
							style={{
								fontFamily: "Garibaldi Medium",
								fontWeight: 400,
								fontSize: "13px",
								lineHeight: "16px",
								color: "#CBD3D6",
							}}
						>
							&copy; 2021 Speck d.o.o.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
