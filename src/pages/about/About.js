import "./About.css";
export default function About() {
    return (
        <div className="about-container">
            <div className="heading-container">
                <h1>ABOUT THE GAME</h1>
            </div>
            <div className="about-text-container">
                <p>
                    The Orb of Quarkus is a simple dungeon crawler game created for the
                    Codecta Full Stack Academy project.
                    The user layout was created with React while the back end service was
                    implemented in Java with Quarkus framework where the project got it's name from.
                </p>
            </div>
        </div>
    )
}