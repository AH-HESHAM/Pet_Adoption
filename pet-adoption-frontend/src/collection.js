export const GlobalPrivilege = "global";
export const ExternalPrivilege = "external";
export const InternalPrivilege = "internal";
export const ManagerPrivilege = "manager";
export const AdopterPrivilege = "adopter";
export const StaffPrivilege = "staff";
export const serverHost = "http://localhost:8080";
export const paths = {
	login: "/",
	logout: "/logout",
	signup: "/signup",
	forgetPassword: "/forgetPassword",

	AdopterHome: "/adopter/home",

	ManagerHome: "/manager/home",

	StaffHome: "/staff/home",

	notFound: "*"
}
export const defaultPersonState = () => {
	return {
		isAuthorized: false,
		username: "",
		privilege: "",
	}
}