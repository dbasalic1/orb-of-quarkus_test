import Navigation from "./Navigation"
import "./Header.css"

export default function Header() {
    return (
        <div className="header-container">
            <div className="title">
            <h1>ORB OF QUARKUS</h1>
            </div>
            <Navigation />
        </div>
    )
}