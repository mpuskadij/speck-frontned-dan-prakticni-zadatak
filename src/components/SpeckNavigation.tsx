"use client";
import "../../public/fonts/heywow.css";
export default function SpeckNavigation() {
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				overflow: "auto",
				backgroundColor: "#FFFFFF",
			}}
		>
			<img
				src="logo.svg"
				width={98}
				height={21}
				style={{
					verticalAlign: "baseline",
					position: "relative",
					left: "5%",
				}}
			></img>

			<nav>
				<ul
					style={{
						display: "flex",
						flexFlow: "flex-end",
						justifyContent: "flex-end",
						alignItems: "baseline",
						gap: "32px",
						fontFamily: "HeyWow Bold",
						fontSize: "15px",
						lineHeight: "24px",
						textAlign: "right",
						float: "right",
					}}
				>
					<li style={{ display: "inherit" }}>Services</li>
					<li>Our Work</li>
					<li>About Us</li>
					<li>Careers</li>
					<li>Blog</li>
					<div
						style={{
							border: "solid #BF3939",
							borderRadius: "32px",
							backgroundColor: "#BF3939",
							padding: "16px 32px 16px 32px",
							marginRight: "20px",
						}}
					>
						<li
							style={{
								color: "#FFFFFF",
								fontWeight: 900,
								lineHeight: "inherit",
								fontSize: "15px",
							}}
						>
							Get In Touch
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}
