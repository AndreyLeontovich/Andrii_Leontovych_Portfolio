import { useState } from "react";
import styles from "./Contact.module.scss";
import React from 'react'



export const Contact = () => {


  const initialState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData(prev => ({
          ...prev,
          [name]: value
      }));
  };

  const sendMessage = async (e) => {
      e.preventDefault();

      setLoading(true);
      setStatus('');

      try {
          const response = await fetch(
              `${import.meta.env.VITE_API_URL}/api/contact`,
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
              }
          );

          const result = await response.json();

          if (!response.ok || !result.success) {
              throw new Error('Failed to send message');
          }

          setStatus('success');
          setFormData(initialState);

      } catch (error) {
          console.error(error);
          setStatus('error');

      } finally {
          setLoading(false);
      }
  };





  return (
    <div className={styles.contactBlock}>
        <h1 className={styles.contactTitle}>CONTACT</h1>

        <div className={styles.contactInfo}>
        <div className={styles.contactColumn}>
          <a href="tel:+4796699695">
            +47 96 69 96 95
          </a>
          <a href="mailto:andreyschnaps65@gmail.com">
            andreyschnaps65@gmail.com
          </a>
        </div>

        <div className={styles.contactColumn}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/rshnaps?hvrq=MmlrbmJkY3p4MGxp&utm_source=qr" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/andrey-leontovich-a4b7582ab/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className={styles.contactColumn}>
          <a href="https://t.me/andrey13576" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://viber.click/380997892504" target="_blank" rel="noreferrer">
            Viber
          </a>
          <a href="https://wa.me/380997892504" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>


      <p className={styles.contactDescription}>
        Whether you have a question, a suggestion, or just want to say hello,
        this is the place to do it.
        <br />
        Please fill out the form below with your details and message,
        and we'll get back to you as soon as possible.
      </p>


      <form
            className={styles.contactForm}
            onSubmit={sendMessage}
        >
            <div className={styles.formFields}>
                <div className={styles.formLeft}>

                    <label className={styles.formField}>
                        <span>Name</span>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.formField}>
                        <span>Email</span>

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.formField}>
                        <span>Phone</span>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>

                </div>

                <label className={
                    `${styles.formField} ${styles.formMessage}`
                }>
                    <span>Message</span>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <button
                type="submit"
                className={styles.formButton}
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send'}
            </button>

            <div aria-live="polite">
                {status === 'success' && (
                    <p>Message sent successfully!</p>
                )}

                {status === 'error' && (
                    <p>Failed to send message.</p>
                )}
            </div>

        </form>

    </div>
  )
}
