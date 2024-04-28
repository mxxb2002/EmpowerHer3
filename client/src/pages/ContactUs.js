import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-bg-image bg-cover bg-no-repeat min-h-screen">
      <main className="pt-24 w-full flex flex-row items-center justify-center ">
        <section className="contact-section w-[500px]">
          <h2 className="font-semibold">Contact Us</h2>
          <form id="contact-form" action="/submit-contact" method="post">
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
