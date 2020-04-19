import Link from "next/link";

export default function Navbar(){
    return (
        <div style={{display: "flex",justifyContent : "center",textDecoration : "none !important"}}>
            <Link href="/"><a title="Home">Home</a></Link>
            <Link href="/about"><a title="About">About</a></Link>
            <Link href="/user?name=mango" as="user/mango"><a title="user">User</a></Link>
            <Link href="/placeholder"><a title="todo">Posts</a></Link>
        </div>
    )

}
