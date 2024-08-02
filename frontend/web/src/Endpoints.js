class RouteEndpoints {
    static LANDING_PAGE = Object.freeze("/");
    static FEATURES_PAGE = Object.freeze("/features");
    static CONTACT_PAGE = Object.freeze("/contact");
    static ABOUT_PAGE = Object.freeze('/about');
    static PRICING_PAGE = Object.freeze('/pricing');
    static AUTHENTICATION_PAGE = Object.freeze('/auth');
    static TERMS_PAGE = Object.freeze('/terms');
    static PRIVACY_POLICY_PAGE = Object.freeze('/privacy-policy');
}
class ApiEndpoints {
    static ALL_TEAM_MEMBERS = Object.freeze("/api/team/all");
    static USER_LOGIN = Object.freeze("/auth/login");
    static USER_LOGOUT = Object.freeze("/auth/logout");
    static JWT_REFRESH = Object.freeze("/jwt/refresh");
    static ADMIN_HOME = Object.freeze("/admin");
}

export { ApiEndpoints, RouteEndpoints };
