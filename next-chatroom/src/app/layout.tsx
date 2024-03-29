import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    generator: 'Next.JS',
    authors: { name: 'Christopher Billingham' },
    creator: 'Christopher Billingham',
    publisher: 'Christopher Billingham',
    title: "Next Chatroom App",
    description: "Frontend Web App for dotnet signal r chatroom. Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{<Providers className={''}>{children}</Providers>}</body>
        </html>
    );
}
