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
                                    backgroundColor: "white",
                                    textAlign: "center"
                                }}>
                                <Typography sx={{ fontSize: 20 }} color="black">
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
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}
                            >
                                <h1
                                    style={{ textAlign: 'center', color: 'black' }}
                                >
                                    Ryan
                                </h1>
                                <img src={require("../assets/img/ryan.jpeg")}
                                    style={{ width: '70vw' }}
                                />
                                <Typography sx={{ fontSize: 20 }} color="black">
                                    <p> The man, the myth, the legend. <br /><br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna.<br />
                                        Quam adipiscing vitae proin sagittis nisl rhoncus. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Et malesuada fames ac turpis egestas sed. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.<br />
                                        Consectetur purus ut faucibus pulvinar elementum. Lobortis elementum nibh tellus molestie nunc non blandit. Urna porttitor rhoncus dolor purus. Neque ornare aenean euismod elementum nisi quis eleifend. Cursus turpis massa tincidunt dui ut ornare.<br />
                                        Id eu nisl nunc mi ipsum. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sem et tortor consequat id. Mi quis hendrerit dolor magna. Libero id faucibus nisl tincidunt eget nullam non nisi.<br />
                                        Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Egestas sed tempus urna et pharetra.</p>
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