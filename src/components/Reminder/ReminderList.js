import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { useModal } from "react-modal-hook";

import Reminder from "./Reminder";
import ReminderForm from "./ReminderForm";

const enhance = connect((state) => ({
  ids: Object.keys(state.reminder)
    .filter((id) => state.reminder[id])
    .reverse(),
}));

const PersonListContainer = ({ ids, currentDay }) => {
  const [
    showCreateModal,
    hideCreateModal,
  ] = useModal(({ in: open, onExited }) => (
    <ReminderForm
      open={open}
      onExited={onExited}
      onClose={hideCreateModal}
      currentDay={currentDay}
    />
  ));

  return (
    <React.Fragment>
      <Button onClick={showCreateModal}>Create Reminder</Button>
      <List>
        {ids.map((id) => (
          <Reminder key={id} id={id} currentDay={currentDay} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default enhance(PersonListContainer);
