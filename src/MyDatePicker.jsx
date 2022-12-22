import React, { useState } from "react";
import { DatePicker, ToolbarComponentDefault } from "@material-ui/pickers";

function MyDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  return (
    <>
      <DatePicker
        variant="inline"
        label="Select a date"
        value={selectedDate}
        onChange={handleDateChange}
        ToolbarComponent={customToolbarReplaced}
      />
    </>
  );
}

const customToolbarReplaced = (props) => {
  return <div>Default Toolbar Replaced</div>;
};

const customToolbarExtended = (props) => {
  return (
    <div>
      <ToolbarComponentDefault {...props} />
      <span>Default Toolbar Extended</span>
    </div>
  );
};

export default MyDatePicker;
