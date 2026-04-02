import React from 'react'
import Container from '@/components/core/container'
import Navbar from '@/components/core/navbar'
import Lafdasection from '@/components/landing/lafda-section';
export default function Page() {
    return (
    <div >    
            <Container >
                <Navbar />
                <Lafdasection />
            </Container>
      
    </div>
  );
}