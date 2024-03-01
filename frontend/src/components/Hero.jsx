import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex flex-column align-items-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-white w-75 mb-3'>
        <h2 className='text-center mb-4'> Welcome to 
  <span className='text-warning'> Dobby Adds</span> Assignment!!
</h2>
          <p className='p-3 font-weight-bold d-flex flex-column text-center font-weight-bold align-items-center bg-light text-dark w-75'>
             MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library.
          </p>
         

          <div className='d-flex'>
            <LinkContainer to='/login'>
              <Button variant='warning' className='me-3'>
                Sign In
              </Button>
            </LinkContainer>           

            <LinkContainer to='/register'>
              <Button variant='dark text-white'>Register</Button>
            </LinkContainer>
          </div>
        </Card>

    
      </Container>
     
      <div className="col-md-6 offset-md-3 text-center">
          <img className="align-items-center img-fluid" src="https://image.pitchbook.com/VL2AStzhEcLMPczS3oJhCG2KZzx1637752894177_200x200"  alt="Sample Image" />
         
        </div>

    </div>
  );
};

export default Hero;
