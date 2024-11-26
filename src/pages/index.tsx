// pages/index.tsx
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  return (
      <div>
        {/* Carousel Section */}
        <CarouselSection />

        {/* Widgets Section */}
        <WidgetsSection />

        {/* Contact Form Section */}
        <ContactFormSection />
      </div>
  );
};

export default HomePage;

// Carousel Section Component
const CarouselSection: React.FC = () => {
  const carouselItems = [
    {
      src: '/images/sss_closeup.jpg',
      alt: 'First slide',
      caption: 'Welcome to Our Site',
    },
    {
      src: '/images/sss_group.jpg',
      alt: 'Second slide',
      caption: 'Discover Amazing Content',
    },
    {
      src: '/images/sss_midrange.jpg',
      alt: 'Third slide',
      caption: 'Join Our Community',
    },
  ];

  return (
      <div style={{ position: 'relative' }}>
        <Carousel>
          {carouselItems.map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.alt}
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>

        {/* Tagline Overlay */}
        <div
            style={{
              position: 'absolute',
              top: '20%',
              width: '100%',
              textAlign: 'center',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
        >
          <h1>Your Tagline Here</h1>
        </div>
      </div>
  );
};

// Widgets Section Component
const WidgetsSection: React.FC = () => {
  const widgetData = [
    {
      title: 'SoundCloud 1',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/your-track-1',
    },
    {
      title: 'MixCloud 1',
      embedUrl: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fyour-mix-1%2F',
    },
    {
      title: 'SoundCloud 2',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/your-track-2',
    },
    {
      title: 'MixCloud 2',
      embedUrl: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fyour-mix-2%2F',
    },
  ];

  return (
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Mixes & Tracks</h2>
        <Row xs={1} sm={2} md={4} className="g-4">
          {widgetData.map((widget, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">{widget.title}</Card.Title>
                    <div className="d-flex justify-content-center">
                      <iframe
                          title={widget.title}
                          width="100%"
                          height="166"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={widget.embedUrl}
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
          ))}
        </Row>
      </Container>
  );
};

// Contact Form Section Component
const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
      <Container className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
  );
};