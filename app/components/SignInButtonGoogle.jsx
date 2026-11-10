import {signIn} from "@/auth"

function SignInButtonGoogle(){
    return(
        <form action={async () => {
            'use server'
            await signIn('google', {
                redirectTo: '/dashboard'
            })
        }}
        >
            <button type = "submit">Continue with Google</button>
        </form>
    )

}
export default SignInButtonGoogle