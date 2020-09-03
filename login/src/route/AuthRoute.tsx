import React from "react";
import { RouteComponentProps, Redirect, Route } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const AuthRoute = ({ Component, path, exact = false }: Props): JSX.Element => {
  const isAuthed = useSelector(
    (state: RootStateOrAny) => state.auth.authentication
  );

  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AuthRoute;
