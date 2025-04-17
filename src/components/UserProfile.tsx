"use client"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"

export default function UserProfile() {
    const {data: session, status} = useSession();
    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "unauthenticated" || !session) {	
        return <div>Please sign in</div>
    }
    return (
        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
        <Avatar className="h-24 w-24">
          <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
          <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
  
        <div className="text-center">
          <h2 className="text-xl font-bold">{session.user.name}</h2>
          <p className="text-gray-500">{session.user.email}</p>
          <p className="text-sm text-gray-400">User ID: {session.user.id}</p>
        </div>
  
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>  
    )
}