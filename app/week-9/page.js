"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/week-9");
        }
    }, [user, router]);

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Failed to log in with GitHub.");
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error logging out:", error);
            alert("Failed to log out.");
        }
    };

    if (user === undefined) {
        // Optional: Show loading state if user is being checked
        return <p>Loading...</p>;
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
            {!user ? (
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Login with GitHub
                </button>
            ) : (
                <div className="text-center">
                    <p className="mb-4 text-black">
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-red-700 mb-4"
                    >
                        Logout
                    </button>
                    <Link href="./week-9/shopping-list">
                        <p className="px-4 py-2 bg-slate-400 text-white rounded hover:bg-slate-700">
                            Go to Shopping List
                        </p>
                    </Link>
                </div>
            )}
        </main>
    );
}
