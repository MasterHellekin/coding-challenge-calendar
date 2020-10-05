import React, { useCallback } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import { createReminder, updateReminder } from "../../store/store";

const enhance = connect(
  (state, ownProps) => ({
    reminder: ownProps.id ? state.reminder[ownProps.id] : undefined,
  }),
  { createReminder, updateReminder }
);

const ReminderForm = ({
  id,
  reminder,
  createReminder,
  updateReminder,
  onClose,
  currentDay,
  ...rest
}) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { text, city } = e.target;
    const values = {
      text: text.value,
      city: city.value,
      date: currentDay,
    };

    reminder ? updateReminder(id, values) : createReminder(values);
    onClose();
  }, []);

  return (
    <Dialog
      {...rest}
      onClose={onClose}
      aria-labelledby="reminder-dialog-slide-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="reminder-dialog-slide-title">
          {id ? "Edit Reminder" : "Create Reminder"}
        </DialogTitle>
        <DialogContent>
          <TextField
            name="text"
            label="Text"
            defaultValue={reminder ? reminder.text : ""}
          />
          <TextField
            name="city"
            label="city"
            defaultValue={reminder ? reminder.city : ""}
          />
          <TextField
            name="date"
            label="Date"
            defaultValue={currentDay}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" color="primary">
            Save Reminder
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default enhance(ReminderForm);
