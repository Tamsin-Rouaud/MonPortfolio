import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'Portfolio by Tamsin Rouaud',
	description:
		'Vous recherchez un développeur Web pour une idée, un projet en tête, une maquette ? Contactez-moi !',
};

export default function RootLayout({ children }) {
	return (
		<html lang='fr'>
			<head>
				<meta charSet='UTF-8' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
