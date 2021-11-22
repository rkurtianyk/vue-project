import { app } from './firebaseDb';
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

const VUE_USER_NAME = 'vue-user-name';

const AuthService = {
  user: null,
  authenticated() {
    if (window.localStorage.getItem(VUE_USER_NAME) === '') {
      return false
    } else {
      return true
    }
  },
  setUser(user) {
    window.localStorage.setItem(VUE_USER_NAME, user)
  },
  login (email, password) {
      try {
        this.setUser('Vasia');
      } catch (e) {
        console.log(e);
      }
  },
  getUserName() {
    return window.localStorage.getItem(VUE_USER_NAME)
  },

  logout () {
    try {
        this.setUser('');
      } catch (e) {
        console.log(e);
      }
  }
}

export default AuthService;