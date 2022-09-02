
import { ButtonProps } from './@types';

import './button.scss';

export function Button({ isOutlined = false, ...props}: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}