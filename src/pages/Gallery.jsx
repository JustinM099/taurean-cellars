import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Hands and Grapes',
        imgPath:
            require('../assets/img/hands-grapes.jpeg'),
    },
    {
        label: 'Steaming Barrels',
        imgPath:
            require('../assets/img/steaming-barrels.jpeg'),
    },
    {
        label: 'Vineyard With Green Leaves',
        imgPath:
            require('../assets/img/vineyard-green-leaves.jpeg'),
    },
    {
        label: 'Vineyard With Yellow Leaves',
        imgPath:
            require('../assets/img/vineyard-yellow-leaves.jpeg'),
    },
    {
        label: 'Four Bottles',
        imgPath:
            require('../assets/img/four-bottles.jpeg'),
    },
    // {
    //     label: 'How It Started vs How Its Going',
    //     imgPath:
    //         require('../assets/img/how-it-started.jpeg'),
    // },
    {
        label: 'Vineyard Pruning',
        imgPath:
            require('../assets/img/low-pruning-day.jpeg'),
    },
    // {
    //     label: 'Pinot on a Barrel',
    //     imgPath:
    //         require('../assets/img/pinot-on-barrel.jpeg'),
    // },
    // {
    //     label: 'Pommard Clone Pinot Bunch',
    //     imgPath:
    //         require('../assets/img/pommard-pinot-grapes.jpeg'),
    // },
    // {
    //     label: 'Vineyard Being Pruned',
    //     imgPath:
    //         require('../assets/img/pruning.png'),
    // },
    {
        label: 'Vineyard With Dandelions',
        imgPath:
            require('../assets/img/vineyard-dandelions.jpeg'),
    },
];

function Gallery() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                backgroundImage: 'none',
                backgroundColor: 'white'
            }}
        >
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Card
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            width: "90vw",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <h1>
                            GALLERY
                        </h1>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined"
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            width: '90vw',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <CardContent>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default Gallery;
