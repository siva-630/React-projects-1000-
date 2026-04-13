import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";



const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
	getAnalytics(app);
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	const handleOAuthClick = async () => {
		setLoading(true);
		setErrorMessage("");

		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			if (error?.code === "auth/configuration-not-found") {
				setErrorMessage(
					"error",
				);
			} else {
				setErrorMessage(error?.message || "OAuth login failed.");
			}
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		await signOut(auth);
	};

	return (
		<div
			
		
		>
			<div
				
			>
				<h2 style={{ marginTop: 0 }}>One-Click OAuth</h2>

				{!user ? (
					<button
						onClick={handleOAuthClick}
						disabled={loading}
						
					>
						{loading ? "Opening OAuth..." : "Login with Google"}
					</button>
				) : (
					<>
						<p style={{ marginBottom: "8px" }}>
							Signed in as <strong>{user.displayName || user.email}</strong>
						</p>
						<button
							onClick={handleLogout}
							
						>
							Logout
						</button>
					</>
				)}

				{errorMessage && (
					<p style={{ color: "#b91c1c", marginTop: "12px", fontSize: "14px" }}>
						{errorMessage}
					</p>
				)}
			</div>
		</div>
	);
}

export default App;
