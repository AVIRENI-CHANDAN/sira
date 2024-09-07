import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiEndpoints, ProtectedRouteEndpoints } from "./Endpoints";

const validateToken = (Component) => {
    return (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const access_token = localStorage.getItem('access_token');
            const refresh_token = localStorage.getItem('refresh_token');
            console.log("Values in tokens", access_token, refresh_token);

            if (access_token && refresh_token) {
                fetch(ApiEndpoints.JWT_VALIDATE, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    console.log("Checking access_token token");
                    if (response.ok) {
                        console.log("Valid access_token");
                        navigate(ProtectedRouteEndpoints.USER_HOME);
                    } else if (response.status === 401) {
                        console.log("Invalid access token");
                        localStorage.removeItem("user_role");
                        localStorage.removeItem("access_token");
                        fetch(ApiEndpoints.JWT_REFRESH, {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${refresh_token}`
                            }
                        }).then(response => {
                            localStorage.removeItem("refresh_token");
                            if (response.ok) {
                                console.log("Valid refresh token");
                                return response.json();
                            }
                            throw Error("Invalid refresh token");
                        }).then(data => {
                            console.log("Refreshing tokens");
                            localStorage.setItem('access_token', data.access_token);
                            localStorage.setItem('refresh_token', data.refresh_token);
                            const user = JSON.parse(atob(data.access_token.split('.')[1]));
                            localStorage.setItem('user_role', user.sub.role);
                        }).catch((error) => {
                            console.log("Error while refreshing the refresh_token", error);
                        });
                    }
                }).catch((error) => {
                    console.log("Error while validating the access token ", error);
                });
            }
        }, [navigate]);

        return <Component {...props} />;
    };
}

export default validateToken;
