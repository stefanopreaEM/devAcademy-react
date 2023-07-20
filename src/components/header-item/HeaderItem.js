import styles from './HeaderItem.module.css';

function HeaderItem(props) {

  const { children } = props;

  return (
    <li className={styles.headerItem}>
        {children}
    </li>
  )
}

export default HeaderItem;