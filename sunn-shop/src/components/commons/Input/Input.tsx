import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  color: "#303030",
  padding: '0',
  "& .MuiInput-underline:before, &:hover .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiInput-underline:before": {
    border: "none",
    content: "none",
  },
  "& label.Mui-focused": {
    color: "#828282",
  },
  "& label": {
    color: "#303030",
  },
});
export const Input: React.FC<any> = (props) => {
  return (
    <div className="input">
      <CssTextField {...props} />
    </div>
  );
};
