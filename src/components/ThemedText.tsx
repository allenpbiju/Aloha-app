import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';
import typography from '../styles/typography';

type ThemedTextProps = TextProps & {
  variant:
    | 'mainHeading'
    | 'pageHeading'
    | 'cardHeadingPrimary'
    | 'cardHeading'
    | 'cardHeadingSmall'
    | 'sectionHeading'
    | 'normalText'
    | 'buttonText'
    | 'buttonTextOutline'
    | 'iconTextActive'
    | 'iconTextInactive';
  style?: StyleProp<TextStyle>;
  fill?: string;
  x?: string;
  y?: string;
  textAnchor?: string;
};

const ThemedText: React.FC<ThemedTextProps> = ({
  variant,
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[typography[variant], style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
