export const topNavAllItems = {
    "Help" : {
        title: "Help",
        target: "react",
        path: "/help"
    }
};

export const mainNavAllItems = {
    "Home" : {
        title : "Home",
        target: "react",
        path: "/",
        icon: "home",
        subNavItems : []
    },
    "Mission" : {
        title : "Mission",
        target: "react",
        path: ({loginname}) => `/routes/balance/${loginname}`,
        icon: "category",
        subNavItems : []
    },
    "Today" : {
        title : "Route Planning",
        target: "react",
        path: ({loginname}) => `/routes/today/${loginname}`,
        icon: "assignment",
        subNavItems : []
    },
    "Yesterday" : {
        title : "Route Analysis",
        target: "react",
        path: ({loginname}) => `/routes/yesterday/${loginname}`,
        icon: "assessment",
        subNavItems : []
    },
/*
    "Attachments" : {
        title : "Attachments",
        target: "react",
        path: "/attachments",
        icon: "attach_file",
        subNavItems : []
    },
    "Geohashes" : {
        title : "Geohashes",
        target: "react",
        path: "/geohashes",
        icon: "grid_on",
        subNavItems : []
    }
*/
};
       
