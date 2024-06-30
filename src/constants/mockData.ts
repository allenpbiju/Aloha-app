const mockData = [
  {
    activity: 'Surfing',
    image: require('../../assets/images/surfing.png'),
    description:
      'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.',
    topSpots: [
      {name: 'Maui', image: require('../../assets/images/maui.png')},
      {name: 'Kauai', image: require('../../assets/images/kauai.png')},
      {name: 'Honolulu', image: require('../../assets/images/honolulu.png')},
    ],
  },
  {
    activity: 'Hula',
    image: require('../../assets/images/hula.png'),
    description:
      'Hula is a traditional Hawaiian dance form accompanied by chant (oli) or song (mele). It is uniquely Hawaiian and is often performed at celebrations and ceremonies.',
    topSpots: [
      {name: 'Big Island', image: require('../../assets/images/maui.png')},
      {name: 'Maui', image: require('../../assets/images/honolulu.png')},
      {name: 'Kauai', image: require('../../assets/images/kauai.png')},
    ],
  },
  {
    activity: 'Vulcano',
    image: require('../../assets/images/vulcano.png'),
    description:
      'Hawaii is home to some of the most active volcanoes in the world. Visitors can explore volcanic landscapes and witness volcanic activity.',
    topSpots: [
      {name: 'Big Island', image: require('../../assets/images/maui.png')},
    ],
  },
];

export default mockData;
