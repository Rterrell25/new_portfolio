import React, { useRef } from "react"

// MUI stuff
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"

const SelectStatus = ({ language, handleInputChange }) => {
  const inputLabel = useRef(null)

  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel ref={inputLabel} id='demo-simple-select-outlined-label'>
        Status
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={language}
        onChange={handleInputChange("language")}
        fullWidth
      >
        <MenuItem value='All'>All</MenuItem>
        <MenuItem value='HTML'>HTML</MenuItem>
        <MenuItem value='JavaScript'>JavaScript</MenuItem>
        <MenuItem value='Ruby'>Ruby</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectStatus
