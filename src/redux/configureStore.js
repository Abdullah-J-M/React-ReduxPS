import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // Adding support for Redux devtools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    //the following middleware is important as it warn us if we accidently mutate redux state(safety net)
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
