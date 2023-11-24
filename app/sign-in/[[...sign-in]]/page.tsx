import { SignIn } from "@clerk/nextjs"
import styles from './signin.module.scss';

const SignInPage = () => {
    return <div className={styles.signinPage}>
        <SignIn/>
    </div>
}

export default SignInPage