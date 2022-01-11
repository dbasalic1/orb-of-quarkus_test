import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavItem.css"
export default function NavItem(props) {
    return (
        <div className="nav-item">
            <Button component={Link} to={props.route} color="inherit">{props.name}</Button>
        </div>
    )
}