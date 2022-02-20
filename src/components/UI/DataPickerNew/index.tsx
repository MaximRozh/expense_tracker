import React, { FC } from 'react';
import { DatePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, TextField } from '@mui/material';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from '@mui/styles';



type ViewsDatePickerProp = {
  selected: any;
  choseValue: any;
  viewsArr: any;
  label?: string;
}

const useStyles = makeStyles({
  root: {
    background: 'white',
    borderRadius: 10,
    "& .MuiFormControl-root": {
      width: '100%',
      border: 'silver',
      "& .Mui-error": {
        color: 'black',
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: 'none',
      }
    }
  }
})

const ViewsDatePicker:FC<ViewsDatePickerProp> = ({selected, choseValue, viewsArr, label='Select date'}) => {
  const classes = useStyles()
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className={classes.root}>
        <DatePicker
          views={viewsArr}
          value={selected}
          label={label}
          onChange={(newValue:any) => {
            choseValue(newValue);
          }}
          minDate={new Date('2019.01.01')}
          maxDate={new Date()}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default ViewsDatePicker;