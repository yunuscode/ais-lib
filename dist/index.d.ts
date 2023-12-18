import React from 'react';

declare function LottieIcon({ isActive, height, width }: AnimatedIconProps): React.JSX.Element;
interface AnimatedIconProps {
    isActive: boolean;
    width?: number;
    height?: number;
}

export { LottieIcon };
