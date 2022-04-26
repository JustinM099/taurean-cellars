import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Home = () => {
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
                    <Link to="/About" style={{ textDecoration: 'none' }}>
                        <Card variant="outlined"
                            style={{ backgroundColor: "black" }}
                        >
                            <CardContent>
                                <img src={require("../assets/img/taurean-header-img.jpeg")}
                                    style={{ width: '81vw' }} />
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined"
                        style={{
                            backgroundColor: "black",
                            margin: '1vh',
                            width: '60vw',
                            textAlign: 'center'
                        }}>
                        <CardContent>
                            <h1
                            style={{
                                color:"white"
                            }}>
                                Showcasing the profound wines of select Puget Sound vineyards.
                            </h1>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Home