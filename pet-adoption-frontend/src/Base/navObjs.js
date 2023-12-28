import Login from "../Authentication/UI/login"
import Signup from "../Authentication/UI/signup";
import Logout from "../Authentication/UI/Logout";
import ForgetPassword from "../Authentication/UI/forgetPassword";
import Error from "../Authentication/UI/Error/Error";

import {
    AdopterPrivilege,
    ExternalPrivilege,
    GlobalPrivilege,
    InternalPrivilege,
    paths,
    StaffPrivilege
} from "../collection";

import AdopterHome from "../SiteRoles/Adopter/UI/AdopterHome";
import ManagerHome from "../SiteRoles/Manager/UI/ManagerHome";
import StaffHome from "../SiteRoles/Staff/UI/StaffHome";



export const nav = [

    // Authentication pages
    {
        path: paths.login,
        Title: "Login",
        element: <Login />,
        status: ExternalPrivilege
    },
    {
        path: paths.signup,
        Title: "Signup",
        element: <Signup />,
        status: ExternalPrivilege
    },
    {
        path: paths.forgetPassword,
        Title: "ForgetPass",
        element: <ForgetPassword />,
        status: ExternalPrivilege
    },
    {
        path: paths.logout,
        Title: "Logout",
        element: <Logout />,
        status: InternalPrivilege
    },

    // error page
    {
        path: paths.notFound,
        Title: "404",
        element: <Error />,
        status: GlobalPrivilege
    },

    // Adopter Pages
    {
        path: paths.AdopterHome,
        Title: "Adopter Home",
        element: <AdopterHome />,
        status: ExternalPrivilege
    },

    // Manager Pages
    {
        path: paths.ManagerHome,
        Title: "Manager Home",
        element: <ManagerHome />,
        status: ExternalPrivilege
    },

    // Staff Pages
    {
        path: paths.StaffHome,
        Title: "Staff Home",
        element: <StaffHome />,
        status: ExternalPrivilege
    }
]