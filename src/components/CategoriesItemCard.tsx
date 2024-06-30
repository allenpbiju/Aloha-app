import {StyleSheet, TouchableOpacity} from 'react-native';
import ThemedText from './ThemedText';
import ArrowIcon from './ArrowIcon';
import colors from '../styles/colors';

const CategoriesItemCard = ({title}: {title: string}) => (
  <TouchableOpacity style={style.itemContainer}>
    <ThemedText variant="normalText">{title}</ThemedText>
    <ArrowIcon />
  </TouchableOpacity>
);

export default CategoriesItemCard;

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.backgroundWhite,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
    borderRadius: 5,
  },
});
