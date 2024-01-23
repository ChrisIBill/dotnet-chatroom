'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { LandingModal } from "./components/modal";

export default function Home() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const test = process.env.TESTING;
    console.log(backendUrl, test);
    return (
        <main className={styles.main}>
            <LandingModal open={true} onClose={() => { }} />
        </main>
    );
}
