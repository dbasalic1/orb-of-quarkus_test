import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
export default function NewGameDialog({open, handleCancel, handleCreateAndClose}) {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
      };

    const handleSubmit = () => {
        handleCreateAndClose(name);
        setName("");
    }  
    return (
        <Dialog open = {open} onClose={handleCancel}>
            <DialogTitle>New game</DialogTitle>
            <DialogContent>
                <p>Enter player name</p>
                <TextField
          id="name"
          label="Name"
          name="name"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Yes</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )

}