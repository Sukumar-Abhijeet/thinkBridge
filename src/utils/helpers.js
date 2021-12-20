import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension] = width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;

export const scale = size => shortDimension / guidelineBaseWidth * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;