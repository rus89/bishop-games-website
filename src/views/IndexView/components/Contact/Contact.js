// ABOUTME: Contact section with email CTA and social media links.
// ABOUTME: Reads the studio contact email from Gatsby siteMetadata.
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xvzdkpjb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <Container data-aos={'fade-up'}>
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind? Let's talk about how we can bring your game idea to life."
      />
      <Box maxWidth={600} margin={'0 auto'}>
        {submitted ? (
          <Box textAlign={'center'} padding={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Thank you!
            </Typography>
            <Typography color="text.secondary">
              We&apos;ve received your message and will get back to you soon.
            </Typography>
          </Box>
        ) : error ? (
          <Box textAlign={'center'} padding={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Something went wrong.
            </Typography>
            <Typography color="text.secondary">
              Please try again or email us directly.
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={fields.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={fields.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  value={fields.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
