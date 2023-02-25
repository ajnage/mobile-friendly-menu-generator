import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";


export default function SupportPage() {
  return (
    <div className="supportBody">
      <h1>Support</h1>
      <nav>
        <ul>
          <li><a href="#faq">Frequently Asked Questions</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    <section class="faq-section">
      <div class="faq-question">
        <h3>Question 1?</h3>
        <div class="faq-answer">
          <p>Answer 1.</p>
        </div>
      </div>

      <div class="faq-question">
        <h3>Question 2?</h3>
        <div class="faq-answer">
          <p>Answer 2.</p>
        </div>
      </div>

      <div class="faq-question">
        <h3>Question 3?</h3>
        <div class="faq-answer">
          <p>Answer 3.</p>
        </div>
      </div>
    </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form action="submit-form.php" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" className="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" className="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" className="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea className="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}