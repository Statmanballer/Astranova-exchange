
import {auth} from '@/auth'
import SignOutButton from '../components/SignOutButton'
import {redirect} from 'next/navigation'
import { Suspense } from 'react'
async function Dashboard(){
    const session = await auth()
    if (!session?.user){
        redirect('/login')
    }
    console.log(session)
    return(
        <main>
            <h1>Welcome, {session.user.name}</h1>
            <p>{session.user.email}</p>
            <SignOutButton />
        </main>
    )
}

function DashboardPage() {
return <Suspense fallback = {<main>Loading...</main>}>
    <Dashboard />
</Suspense>
}
export default DashboardPage