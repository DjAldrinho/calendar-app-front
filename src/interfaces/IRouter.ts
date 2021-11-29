interface IRouter {
    isAuthenticated?: boolean;
    component: any,
    path?: string;
    exact?: any,
}

export default IRouter;
