import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex flex-column align-items-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-white w-75 mb-3'>
        <h2 className='text-center mb-4'> Welcome to 
  <span className='text-primary'> SecureConnect</span> Authentication!!
</h2>
          <p className='text-center mb-4'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
              <Button variant='primary' className='me-3'>
                Sign In
              </Button>
            </LinkContainer>

            <LinkContainer to='/register'>
              <Button variant='info text-white'>Register</Button>
            </LinkContainer>
          </div>
        </Card>

        <Card className='p-3 d-flex flex-column align-items-center bg-primary text-white w-75'>
  <h3 className='text-center mb-4'>Another Box</h3>
  <p className='text-center mb-4'>
    This is another box below the Hero component with some padding between them.
  </p>
</Card>
      </Container>
    </div>
  );
};

export default Hero;
