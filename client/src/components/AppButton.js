import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function AppButton({ destination }) {
  return (
    <motion.div
      className="testButton"
      whileHover={{ scale: [null, 2.2, 1.8] }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="contained"
        sx={{
          height: "8vh",
          width: { xl: "10vw", lg: "10vw", md: "13vw", xs: "20" },
          borderRadius: "30px",
          fontWeight: "bold",
          fontSize: "20px",
          mb: "10vh",
        }}
        component={Link}
        to={destination}
      >
        Check it out!
      </Button>
    </motion.div>
  );
}
