import * as styles from './DropdownItem.css';

export interface DropdownItemProps {
  title: string;
  onClick: () => void;
}

const DropdownItem = ({ title, onClick }: DropdownItemProps) => {
  return (
    <div className={styles.wrap} onClick={onClick}>
      {title}
    </div>
  );
};

export default DropdownItem;
