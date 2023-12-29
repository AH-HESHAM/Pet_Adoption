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
    StaffPrivilege,
    ManagerPrivilege

} from "../collection";

import AdopterHome from "../SiteRoles/Adopter/UI/AdopterHome";
import ManagerHome from "../SiteRoles/Manager/UI/ManagerHome";
import ReviewerHome from "../SiteRoles/Staff/UI/reviewerHome";
import PublisherHome from "../SiteRoles/Staff/UI/publisherHome";



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
        status: AdopterPrivilege
    },

    // Manager Pages
    {
        path: paths.ManagerHome,
        Title: "Manager Home",
        element: <ManagerHome />,
        status: ManagerPrivilege
    },

    // Staff reviewer Pages
    {
        path: paths.ReviewerHome,
        Title: "Reviewer Home",
        element: <ReviewerHome />,
        status: GlobalPrivilege
    },

    // Staff reviewer Pages
    {
        path: paths.PublisherHome,
        Title: "Publisher Home",
        element: <PublisherHome />,
        status: GlobalPrivilege
    }

]