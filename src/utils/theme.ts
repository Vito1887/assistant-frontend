import { useDimensions } from 'src/hooks/useDimensions';

export const MAX_DEVICE_WIDTH = 500;

export const SCREEN_WIDTH = () => useDimensions().width;

export const SCREEN_HEIGHT = () => useDimensions().height;
