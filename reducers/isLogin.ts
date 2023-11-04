interface IAction {
  type: string;
}

const isLoginReducer = (state = false, action: IAction) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
