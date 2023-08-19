import React from "react";
import store from "./features/redux/store";

import { Provider } from "react-redux"; // Importing the useDispatch hook
import NavigatorBase from "./features/Navigation/Stacks/BaseNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NavigatorBase />
    </Provider>
  );
};

export default App;
