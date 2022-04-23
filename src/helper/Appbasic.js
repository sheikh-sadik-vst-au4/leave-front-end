const app = {
  setToken: function (token) {
    sessionStorage.setItem("token", token);
  },
  getToken: function () {
    return sessionStorage.getItem("token");
  },
  removeToken: function () {
    return sessionStorage.removeItem("token");
  },
  setRoleID: function (roleid) {
    sessionStorage.setItem("roleid", roleid);
  },
  getRoleID: function () {
    return sessionStorage.getItem("roleid");
  },
  removeRoleID: function () {
    return sessionStorage.removeItem("roleid");
  },
  setCurrentUser: function (currentuser) {
    sessionStorage.setItem("currentuser", currentuser);
  },
  getCurrentUser: function () {
    return sessionStorage.getItem("currentuser");
  },
  removeCurrentUser: function () {
    return sessionStorage.removeItem("currentuser");
  },
};

export default app;
