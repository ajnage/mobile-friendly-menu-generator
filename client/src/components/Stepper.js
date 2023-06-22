import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#7a2c2c",
//     },
//     secondary: {
//       main: "#FFFFFF",
//     },
//   },
// });

const steps = ["Make your design", "Get QR codes", "Print them"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: theme.palette.grey[800],
        backgroundColor: "primary.main",
      }}
    >
      {/* <ThemeProvider theme={theme}> */}
      <Stepper nonLinear activeStep={activeStep} sx={{ mr: 0 }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="#FFFFFF" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            {/* <ThemeProvider theme={theme}> */}
            <Typography sx={{ mt: 2, mb: 1, color: "secondary.main" }} component={'span'}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                color: "secondary.main",
              }}
            >
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
            {/* </ThemeProvider> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                color: "secondary.main",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ color: "secondary.main" }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{ color: "secondary.main" }}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block", color: "secondary.main" }}
                    component={'span'}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    onClick={handleComplete}
                    sx={{ color: "secondary.main" }}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      {/* </ThemeProvider> */}
    </Box>
  );
}
