import React from 'react'
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' /><br />
        <input
          type='text'
          name='location'
          placeholder='Location' /><br />
        <textarea
          name='issue'
          placeholder='Describe your issue.' /><br />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4() });
  }

}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewTicketForm;
