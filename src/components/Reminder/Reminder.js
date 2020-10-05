import React, { Fragment } from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { useModal } from "react-modal-hook";

import { deleteReminder } from "../../store/store";

import ConfirmDialog from "./ConfirmDialog/ConfirmDialog";
import ReminderForm from "./ReminderForm";

const enhance = connect(
  (state, ownProps) => ({
    reminder: state.reminder[ownProps.id],
  }),
  { deleteReminder }
);

const Reminder = ({ id, reminder, deleteReminder, currentDay }) => {
  const [showEditModal, hideEditModal] = useModal(({ in: open, onExited }) => (
    <ReminderForm
      id={id}
      open={open}
      onExited={onExited}
      onClose={hideEditModal}
      currentDay={currentDay}
    />
  ));

  const [showConfirmModal, hideConfirmModal] = useModal(
    ({ in: open, onExited }) => (
      <ConfirmDialog
        open={open}
        onExited={onExited}
        title="Delete reminder?"
        confirmLabel="Delete Reminder"
        onConfirm={() => deleteReminder(id)}
        onCancel={hideConfirmModal}
      >
        Do you really want to delete {reminder.text}?
      </ConfirmDialog>
    ),
    [reminder]
  );

  return (
    <Fragment>
      {reminder.date === currentDay ? (
        <ListItem>
          <ListItemText
            primary={reminder.text}
            secondary={reminder.date + " " + reminder.city}
          />
          <ListItemSecondaryAction>
            <Button onClick={showEditModal}>Edit</Button>
            <Button onClick={showConfirmModal}>Delete</Button>
          </ListItemSecondaryAction>
        </ListItem>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default enhance(Reminder);
