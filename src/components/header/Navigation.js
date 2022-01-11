import NavItem from "./NavItem"
import "./Navigation.css"
export default function Navigation() {
    return (
        <div className="navigation">
            <NavItem route="/" name="HOME" />
            <NavItem route="/howtoplay" name="HOW TO PLAY" />
            <NavItem route="/about" name="ABOUT" />
        </div>
    )
}