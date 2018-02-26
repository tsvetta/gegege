import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

/* ::
type Route = {
  text: string,
  to: string,
}

type Props = {
  routes: Route,
}
 */

class Navigation extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {props.routes.map(route => (
            <li key={route.to} className={styles.item}>
              <Link to={route.to}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
