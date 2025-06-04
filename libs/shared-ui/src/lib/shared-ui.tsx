import styles from './shared-ui.module.css'; // Assuming you have a CSS module

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['my-button']} onClick={props.onClick}>
      {' '}
      {/* Render a button */}
      {props.text} {/* Display button text */}
    </button>
  );
}

export default Button; // Export for easier import
