import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase"
async function DoLogin(query: { email: string, password: string }): Promise<UserCredential> {
  let user: UserCredential;
  user = await signInWithEmailAndPassword(firebaseAuth, query.email, query.password);
  return user;
  var _TestLogin = await new Promise<Object>(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        emp_no: 'V00001',
        emp_name: 'DANG QUANG HUY',
        emp_permission: '[....]',
        emp_role: 'user'
      });
    }, 1400);
  });

}

export { DoLogin } 