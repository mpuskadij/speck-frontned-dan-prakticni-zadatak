"use client";
import { Poppins } from "next/font/google";
import "../../public/fonts/heywow.css";
import { useRef, useState } from "react";
import { Resend } from "resend";
import { List } from "postcss/lib/list";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function ContactForm() {
	interface UploadedFile {
		name: string;
		size: number;
	}

	const [files, setFiles] = useState<UploadedFile[]>([]);

	function changeRadioColor(): void {
		let radioButtons = document.getElementsByName("budget");
		radioButtons.forEach((rbtn) => {
			let radioElement = rbtn as HTMLInputElement;
			if (radioElement.checked) {
				rbtn.parentElement!!.parentElement!!.className = "selectedRadio";
			} else {
				rbtn.parentElement!!.parentElement!!.className = "notSelectedRadio";
			}
		});
	}

	async function sendForm(event: any) {
		try {
			event.preventDefault();
			let form = document.getElementById("contactform") as HTMLFormElement;
			if (form.reportValidity() == false) {
				throw new Error("Not all required fields are filled!");
			}
			let firstName = document.getElementById("firstName") as HTMLInputElement;
			let lastName = document.getElementById("lastName") as HTMLInputElement;
			let email = document.getElementById("email") as HTMLInputElement;
			let company = document.getElementById("company") as HTMLInputElement;
			let budget = document.querySelector(
				'input[type="radio"]:checked'
			) as HTMLInputElement;
			let methodOfFinding = document.getElementById(
				"MethodOfFindingUs"
			) as HTMLSelectElement;

			let phone = document.getElementById("phoneNumber") as HTMLInputElement;
			let projectInfo = document.getElementById(
				"ProjectInfo"
			) as HTMLInputElement;

			let challenge = document.getElementById("challenge") as HTMLSelectElement;
			let bufferFiles = new Array<Buffer>();
			files.forEach((f) => {
				let encodedFileName = Buffer.from(f.name, "base64");
				bufferFiles.push(encodedFileName);
			});

			let serverResponse = await fetch("/mail", {
				method: "POST",
				body: JSON.stringify({
					firstName: firstName.value,
					lastName: lastName.value,
					email: email.value,
					company: company.value,
					budget: budget.value,
					methodOfFinding: methodOfFinding.value,
					phone: phone.value,
					challenge: challenge.value,
					projectInfo: projectInfo.value,
					files: bufferFiles,
				}),
			});
			let responseBody: any = await serverResponse.json();
			alert(responseBody.message);
			if (serverResponse.ok) {
				location.reload();
			}
			location.reload();
		} catch (error: any) {}
	}

	function fileChange(event: any) {
		const selectedFiles = event.target.files;
		const updatedFiles = [];

		for (let i = 0; i < selectedFiles.length; i++) {
			const file = selectedFiles[i];
			const fileSize = Math.round(file.size / 1024);
			updatedFiles.push({ name: file.name, size: fileSize });
		}

		let divFile = document.getElementById("fileContainer");
		let listOfFiles = document.createElement("ul");

		listOfFiles.id = "fileList";
		listOfFiles.style.display = "flex";
		listOfFiles.style.flexDirection = "column";

		const selectedFilesParagraph = document.createElement("p");
		selectedFilesParagraph.innerHTML = "Selected files: ";

		divFile?.replaceWith(selectedFilesParagraph);
		selectedFilesParagraph.appendChild(listOfFiles);
		selectedFilesParagraph.style.color = "#212129";

		for (let i = 0; i < updatedFiles.length; i++) {
			const listItem = document.createElement("li");
			const removeFile = document.createElement("img");

			removeFile.src = "x.svg";
			removeFile.width = 30;
			removeFile.height = 30;
			removeFile.style.display = "inline";
			removeFile.addEventListener("click", () => {
				fileRemove(i);
				listItem.remove();
				removeFile.remove();
				if (listOfFiles.childElementCount == 0) {
					selectedFilesParagraph.replaceWith(divFile!!);
					listOfFiles.remove();
				}
			});
			listItem.innerHTML =
				updatedFiles[i].name + " - " + updatedFiles[i].size + " KB";
			listItem.appendChild(removeFile);
			listOfFiles.appendChild(listItem);
		}

		setFiles(updatedFiles);
	}

	function fileRemove(index: number) {
		const updatedFiles = [...files];
		updatedFiles.splice(index, 1);
		setFiles(updatedFiles);
	}

	function openFileDialog() {
		const fileInput = document.getElementById("openFile");
		fileInput?.click();
	}
	return (
		<main>
			<div style={{ display: "block", padding: "100px 20px" }}>
				<h1
					style={{
						position: "relative",
						paddingTop: "50px",
						paddingBottom: "100px",
						zIndex: 1,
						left: "5%",
						top: "15%",
						fontFamily: "HeyWow Bold",
						fontSize: "66px",
						lineHeight: "64px",
						height: "64px",
						width: "800px",
					}}
				>
					Let's collaborate
					<span style={{ color: "#BF3939", display: "inline" }}>.</span>
				</h1>
				<h1
					style={{
						position: "absolute",
						top: "20%",
						left: "5%",
						lineHeight: "64px",
						zIndex: 0,
						width: "100%",
						fontFamily: "HeyWow Bold",
						fontSize: "180px",
						fontWeight: "900",
						color: "#F4F5F6",
						paddingBottom: "70px",
					}}
				>
					Let's collaborate
				</h1>
			</div>
			<div
				style={{
					alignSelf: "center",
					display: "flex",
					gap: "10px",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<form
					id="contactform"
					style={{
						display: "inherit",
						flexWrap: "wrap",
						justifyContent: "space-between",
						flexBasis: "50%",
						width: "100%",
						fontSize: "18px",
						lineHeight: "32px",
						color: "#CBD3D6",
					}}
				>
					<input
						id="firstName"
						type="text"
						placeholder="First name*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "45%",
							marginBottom: "50px",
							outline: "none",
						}}
					></input>
					<input
						id="lastName"
						type="text"
						placeholder="Last name*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "45%",
							marginBottom: "50px",
							outline: "none",
						}}
					></input>
					<input
						id="email"
						type="email"
						placeholder="Email address*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "45%",
							marginBottom: "50px",
							outline: "none",
						}}
					></input>
					<input
						id="phoneNumber"
						type="tel"
						placeholder="Phone number*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "45%",
							marginBottom: "50px",
							outline: "none",
						}}
					></input>
					<input
						id="company"
						type="text"
						placeholder="Company*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "45%",
							marginBottom: "50px",
							outline: "none",
						}}
					></input>
					<select
						id="MethodOfFindingUs"
						required
						style={{
							fontFamily: poppins.style.fontFamily,
							textAlign: "left",
							width: "45%",
							backgroundColor: "transparent",
							borderColor: "#CBD3D6",
							borderBottom: "dotted 2px",
							marginBottom: "50px",
						}}
					>
						<option value={"Not specified"}>How did you hear about us?</option>
						<option value={"Social"}>Social media</option>
						<option value={"Word of Mouth"}>Word of Mouth</option>
						<option value={"Google"}>Google</option>
						<option value={"Other"}>Other</option>
					</select>
					<select
						id="challenge"
						style={{
							fontFamily: poppins.style.fontFamily,
							textAlign: "left",
							width: "100%",
							backgroundColor: "transparent",
							borderColor: "#CBD3D6",
							borderBottom: "dotted 2px",
							marginBottom: "50px",
						}}
					>
						<option value={"Not specified"}>
							What challenge are you trying to solve?
						</option>
						<option value={"Creating a new digital product"}>
							Creating a new digital product
						</option>
						<option value={"Scaling my business"}>Scaling my business</option>
						<option value={"Stepping into digital transformation"}>
							Stepping into digital transformation
						</option>
						<option
							value={"Auditing and optimizing my infrastructure/processes"}
						>
							Auditing and optimizing my infrastructure/processes
						</option>
						<option value={"Building a team of experts"}>
							Building a team of experts
						</option>
						<option value={"Other"}>Other</option>
					</select>
					<h5
						style={{
							color: "#212129",
							fontFamily: poppins.style.fontFamily,
							textAlign: "left",
							width: "100%",
							backgroundColor: "transparent",
							marginBottom: "20px",
						}}
					>
						What is your budget?*
					</h5>
					<div
						className="notSelectedRadio"
						style={{
							borderColor: "#CBD3D6",
							border: "2px solid",
							borderRadius: "48px",
							textAlign: "center",
							height: "100%",
						}}
					>
						<label
							style={{
								fontFamily: "HeyWow Bold",
								cursor: "pointer",
							}}
						>
							<input
								onClick={changeRadioColor}
								type="radio"
								name="budget"
								value={"Up to 50.000 eur"}
								style={{ display: "none" }}
							></input>
							Up to 50.000 eur
						</label>
					</div>
					<div
						className="notSelectedRadio"
						style={{
							width: "20%",
							borderColor: "#CBD3D6",
							border: "2px solid",
							borderRadius: "48px",
							textAlign: "center",
							flexGrow: 1,
							height: "100%",
						}}
					>
						<label
							style={{
								fontFamily: "HeyWow Bold",
								cursor: "pointer",
							}}
						>
							<input
								onClick={changeRadioColor}
								type="radio"
								name="budget"
								value={"50.000 eur - 100.000 eur"}
								style={{ display: "none" }}
							></input>
							50.000 eur - 100.000 eur
						</label>
					</div>
					<div
						className="notSelectedRadio"
						style={{
							borderColor: "#CBD3D6",
							border: "2px solid",
							borderRadius: "48px",
							textAlign: "center",
							flexGrow: 1,
							height: "100%",
						}}
					>
						<label
							style={{
								fontFamily: "HeyWow Bold",
								cursor: "pointer",
							}}
						>
							<input
								onClick={changeRadioColor}
								type="radio"
								name="budget"
								value={"100.000 eur - 250.000 eur"}
								style={{ display: "none" }}
							></input>
							100.000 eur - 250.000 eur
						</label>
					</div>
					<div
						className="notSelectedRadio"
						style={{
							width: "20%",
							borderColor: "#CBD3D6",
							border: "2px solid",
							borderRadius: "48px",
							textAlign: "center",
							height: "100%",
						}}
					>
						<label
							style={{
								fontFamily: "HeyWow Bold",
								cursor: "pointer",
							}}
						>
							<input
								onClick={changeRadioColor}
								type="radio"
								name="budget"
								value={"Over 250.000 eur"}
								style={{ display: "none" }}
							></input>
							Over 250.000 eur
						</label>
					</div>
					<div
						className="selectedRadio"
						style={{
							borderColor: "#CBD3D6",
							border: "2px solid",
							borderRadius: "48px",
							textAlign: "center",
							height: "100%",
							flexShrink: 2,
							marginBottom: "50px",
						}}
					>
						<label
							style={{
								fontFamily: "HeyWow Bold",
								cursor: "pointer",
							}}
						>
							<input
								onClick={changeRadioColor}
								type="radio"
								name="budget"
								checked
								value={"Not sure yet"}
								style={{ display: "none" }}
							></input>
							Not sure yet
						</label>
					</div>
					<input
						id="ProjectInfo"
						type="text"
						placeholder="Tell us more about your project and scope*"
						required
						style={{
							textAlign: "left",
							borderBottom: "dotted 2px",
							borderColor: "#CBD3D6",
							backgroundColor: "transparent",
							fontFamily: poppins.style.fontFamily,
							width: "100%",
							marginBottom: "50px",
						}}
					></input>
					<div
						id="fileContainer"
						style={{
							display: "flex",
							width: "100%",
							marginBottom: "50px",
							border: "dotted 2px",
							borderBottomColor: "#CBD3D6",
							borderRadius: "32px",
							alignItems: "center",
							height: "116px",
							justifyContent: "center",
							gap: "2px",
							verticalAlign: "middle",
							cursor: "pointer",
						}}
						onClick={openFileDialog}
					>
						<img src="fileAttachment.svg" style={{ display: "inline" }}></img>
						<p
							style={{
								display: "inline",
								textAlign: "center",
								backgroundColor: "transparent",
								fontFamily: poppins.style.fontFamily,
								lineHeight: "32px",
								verticalAlign: "middle",
							}}
						>
							Feel free to attach any additional documents!
						</p>
						<input
							type="file"
							id="openFile"
							multiple
							onChange={fileChange}
							style={{ display: "none" }}
						></input>
					</div>
					<div style={{ width: "100%" }}>
						<input
							type="checkbox"
							id="news"
							name="news"
							style={{
								borderRadius: "2px",
								borderColor: "#CBD3D6",
								marginRight: "5px",
								color: "#F4F5F6",
							}}
						></input>
						<label
							htmlFor="news"
							style={{ color: "#212129", fontSize: "12px" }}
						>
							Stay up to date with the latest software development and design
							trends brought to you by Speck experts
						</label>
					</div>
					<div style={{ width: "100%", marginBottom: "50px" }}>
						<input
							type="checkbox"
							id="privacyPolicy"
							required
							name="privacyPolicy"
							style={{
								borderRadius: "2px",
								borderColor: "#CBD3D6",
								marginRight: "5px",
								color: "#F4F5F6",
							}}
						></input>
						<label
							htmlFor="privacyPolicy"
							style={{
								color: "#212129",
								fontSize: "12px",
							}}
						>
							I agree to the Privacy Policy
						</label>
					</div>
					<div>
						<button
							type="submit"
							style={{
								fontFamily: "HeyWow Bold",
								color: "#FFFFFF",
								backgroundColor: "#BF3939",
								padding: "15px 50px",
								borderRadius: "32px",
							}}
							onClick={sendForm}
						>
							Send
						</button>
						<img src="arrow.svg"></img>
					</div>
				</form>
			</div>
		</main>
	);
}
