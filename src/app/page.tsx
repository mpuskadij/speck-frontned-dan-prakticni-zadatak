import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SpeckNavigation from "@/components/SpeckNavigation";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<SpeckNavigation />
			<ContactForm />
			<Footer />
		</div>
	);
}
