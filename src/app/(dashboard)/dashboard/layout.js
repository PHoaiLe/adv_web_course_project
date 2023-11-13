import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';

export default function DashboardRootLayout({ children })
{
    return (
        <html lang='en'>
            <body>
                <Sidebar />
                <Navbar />
                {children}
            </body>
        </html>
    )
}

// 'use client';
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Dashboard from "@/view/dashboard";

// ReactDOM.render(
//     <BrowserRouter>
//       <Switch>
//         <Route path="/dashboard" component={Dashboard} />
//         <Redirect from="/" to="/dashboard" />
//       </Switch>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );