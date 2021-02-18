class Auth {
    constructor(){
        this.isloggedin=false;
    }

    login(cb) {
        localStorage.setItem("token", "user");
        this.isloggedin=true;
        cb();
    }

    logout() {
        localStorage.clear();
        console.log("logged out")
        return false;
    }

    isLoggedin() {
        if(localStorage.getItem("token"))
            return true;
        else
            return false;
    }

    getUid() {
        return 2;
    }
}

export default new Auth();