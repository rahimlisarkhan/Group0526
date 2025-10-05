const COOKIE = {

  set(name, value) {

    const stringValue = typeof value === "string" ? value : JSON.stringify(value);
    let cookieStr = `${name}=${stringValue}`;

    console.log("cookieStr",cookieStr);
    

    document.cookie = cookieStr;
  },


  get(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        const raw = decodeURIComponent(c.substring(nameEQ.length));
        try {
          return JSON.parse(raw);
        } catch {
          return raw;
        }
      }
    }
    return null;
  },


  delete(name, options = {}) {
    const { path = "/", domain = null } = options;
    let cookieStr = `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`;
    if (domain) cookieStr += `; Domain=${domain}`;
    document.cookie = cookieStr;
  },

 
  update(name, value, options = {}) {
    this.set(name, value, options);
  },
};



COOKIE.set("age",15)