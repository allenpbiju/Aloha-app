import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan,
  Image,
} from 'react-native-svg';

const screenWidth = Dimensions.get('screen').width;

interface GradientTextProps {
  text: string;
  fontSize: number;
  height?: number;
  image: string;
}

const GradientHeaderText: React.FC<GradientTextProps> = ({
  text,
  height = 480,
  fontSize,
  image,
}) => {
  const words = text.split(' ');

  return (
    <Svg
      viewBox={`0 0 ${screenWidth} ${height}`}
      height={height}
      width={'100%'}>
      <Defs>
        <LinearGradient
          id="rainbow"
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" offset="0%" stopOpacity={0} />
          <Stop stopColor="white" offset="50%" stopOpacity={0.8} />
          <Stop stopColor="white" offset="100%" stopOpacity={1} />
        </LinearGradient>
      </Defs>
      <Image
        x="0"
        y="0"
        width={screenWidth}
        height={height}
        href={image}
        preserveAspectRatio="xMidYMid slice"
      />
      <Text
        fontFamily="IBMPlexMono-Bold"
        fontSize={fontSize}
        x="50%"
        y={words.length === 1 ? '50%' : '38%'}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="url(#rainbow)">
        {words.map((word, index) => (
          <TSpan key={index} x="50%" dy={index === 0 ? 0 : '56'}>
            {word}
          </TSpan>
        ))}
      </Text>
    </Svg>
  );
};

export default GradientHeaderText;
