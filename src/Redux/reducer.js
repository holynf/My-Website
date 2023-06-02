export const data = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const product = (
  state = { data: {}, loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "prLoading":
      return payload;
    case "prSuccess":
      return payload;
    case "prFailed":
      return payload;

    default:
      return state;
  }
};

export const cart = (state = 0, { type, payload }) => {
  switch (type) {
    case "add":
      return state + payload;
    case "reduce":
      return payload;
    case "clear":
      return state = 0;
    default:
      return state;
  }
};

export const count = (state = 0, { type, payload }) => {
  switch (type) {
    case "coAdd":
      return state + 1;
    case "coReduce":
      return state - 1;
    case "coClear":
      return (state = 0);
    default:
      return state;
  }
};

export const payment = (
  state = { data: []},
  { type, payload }
) => {
  switch (type) {
    case "paLoading":
      return payload;
    case "paSuccess":
      return payload;
    case "paFailed":
      return payload;
    case "qtyCart":
      return payload;
    case "paRemove":
      return payload;
    default:
      return state;
  }
};


export const total = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "taLoading":
      return payload;
    case "taSuccess":
      return payload;
    case "taFailed":
      return payload;
    default:
      return state;
  }
};

export const user = (
  state = { data: {}, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "userSuccess":
      return payload;
    case "userLoading":
      return payload;
    case "userError":
      return payload;
    default:
      return state;
  }
};

export const token = (
  state = { data: {}, loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "tokenSuccess":
      return payload;
    case "tokenLoading":
      return payload;
    case "tokenError":
      return payload;
    default:
      return state;
  }
};

export const status = (
  state = { data: {}, loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "statusSuccess":
      return payload;
    case "statusLoading":
      return payload;
    case "statusError":
      return payload;
    default:
      return state;
  }
};

export const address = (
  state = { data: {}, loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "addressSuccess":
      return payload;
    case "addressLoading":
      return payload;
    case "addressError":
      return payload;
    default:
      return state;
  }
};

export const change = (
  state = { data: {}, loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "changeSuccess":
      return payload;
    case "changeLoading":
      return payload;
    case "changeError":
      return payload;
    default:
      return state;
  }
};

export const logIn = (state = { data: {} ,error: "" }, { type, payLoad }) => {
  switch (type) {
    case "successLogIn":
      return payLoad;
    case "LoadingLogIn":
      return payLoad;
    case "errorLogIn":
      return payLoad;
    case "delLogIn":
      return payLoad;
    default:
      return state;
  }
};

export const profile = (state = { data: {} ,error: "" }, { type, payLoad }) => {
  switch (type) {
    case "profileSuccess":
      return payLoad;
    case "profileError":
      return payLoad;
    default:
      return state;
  }
};

export const chngPass = (
  state = { chngPassData: "", chngPassError: "" },
  { type, payLoad }
) => {
  switch (type) {
    case "successChngPass":
      return payLoad;
    case "errorChngPass":
      return payLoad;
    case "delChngPass":
      return payLoad;
    default:
      return state;
  }
};

export const chngProfile = (
  state = { chngProfData: "", chngProfError: "" },
  { type, payLoad }
) => {
  switch (type) {
    case "successChngProf":
      return payLoad;
    case "errorChngProf":
      return payLoad;
    case "delChngProf":
      return payLoad;
    default:
      return state;
  }
};

export const uplPhoto = (
  state = { uplPhotoData: "", uplPhotoError: "" },
  { type, payLoad }
) => {
  switch (type) {
    case "successUplPhoto":
      return payLoad;
    case "errorUplPhoto":
      return payLoad;
    case "delUplPhoto":
      return payLoad;
    default:
      return state;
  }
};