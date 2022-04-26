import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <br />
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Link to="/Contact" style={{ textDecoration: 'none' }}>
                        <Card variant="outlined"

                        >
                            <CardContent                            
                            style={{
                                backgroundColor: "black",
                                textAlign: "center"
                            }}>
                                <Typography sx={{ fontSize: 20 }} color="white">
                                    <h2 style={{ textAlign: 'center' }}>About</h2>
                                    <p> We are a very small, very passionate winery located in Renton, Washington. <br /><br />
                                        We source grapes from Oregon and Washington and have an obsession with making the best wines
                                        Puget Sound can offer.
                                        <br />
                                        We believe Western Washington can produce world class wines and feel we
                                        are on the cusp of this being discovered by wine lovers everywhere.
                                        <br />
                                        We manage and consult on
                                        Puget Sound AVA vineyards, tend to our own, and encourage you to visit any and all wineries in the AVA.
                                        <br /><br />
                                        As vigneron and winemaker, Ryan controls all aspects of our wines from ground to glass.</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <br />
                <Grid item xs={3}>
                    <Link to="/Contact" style={{ textDecoration: 'none' }}>
                        <Card variant="outlined"
                        style={{
                            width: '95vw'
                        }}
                        >
                            <CardContent
                                style={{
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}
                            >
                                <h1
                                    style={{ textAlign: 'center', color: 'white' }}
                                    >
                                    Ryan
                                </h1>
                                <img src={require("../assets/img/ryan.jpeg")}
                                    style={{ height: '50vh' }}
                                />
                                <Typography sx={{ fontSize: 20 }} color="white">
                                    <p> The man, the myth, the legend. <br /><br />
                                        Jesus, look at this big swinging dick.
                                        <br />
                                        What a pimp. I can't believe that he walks the same earth as us. Jules and Vincent wrapped into one.
                                        <br />
                                        And the dude on top of that.
                                        <br /><br />
                                        This motherfucker abides.</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default About