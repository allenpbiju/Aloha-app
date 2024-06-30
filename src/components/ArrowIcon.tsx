import {Path, Svg} from 'react-native-svg';
import colors from '../styles/colors';

interface ArrowIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  width = 16,
  height = 16,
  fill = colors.primary,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
      fill={fill}
    />
  </Svg>
);

export default ArrowIcon;
