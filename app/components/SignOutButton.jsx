import { signOut } from '@/auth'


function  SignOutButton(){
     return(
        <form action={async () => {
            'use server'
            await signOut({ redirectTo: '/login'})
        }}
        >

            <button type ="submit">Sign Out</button>
        </form>
     )
}
export default SignOutButton