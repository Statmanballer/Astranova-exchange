import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const allowedDomains = (process.env.ALLOWED_EMAIL_DOMAINS ?? '').split(',')
console.log(allowedDomains)
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers : [Google],
    pages: {
        error: '/access-denied'
    },
    callbacks: {
        signIn({account , profile}){
         if(account?.provider === 'google'){
            const email = profile?.email?.toLowerCase()
           // if (!email || !profile?.email_verified) return false
            console.log(email)
           return allowedDomains.includes(email.split('@')[1])
         } 
         return false
        }
    }
})
