import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BTN = styled(Button)({
  color: "#0077E6",
  fontSize: "14px",
  "&:hover": {
    color: "#003D77",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
});

export default BTN;
