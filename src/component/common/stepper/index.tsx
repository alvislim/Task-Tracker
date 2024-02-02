import { Stepper, Step } from "react-form-stepper";

type StyleConfig = {
  activeBgColor: string;
  activeTextColor: string;
  completedBgColor: string;
  completedTextColor: string;
  inactiveBgColor: string;
  inactiveTextColor: string;
  size: string | number;
  circleFontSize: string | number;
  labelFontSize: string | number;
  borderRadius: string | number;
  fontWeight: string | number;
};

type Props = {
  activeStep: number;
  options: string[];
  styleConfig?: StyleConfig;
};

const StepsIndicator = (props: Props) => {
  const { activeStep, options, styleConfig } = props;
  return (
    <Stepper activeStep={activeStep} styleConfig={styleConfig}>
      {options.map((elem) => {
        return <Step label={elem} />;
      })}
    </Stepper>
  );
};

export default StepsIndicator;
