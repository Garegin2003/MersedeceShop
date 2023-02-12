import React from "react";

function ContactForm() {
    return(
        <div className="contact-form">
             <label for="name">
      <span class="input-name">
        Name:
      </span>
      <input type="text" name="name" id="name" class="name" />
    </label>
    <label for="email">
      <span class="input-name">
        Email address:
      </span>
      <input type="text" name="email" id="email" class="email" />
    </label>
    <label for="project-info">
      <span class="input-name">
        Tell about your project:
      </span>
      <textarea name="project-info" id="project-info" class="project-info"></textarea>
    </label>
    <button class="btn send-btn">
      Send
    </button>
        </div>
    )
}

export default ContactForm