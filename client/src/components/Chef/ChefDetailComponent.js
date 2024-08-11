import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Paper, Button, Card, CardMedia, CardContent, IconButton, Box } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ChefDetailComponent() {
  const { id } = useParams();
  const [chefs, setChefs] = useState(null);
  const [selectedChef, setSelectedChef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);  // Define currentSlide state
  const sliderRef = useRef(null);

  const dishes = [
    { id: 1, name: 'California Roll', image: 'https://via.placeholder.com/750' },
    { id: 2, name: 'Miso Soup', image: 'https://via.placeholder.com/750' }
  ];

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/chefs/getAllChefs'); // API endpoint for all chefs
        if (!response.ok) {
          throw new Error('Failed to fetch chefs data');
        }
        const data = await response.json();
        setChefs(data);
        const selectedChef = data.find((chef) => chef.id === id);
        setSelectedChef(selectedChef);
      } catch (error) {
        console.error('Error fetching chefs data:', error);
      }
    };

    fetchChefs();
  }, [id]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);  // Update the current slide index
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      {selectedChef ? (
        <Paper elevation={3} className="p-6">
          <Typography variant="h5" gutterBottom className="mb-4 text-gray-700">
            {selectedChef.name}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Skills: {selectedChef.skills}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Availability: {selectedChef.availability}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Rating: {selectedChef.rating}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Bio: {selectedChef.bio || ''}
          </Typography>
          <Typography variant="h6" className="mb-4 text-gray-700">
            Dishes Prepared
          </Typography>
          <div style={{ position: 'relative' }}>
            <Slider
              {...carouselSettings}
              ref={sliderRef}
              beforeChange={handleBeforeChange}
            > 
              {dishes.map((dish) => (
                <div key={dish.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="400"
                      image={dish.image}
                      alt={dish.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {dish.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
            <IconButton
              onClick={handlePrev}
              style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button
              component={Link}
              to={{
                pathname: `/booking/${selectedChef.id}`,
                state: { chef: selectedChef },
              }}
              variant="contained"
              color="primary"
            >
              Book Chef
            </Button>
          </Box>
        </Paper>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
}

export default ChefDetailComponent;
