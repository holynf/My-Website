import axios from "axios";

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios("http://kzico.runflare.run/product/");
    dispatch({
      type: "success",
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const getproduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "prLoading",
      payload: { data: {}, loading: true, error: "" },
    });
    const { data } = await axios(
      `http://kzico.runflare.run/product/${productId ? `${productId}` : ""}`
    );
    dispatch({
      type: "prSuccess",
      payload: { data: { ...data }, loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: "prFailed",
      payload: { data: {}, loading: false, error: error.message },
    });
  }
};

export const getPayment = (data) => async (dispatch, getState) => {
  const help = [];
  const last = getState().payment.data;

  last.map((item) => {
    if (item) {
      help.push(item);
    }
  });

  help.push({ ...data });
  localStorage.setItem("payment", JSON.stringify(help));
  dispatch({
    type: "paSuccess",
    payload: { data: [...help], loading: false, error: "" },
  });
};

export const getTotal = (data) => async (dispatch, getState) => {
  const help = [];

  data.map((item) => {
    help.push(item.totalCount);
  });

  dispatch({
    type: "taSuccess",
    payload: { data: [...help], loading: false, error: "" },
  });
};

export const signUp =
  (user, email, password, mobile) => async (dispatch, getState) => {
    const help = {};
    help.userName = `${user}`;
    help.userEmail = `${email}`;
    help.userMobile = `${mobile}`;
    help.userPassword = `${password}`;

    dispatch({
      type: "userSuccess",
      payload: { data: { ...help }, loading: false, error: "" },
    });
  };

export const getUser = (data) => async (dispatch, getState) => {
  dispatch({
    type: "tokenSuccess",
    payload: { data: { ...data }, loading: false, error: "" },
  });
};

export const getAddress =
  (city, addres, code, phone, user) => async (dispatch, getState) => {
    const userNew = { ...user };
    const help = {};
    const state = getState().token;
    help.addres = addres;
    help.city = city;
    help.code = code;
    help.phone = phone;

    userNew.address = help;

    dispatch({
      type: "addressSuccess",
      payload: { data: { user, ...userNew }, loading: false, error: "" },
    });
  };

  export const getLogIn = (user, password) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("http://kzico.runflare.run/user/login", {
        email: user,
        password: password,
      });
      localStorage.setItem("token", JSON.stringify(data.user.token));
      dispatch(getUser(data));
      dispatch({
        type: "successLogIn",
        payLoad: { data: {...data} ,error: "" },
      });
    } catch (error) {
      dispatch({
        type: "errorLogIn",
        payLoad: { data: {} ,error: "Your username or password is Wrong!" },
      });
    }
  };


