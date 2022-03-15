class Auth {
  constructor() {
    this.authenticated = false;
    this.user = "";
  }

  async login(cb, username, password) {
    try {
      const data = await fetch("http://localhost:5050/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await data.json();

      if (result.loginStatus === "Login Successful!") {
        this.authenticated = true;
        this.user = result.user;
        cb();
      } else{
        console.log('login failed')
      }
    } catch {
      console.log("Failed to log in");
    }
  }

  logout(cb) {
    this.authenticated = false;
    this.user = "";
    cb();
  }

  async register(cb, username, password) {
    try {
      const data = await fetch("http://localhost:5050/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await data.json();

      if (result.message === "User Created") {
        this.authenticated = true;
        this.user = result.user;
        cb();
      }
    } catch {
      console.log("Failed to register");
    }
  }

  isAuthenticated() {
    return this.authenticated;
  }

  currentUser() {
    return this.user;
  }
}

export default new Auth();
