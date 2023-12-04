"use client";

import React from "react";
import Link from "next/link";
import { Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
      <Typography variant="h3" component="h1">
        Welcome to RocketHire
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Your gateway to hiring top developers from{" "}
        <Link href="https://rocketdevs.com/">RocketDevs</Link>
      </Typography>
      <Link href="/views">
        <Button variant="contained" color="primary" disableElevation>
          Explore Views
        </Button>
      </Link>
    </Stack>
  );
};

export default HomeContainer;
