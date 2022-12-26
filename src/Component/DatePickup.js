import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function DatePickup({
  lable,
  val,
  setVal,
  searchParam,
  setsearchParam,
}) {
  const handleChange = (newValue) => {
    // lable == "From Date" && searchParam.set("from", newValue);
    // lable == "To Date" && searchParam.set("to", newValue);
    // setsearchParam(searchParam);
    setVal(dayjs(newValue).format("YYYY-MM-DD"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={lable}
        inputFormat="YYYY-MM-DD"
        value={val ? val : null}
        onChange={handleChange}
        renderInput={(params) => (
          <>
            <TextField {...params} />
            {val && (
              <IconButton
                style={{
                  position: "absolute",
                  top: ".5rem",
                  margin: "auto",
                  right: "2rem",
                }}
                onClick={() => {
                  // lable == "From Date" && searchParam.delete("from");
                  // lable == "To Date" && searchParam.delete("to");
                  // setsearchParam(searchParam);
                  setVal("");
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </>
        )}
      />
    </LocalizationProvider>
  );
}
