import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Masonry from '@mui/lab/Masonry';
import Masonry from '@mui/lab/Masonry/Masonry';

// const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const heights = [150, 90, 90, 70, 110, 150, 130];

const sources = [
    "/images/Tomato/bowl_green.jpg",
    "/images/Tomato/fruits.jpg",
    "/images/Tomato/ice_cream.jpg",
    "/images/Tomato/pancakes.jpg",
    "/images/Tomato/pasta_salad.jpg",
    "/images/Tomato/salad.jpg",
    "/images/Tomato/steak.jpg",
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MasonryWrapper() {
    return (
        <Box sx={{ width: '100%', minHeight: 393 }}>
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => (
                    <Item key={index} sx={{ height }}>
                        <img src={sources[index]} alt="blah" />
                    </Item>
                ))}
            </Masonry>
        </Box>
    );
}
