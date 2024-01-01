import ReduxProvider from '@/client/providers/redux-provider';
import { ThemeProvider } from '@/client/providers/theme-provider';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Epic password',
	description: 'A Web app that uses next.js in typescript to generate a random password',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ReduxProvider>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}