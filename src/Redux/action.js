import axios from "axios";
import { json } from "react-router-dom";

export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios("http://kzico.runflare.run/product/");
    localStorage.setItem("allProduct", JSON.stringify(data));
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

export const getproduct = (productId) => async (dispatch) => {
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
  if (last) {
    last.map((item, index) => {
      if (item._id == data._id) {
        last.splice(index, 1);
        data.counts += item.counts;
        data.totalCount += item.totalCount;
      }
    });
  }
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

export const getTotal = (data) => async (dispatch) => {
  const help = [];

  data.map((item) => {
    help.push(item.totalCount);
  });

  dispatch({
    type: "taSuccess",
    payload: { data: [...help], loading: false, error: "" },
  });
};


export const getUser = (data) => async (dispatch) => {
  dispatch({
    type: "tokenSuccess",
    payload: { data: { ...data }, loading: false, error: "" },
  });
};

export const getAddress =
  (city, addres, code, phone, user) => async (dispatch) => {
    const userNew = { ...user };
    const help = {};
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

export const getLogIn = (user, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: user,
      password: password,
    });
    localStorage.setItem("token", JSON.stringify(data.user.token));
    dispatch(getUser(data));
    dispatch({
      type: "successLogIn",
      payLoad: { data: { ...data }, error: "" },
    });
  } catch (error) {
    dispatch({
      type: "errorLogIn",
      payLoad: { data: {}, error: "Your username or password is Wrong!" },
    });
  }
};

export const getSignUp =
  (userName, email, password, mobile) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: userName,
          email: email,
          password: password,
          mobile: mobile,
        }
      );
      dispatch({
        type: "userSuccess",
        payLoad: { data: { ...data }, error: "" },
      });
      console.log(data);
    } catch (error) {
      const sError = error?.response?.data;
      dispatch({
        type: "userError",
        payLoad: { data: {}, error: sError },
      });
    }
  };

export const getProfile = (token) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "profileSuccess",
        payLoad: { data: { ...data }, error: "" },
      });
    } catch (error) {
      dispatch({
        type: "profileError",
        payLoad: { data: {}, error: error },
      });
    }
  };

export const changePassword = (oldPass, newPass, token) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-password",
      {
        old_password: oldPass,
        new_password: newPass,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const help = data.message;
    dispatch({
      type: "successChngPass",
      payLoad: { chngPassData: help, chngPassError: "" },
    });
  } catch (error) {
    const help2 = error?.response?.data?.message;
    dispatch({
      type: "errorChngPass",
      payLoad: { chngPassData: "", chngPassError: help2 },
    });
  }
};

export const changeProfile = (firstname,lastname,gender,age,city,token) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        age: age,
        city: city,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      );
    const help = data.message;
    dispatch({
      type: "successChngProf",
      payLoad: { chngProfData: help, chngProfError: "" },
    });
  } catch (error) {
    const help2 = error?.response?.data?.message;
    dispatch({
      type: "errorChngProf",
      payLoad: { chngProfData: "", chngProfError: help2 },
    });
  }
};


export const uploadPhoto = (pic, token) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("profile-image", pic);
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/user/profile-image",
      formData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const help = data.message;
    dispatch({
      type: "successUplPhoto",
      payLoad: { uplPhotoData: help, uplPhotoError: "" },
    });
  } catch (error) {
    const help2 = error?.response?.data?.message;
    dispatch({
      type: "errorUplPhoto",
      payLoad: { uplPhotoData: "", uplPhotoError: help2 },
    });
  }
};

