import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
// import { login } from '../servies/Authentication'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { createNewChallenges } from "../services/Challenges";

const theme = createTheme();

const CreateNewChallenges = ({ setCreateChallengesScreen }: any) => {
  const [passwordError, SetPasswordError] = useState(null)
  const navigate = useNavigate();
  // const [role, setRole] = useState();
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [onLoading, setOnLoading] = useState<Boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());
    console.log("user", user)

    const allData = {
      name: user.Challenge_name,
      description: user.discreption,
      rewardDesc: user.reward_discreption,
      challengeStatus: "draft",
      type: user.row_radio_buttons_group,
      actionIds: [1, 2, 3]
    }

    console.log("allData",allData)

  setOnLoading(true)
  createNewChallenges(allData);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Challenge
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="Challenge_name"
              label="Challenge Name"
              name="Challenge_name"
              autoComplete="Challenge_name"
              autoFocus
            />
            {errors?.Challenge_name && <p className='input-error'>**{errors.Challenge_name}</p>}
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="discreption"
              label="Discreption"
              type="discreption"
              id="discreption"
              autoComplete="current-discreption"
              helperText={passwordError}
              error={Boolean(passwordError)}
              rows={4}
              multiline
            />
            {errors.password && <p className='input-error'>**{errors.password}</p>}
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row_radio_buttons_group"

            >
              <FormControlLabel value="Team" control={<Radio sx={{
                color: 'green',
                '&.Mui-checked': {
                  color: 'green',
                },
              }} />} label="Team" />
              <FormControlLabel value="Individual" control={<Radio sx={{
                color: 'green',
                '&.Mui-checked': {
                  color: 'green',
                },
              }} />} label="Individual" />
            </RadioGroup>
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="reward_discreption"
              label="Reward Discreption"
              type="text"
              id="reward_discreption"
              autoComplete="reward_discreption"
              helperText={passwordError}
              error={Boolean(passwordError)}
              rows={4}
              multiline
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="Start_Date"
                label="Start Date"
                name="Start_Date"
                autoComplete="Start_Date"
                autoFocus
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="End_Date"
                label="End Date"
                name="End_Date"
                autoComplete="End_Date"
                autoFocus
              />
            </Box>
            {errors.message && <p className='input-error'>**{errors.message}</p>}
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              {isLoading ? <RestartAltIcon className="loading" /> : 'Create Challenges'}
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default CreateNewChallenges

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(70,149,82)",
  },
  "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
    color: "red",
    fontSize: "8px"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(70,149,82)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(70,149,82)",
    },
    "&:hover fieldset": {
      borderColor: "#14A098",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(70,149,82)",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(70,149,82)"),
  backgroundColor: "rgb(70,149,82)",
  "&:hover": {
    backgroundColor: "#CB2D6F",
  },
}));

// {
    
//   "name":"chaalenge 1",
//   "description": "chaalenge 1 description",
//   "rewardDesc":"rewardDesc description",
//   "challengeStatus":"draft",
//   "type":"individual",
//   "actionIds":[1,2,3]
// }