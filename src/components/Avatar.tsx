import { HtmlHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends HtmlHTMLAttributes<HTMLImageElement>{
    hasborder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps){   

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}