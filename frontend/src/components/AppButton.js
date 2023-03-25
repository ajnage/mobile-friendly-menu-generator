import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export function AppButton() {
  return (
    <motion.div
      className="testButton"
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <Button variant="contained">Check it out</Button>
    </motion.div>
  );
}
