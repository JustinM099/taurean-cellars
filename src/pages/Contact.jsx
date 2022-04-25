import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Card variant="outlined"
                        style={{
                            backgroundColor: "black",
                            width: '75vw'
                        }}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="white" style={{ textAlign: 'center' }}>
                                <h2>Contact</h2>
                                <p>Ryan Manning</p>
                                <p><a href="tel:1-206-747-2498" style={{ textDecoration: 'none', color: 'white' }}>206-747-2498</a></p>
                                <p><a href="mailto: info@taureancellars.com" style={{ textDecoration: 'none', color: 'white' }}>info@taureancellars.com</a></p>
                                <p>Hours: By Appointment</p>
                                <p>Renton, WA</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Contact