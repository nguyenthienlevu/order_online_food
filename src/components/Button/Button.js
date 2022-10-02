import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  shadow = false,
  small = false,
  large = false,
  outline = false,
  danger = false,
  info = false,
  success = false,
  round = false,
  text = false,
  children,
  className,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };

  let Component = 'button';
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    small,
    large,
    outline,
    danger,
    info,
    success,
    text,
    round,
  });

  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  shadow: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  outline: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  text: PropTypes.bool,
  success: PropTypes.bool,
  round: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
