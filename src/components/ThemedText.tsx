import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';
import typography from '../styles/typography';

type ThemedTextProps = TextProps & {
  variant:
    | 'mainHeading'
    | 'pageHeading'
    | 'cardHeading'
    | 'sectionHeading'
    | 'normalText'
    | 'buttonText'
    | 'buttonTextOutline'
    | 'iconTextActive'
    | 'iconTextInactive';
  style?: StyleProp<TextStyle>;
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