export const GlobalPrivilege = "global";
export const ExternalPrivilege = "external";
export const InternalPrivilege = "internal";
export const ManagerPrivilege = "MANAGER";
export const AdopterPrivilege = "ADOPTER";
export const StaffPrivilege = "STAFF";
export const serverHost = "http://localhost:8080";
export const paths = {
	login: "/login",
	logout: "/logout",
	signup: "/signup",
	forgetPassword: "/forgetPassword",

	AdopterHome: "/adopter/home",

	ManagerHome: "/manager/home",

	StaffHome: "/staff/home",

	notFound: "*"
}
export const defaultPersonState = () => {
	const detailsSaved = JSON.parse(localStorage.getItem('userDetails'));
	if(detailsSaved === undefined){
		return {
		
			isAuthorized: false,
			username: "",
			privilege: "",
		}
	}else{
		return {	
			...detailsSaved,
			isAuthorized: true
		}
	}
}

