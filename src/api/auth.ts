import { app } from './firebaseDb';
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const AuthService = {
  user: null,
  authenticated() {
    if (this.user == null) {
      return false
    } else {
      return !this.user.isAnonymous
    }
  },
  setUser(user) {
    this.user = user;
  },
  async login (email, password) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        this.setUser(user);
        return user;
      } catch (e) {
        console.log(e);
      }
  },

  async logout () {
    try {
        await signOut(auth);
        this.setUser(null);
      } catch (e) {
        console.log(e);
      }
  }
}

export default AuthService;