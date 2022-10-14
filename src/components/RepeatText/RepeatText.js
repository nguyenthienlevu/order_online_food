import classNames from 'classnames/bind';
import styles from './RepeatText.module.scss';
import PropType from 'prop-types';

const cx = classNames.bind(styles);

function RepeatText({ title, text }) {
  return (
    <>
      <h1 className={cx('title')}>{title}</h1>
      <h3 className={cx('heading')}>{text}</h3>
    </>
  );
}
RepeatText.PropType = {
  title: PropType.string,
  text: PropType.string,
};

export default RepeatText;
