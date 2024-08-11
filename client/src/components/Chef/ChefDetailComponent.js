import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Paper, Button, Card, CardMedia, CardContent, IconButton, Box } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { chefs } from '../common/utils.js';

function ChefDetailComponent() {
  const { id } = useParams();
  const [chefs, setChef] = useState(null);
  const sliderRef = useRef(null);

  const dishes = [
    { id: 1, name: 'California Roll', image: 'https://via.placeholder.com/750' },
    { id: 2, name: 'Miso Soup', image: 'https://via.placeholder.com/750' }
  ];

  // useEffect(() => {
  //   const fetchChef = () => {
  //     const selectedChef = chefs.find((chef) => chef.id === parseInt(id, 10));
  //     setChef(selectedChef);
  //   };

  //   fetchChef();
  // }, [id]);

  useEffect(() => {
    const fetchChef = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/chefs/${id}`);  // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch chef data');
        }
        const data = await response.json();
        setChef(data);  // Set the fetched data to the chef state
      } catch (error) {
        console.error('Error fetching chef data:', error);
      }
    };

    fetchChef();
  }, [id]);  // Dependency array ensures this runs when the ID changes


  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Manually control carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
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

  // console.log(chefs);
  console.log(chefs.filter((chef) => chef.id === id));

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      {chefs ? (
        <Paper elevation={3} className="p-6">
          <Typography variant="h5" gutterBottom className="mb-4 text-gray-700">
            {chefs.filter((chef) => chef.id === id)[0].name}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Skills: {chefs.filter((chef) => chef.id === id)[0].skills}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Availability: {chefs.filter((chef) => chef.id === id)[0].availability}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Rating: {chefs.filter((chef) => chef.id === id)[0].rating}
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Bio: {chefs.filter((chef) => chef.id === id)[0].bio || ''}
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
              {dishes?.map((dish) => (
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
                pathname: `/booking/${chefs.id}`,
                state: { chefs },
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
