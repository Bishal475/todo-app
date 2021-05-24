class AuthenticationService {
    hasLoggedin(){
        if(sessionStorage.getItem("User")){
            return true;
        }else{
            return false;
        }
    }

    logOut(){
        sessionStorage.removeItem("User");
    }
}

export default new AuthenticationService();