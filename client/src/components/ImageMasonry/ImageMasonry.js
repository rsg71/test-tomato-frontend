import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
    return (
        <Box sx={{ width: '100%', minHeight: 829, paddingLeft: '10px' }}>
            <Masonry columns={3} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        {/* <Label>{index + 1}</Label> */}
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                        <span className="badge bg-primary">Lorem</span>{' '}
                        <span className="badge bg-primary">Ipsum</span>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}





const sources = [
    "/images/Tomato/bowl_green.jpg",
    "/images/Tomato/fruits.jpg",
    "/images/Tomato/ice_cream.jpg",
    "/images/Tomato/pancakes.jpg",
    "/images/Tomato/pasta_salad.jpg",
    "/images/Tomato/salad.jpg",
    "/images/Tomato/steak.jpg",
]


const itemData = [
    {
        // img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        img: "/images/Tomato/bowl_green.jpg",
        title: 'Fern',
    },
    {
        // img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
        img: "/images/Tomato/fruits.jpg",
        title: 'Snacks',
    },
    {
        // img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        img: "/images/Tomato/ice_cream.jpg",
        title: 'Mushrooms',
    },
    {
        // img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        img: "/images/Tomato/pancakes.jpg",
        title: 'Tower',
    },
    {
        // img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        img: "/images/Tomato/pasta_salad.jpg",
        title: 'Sea star',
    },
    {
        // img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        img: "/images/Tomato/salad.jpg",
        title: 'Honey',
    },
    {
        // img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        img: "/images/Tomato/steak.jpg",
        title: 'Basketball',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        img: '/images/Tomato/tomato_salad.jpg',
        title: 'Breakfast',
    },
    {
        // img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
        img: '/images/Tomato/spread.jpg',
        title: 'Tree',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        img: 'images/Tomato/chicken_wings.jpg',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        // img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
        img: 'images/Tomato/chinese_food1.jpg',
        title: 'Camping Car',
    },
    {
        // img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        img: 'images/Tomato/egg_rolls.jpg',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        // img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
        img: 'images/Tomato/clams.jpg',
        title: 'Mountain',
    },
    {
        // img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        img: 'images/Tomato/spaghetti.jpg',
        title: 'Bike',
    },
];
