// "use client"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import "./style.css";
// import { useState } from "react";
    
// const navLink = [
//     { name: "Register", href: "/register" },
//     { name: "Login", href: "/login" },
//     { name: "Forgot Password", href: "/forget-password" },
// ]

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode
//     }) {
//     const pathname = usePathname();
//     const [input, setInput] = useState("");

//     return (
//         <div>
//             <div>
//                 <input type={input} onChange={(e) =>  setInput(e.target.value)} />
//             </div>
//             {navLink.map((link) => {
//                 const isActive = pathname.startsWith(link.href);
//                 return (
//                     <div key={link.name}>
//                         <Link href={link.href} className={ isActive ? "font-bold mr-4": "text-blue-500 mr-4"}>
//                             {link.name}
//                     </Link>
//                     </div>
//                 )
//             })}
//             <div>
//                 { children }
//             </div>
//         </div>
//   )
// }
