"use client";
//import Link from "next/link";
import SPage from "./shopping-list/page";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";



export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const signIn = async () => {
        await gitHubSignIn();

    };

    // Sign out of Firebase
    const signOut = async () => {
        await firebaseSignOut();
    };
    return (
        <div>
            <h1 className="text-3xl">Week 10 Assignment</h1>
            {user ? (
                <div>

                    <div className="my-3 flex flex-row w-auto">
                        <div className="w-5/6">
                            <p className="text-white text-xl">Welcome, {user.displayName} ({user.email})</p>
                        </div>
                        <div className=""><button id="sign out"
                            onClick={() => signOut()}
                            className="bg-green-600 active:bg-green-300
                            size-10 w-32 m-1 rounded-md">Sign out</button>
                        </div>
                    </div>

                    <div>
                        <SPage />
                    </div>
                </div>
            ) :
                (
                    <div className="my-3">
                        <p>Welcome, Please sign in</p>
                        <button id="sign in"
                            onClick={() => signIn()}
                            className="bg-green-600 active:bg-green-300
                            size-10 w-32 m-1 rounded-md">Sign in</button>
                    </div >
                )}
        </div>
    );
}