import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export function AppButton() {
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
          width: "10vw",
          borderRadius: "30px",
          fontWeight: "bold",
          fontSize: "20px",
          mb: "10vh",
        }}
      >
        Check it out!
      </Button>
    </motion.div>
  );
}
