import * as React from 'react';
import * as R from 'ramda';
import { withRouter } from 'react-router';
import { routes } from '../';

export function withTheme(WrappedComponent) {
  const ComponentWithTheme = class extends React.PureComponent {
    render() {
      const { props } = this;
      const currentRouteData = routes.find(r => r.path === props.location.pathname);
      const theme = R.path(['props', 'theme'], currentRouteData);

      return (
        <WrappedComponent {...props}
          theme={theme}
        />
      );
    }
  };

  let componentName =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';

  ComponentWithTheme.displayName =  `withTheme(${componentName})`;

  return withRouter(ComponentWithTheme);
}
