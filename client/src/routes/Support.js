// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { motion } from "framer-motion";

// import { Support } from "@mui/icons-material";
// import ErrorPage from "../error-page";
// import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Button } from "@mui/material";

export default function SupportPage() {
	return (
		<Typography bgcolor="primary.grey" sx={{ pt: '10vh', }}>
			<Container className="supportBody">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="primary.white"
					gutterBottom
					sx={{ pt: 5, pb: 5 }}
					fontWeight={"bold"}
				>
					Support
				</Typography>

				<section class="faq-section">
					<div class="faq-question">
						<h3>How do we sign up?</h3>
						<div class="faq-answer">
							<p>
								Follow the instructions in the pricing
								page. Contact our team if you are having
								difficulties.
							</p>
						</div>
					</div>

					<div class="faq-question">
						<h3>Where can we find the QR codes?</h3>
						<div class="faq-answer">
							<p>
								{" "}
								Once you created your menu, you will be
								given a button to get a printable PDF of
								QR codes for your menu. After printing
								the QR codes, simply scan them and you
								will be redirected to your menu as an
								interactive web page.
							</p>
						</div>
					</div>

					<div class="faq-question">
						<h3> What do we need to start?</h3>
						<div class="faq-answer">
							<p>
								All you need to start are the menu items
								and their pictures. The rest we will
								walk you through in the interactive web
								menu builder.
							</p>
						</div>
					</div>
				</section>
				<Container sx={{ width: "70%" }}>
					<Box className="contact">
						<h2>Contact Us</h2>
						<form action="submit-form.php" method="POST">
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								className="name"
								name="name"
								required
							/>

							<label htmlFor="email">Email:</label>
							<input
								type="email"
								className="email"
								name="email"
								required
							/>

							<label htmlFor="subject">Subject:</label>
							<input
								type="text"
								className="subject"
								name="subject"
								required
							/>

							<label htmlFor="message">Message:</label>
							<textarea
								className="message"
								name="message"
								required
							></textarea>

							{/* editing the sx prop didn't work for some reason, added inline style instead */}
							<Button
								variant="contained"
								sx={{ color: "primary.main" }}
								style={{ backgroundColor: "#7a2c2c" }}
							>
								Send
							</Button>
						</form>
					</Box>
				</Container>
			</Container>
		</Typography>
	);
}
