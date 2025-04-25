import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExampleList } from "./example/ExampleList";
import { ExampleCreate } from "./example/ExampleCreate";
import { ExampleEdit } from "./example/ExampleEdit";
import { ExampleShow } from "./example/ExampleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Example"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Example"
          list={ExampleList}
          edit={ExampleEdit}
          create={ExampleCreate}
          show={ExampleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
