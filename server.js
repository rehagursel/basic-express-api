const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const plants = [
    {
      name: 'Fern',
      light: 'Low',
      height: 20,
      petFriendly: 'Yes',
      price: 20,
      desc: 'Ferns are a group of vascular plants that reproduce via spores and have neither seeds nor flowers.'
    },
    {
      name: 'Snake Plant',
      light: 'Low',
      height: 50,
      petFriendly: 'No',
      price: 35,
      desc: 'Snake plants are also known as mother-in-law’s tongue, it is known for its air-purifying capabilities.'
    },
    {
      name: 'Monstera',
      light: 'Medium',
      height: 60,
      petFriendly: 'No',
      price: 50,
      desc: 'Monstera is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.'
    },
    {
      name: 'Pothos',
      light: 'Low to medium',
      height: 40,
      petFriendly: 'Yes',
      price: 25,
      desc: 'Pothos is a popular houseplant and is often seen in hanging baskets or climbing up walls or poles.'
    },
    {
      name: 'ZZ Plant',
      light: 'Low to medium',
      height: 90,
      petFriendly: 'Yes',
      price: 30,
      desc: 'ZZ Plant is known for its waxy, oval-shaped leaves that are thick and glossy.'
    },
    {
      name: 'Spider Plant',
      light: 'Bright-indirect',
      height: 30,
      petFriendly: 'Yes',
      price: 15,
      desc: 'Spider plants are easy to grow and are great for beginners.'
    },
    {
      name: 'Air Plant',
      light: 'Bright-indirect',
      height: 15,
      petFriendly: 'Yes',
      price: 10,
      desc: 'Air plants, also known as tillandsias, are known for their ability to grow without soil.'
    },
    {
      name: 'Peperomia',
      light: 'Bright-indirect',
      height: 25,
      petFriendly: 'Yes',
      price: 20,
      desc: 'Peperomia plants are known for their ornamental foliage, which comes in a variety of shapes and colors.'
    },
    {
      name: 'Aloe Vera',
      light: 'Bright-direct',
      height: 30,
      petFriendly: 'Yes',
      price: 15,
      desc: 'Aloe vera is a succulent plant species of the genus Aloe. It is cultivated for agricultural and medicinal uses.'
    },
    {
      name: 'Jade Plant',
      light: 'Bright-direct',
      height: 40,
      petFriendly: 'Yes',
      price: 25,
      desc: 'Jade plant is a popular succulent houseplant with fleshy, rounded leaves.'
    },
    {
      name: 'Peace Lily',
      light: 'Low to medium',
      height: 45,
      petFriendly: 'No',
      price: 25,
      desc: 'Peace lilies are known for their attractive white flowers, which bloom throughout the year.'
    },
    {
      name: 'English Ivy',
      light: 'Low to bright indirect',
      height: 30,
      petFriendly: 'No',
      price: 20,
      desc: 'English ivy is a versatile plant that can be grown as a ground cover, in hanging baskets, or as a climbing vine.'
    },
    {
      name: 'Rubber Plant',
      light: 'Bright-indirect',
      height: 70,
      petFriendly: 'No',
      price: 40,
      desc: 'Rubber plants have large, glossy leaves that can add a tropical touch to any indoor space.'
    },
    {
      name: 'Parlor Palm',
      light: 'Low to bright indirect',
      height: 60,
      petFriendly: 'Yes',
      price: 30,
      desc: 'Parlor palms are popular indoor plants known for their air-purifying properties and ease of care.'
    },
    {
      name: 'Devil’s Ivy',
      light: 'Low to bright indirect',
      height: 20,
      petFriendly: 'No',
      price: 15,
      desc: 'Devil’s ivy, also known as golden pothos or pothos, is a popular houseplant with heart-shaped leaves.'
    },
    {
      name: 'Lavender',
      light: 'Full sun',
      height: 30,
      petFriendly: 'Yes',
      price: 15,
      desc: 'Lavender is a fragrant herb that is prized for its beautiful flowers and calming scent.'
    },
    {
      name: 'Bamboo',
      light: 'Bright-indirect',
      height: 120,
      petFriendly: 'Yes',
      price: 40,
      desc: 'Bamboo is a fast-growing plant that is often used as a decorative element in homes and gardens.'
    },
    {
      name: 'Succulent Mix',
      light: 'Bright-indirect',
      height: 10,
      petFriendly: 'Yes',
      price: 25,
      desc: 'Succulents are water-storing plants that come in a wide variety of shapes, sizes, and colors.'
    },
    {
      name: 'Orchid',
      light: 'Bright-indirect',
      height: 45,
      petFriendly: 'No',
      price: 30,
      desc: 'Orchids are exotic and elegant houseplants known for their stunning blooms and unique growth habits.'
    },
    {
      name: 'Mint',
      light: 'Partial shade',
      height: 25,
      petFriendly: 'Yes',
      price: 10,
      desc: 'Mint is a versatile herb that is commonly used in culinary dishes, teas, and cocktails.'
    },
    {
      name: 'Rosemary',
      light: 'Full sun',
      height: 40,
      petFriendly: 'Yes',
      price: 20,
      desc: 'Rosemary is a fragrant and flavorful herb that is commonly used in cooking and aromatherapy.'
    },
    {
      name: 'African Violet',
      light: 'Bright-indirect',
      height: 20,
      petFriendly: 'Yes',
      price: 15,
      desc: 'African violets are small, colorful houseplants that bloom year-round with proper care.'
    },
    {
      name: 'Money Tree',
      light: 'Bright-indirect',
      height: 60,
      petFriendly: 'Yes',
      price: 35,
      desc: 'Money trees are believed to bring good luck and prosperity to their owners and are easy to care for.'
    },
    {
      name: 'Lemon Tree',
      light: 'Full sun',
      height: 100,
      petFriendly: 'No',
      price: 45,
      desc: 'Lemon trees produce fragrant flowers and tart fruit and can be grown indoors or outdoors in warm climates.'
    },
    {
      name: 'Lucky Bamboo',
      light: 'Bright-indirect',
      height: 45,
      petFriendly: 'Yes',
      price: 25,
      desc: 'Lucky bamboo is a popular houseplant in Feng Shui and is believed to bring luck, prosperity, and happiness.'
    }
  ];

app.get('/api/plants', (req, res) => {
  res.json(plants);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.status === 404) {
        res.status(404).json({ message: 'Not Found' });
    } else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  const PORT = 3010;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
