// @flow
import * as React from "react";
import { Route, Switch, Link as RrLink } from "react-router-dom";

type WithRoute<P> = {
  path: string
} & $Subtype<React.ComponentType<P>>;

const routes = [];

export function route(path: string) {
  return (C: React.ComponentType<any>): WithRoute<{}> => {
    routes.push(<Route path={path} component={C} />);
    return class extends React.Component<{}> {
      static path = path;
      render() {
        return <Switch>{routes}</Switch>;
      }
    };
  };
}

type Props = {
  to: { path: string },
  children: React.Node
};
export class Link extends React.Component<Props> {
  render() {
    return <RrLink to={this.props.to.path}>{this.props.children}</RrLink>;
  }
}

export const indexRoute = (C: React.ComponentType<any>): WithRoute<{}> => {
  return route("/")(C);
};
