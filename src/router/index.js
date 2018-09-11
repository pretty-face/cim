/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 17:42:04
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:58:45
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import User from '../views/user/User'

Vue.use(Router)

export const constantRouterMap = [{
        path: '',
        component: Layout,
        redirect: 'user/login',
        hidden: false,
        children: [{
            path: "home",
            component: () =>
                import ("@/views/dashboard/index"),
            name: "dashboard",
            meta: {
                title: "首页",
                icon: "el-icon-location"
            }
        }]
    },
    {
        path: '/user',
        component: User,
        redirect: 'noredirect',
        hidden: true,
        name: "",
        meta: {
            title: "",
            icon: ""
        },
        children: [{
                path: "login",
                component: () =>
                    import ("@/views/user/components/Login"),
                name: "login",
                hidden: true,
                meta: {
                    title: "登录",
                    icon: "el-icon-menu"
                }
            },
            {
                path: "register",
                component: () =>
                    import ("@/views/user/components/Register"),
                name: "register",
                hidden: true,
                meta: {
                    title: "注册",
                    icon: "el-icon-menu"
                }
            },
            {
                path: "forget",
                component: () =>
                    import ("@/views/user/components/ForgetPass"),
                name: "forgetPass",
                hidden: true,
                meta: {
                    title: "忘记密码",
                    icon: "el-icon-menu"
                }
            }
        ]
    },
    {
        path: '/scan',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "",
        meta: {
            title: "扫描",
            icon: ""
        },
        children: [{
            path: "",
            component: () =>
                import ("@/views/scan/scan"),
            name: "scan",
            hidden: false,
            meta: {
                title: "扫描",
                icon: "el-icon-menu"
            }
        }]
    },
    {
        path: '/monitor',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "",
        meta: {
            title: "监控",
            icon: ""
        },
        children: [{
            path: "",
            component: () =>
                import ("@/views/monitor/monitor"),
            name: "monitor",
            hidden: false,
            meta: {
                title: "监控",
                icon: "el-icon-document",
            }
        }]
    },
    {
        path: '/report',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "report",
        meta: {
            title: "报告",
            icon: "el-icon-document"
        },
        children: [{
            path: "monitorReport",
            component: () =>
                import ("@/views/report/MonitorReport"),
            name: "monitorReport",
            hidden: false,
            meta: {
                title: "监控报告",
                icon: "el-icon-document"
            }
        }, {
            path: "scanReport",
            component: () =>
                import ("@/views/report/CertReport"),
            name: "scanReport",
            hidden: false,
            meta: {
                title: "证书报告",
                icon: "el-icon-document"
            }
        }, {
            path: "/ipInfo",
            component: () =>
                import ("@/views/report/IpInfo"),
            name: "ipInfo",
            hidden: true,
            meta: {
                title: "ip信息",
                icon: "el-icon-document"
            }
        }]
    },
    {
        path: '/order',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "order",
        meta: {
            title: "订单",
            icon: "el-icon-document"
        },
        children: [{
            path: "myOrder",
            component: () =>
                import ("@/views/order/myOrder"),
            name: "myOrder",
            hidden: false,
            meta: {
                title: "我的订单",
                icon: "el-icon-document"
            }
        }, {
            path: "",
            component: () =>
                import ("@/views/order/myCert"),
            name: "myCert",
            hidden: false,
            meta: {
                title: "我的证书",
                icon: "el-icon-document"
            }
        }]
    },
    {
        path: '/server',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "",
        meta: {
            title: "服务器",
            icon: ""
        },
        children: [{
            path: "",
            component: () =>
                import ("@/views/server/server"),
            name: "server",
            hidden: false,
            meta: {
                title: "服务器",
                icon: "el-icon-setting"
            }
        }]
    },
    {
        path: '/404',
        component: () =>
            import ("@/views/errorPage/404"),
        hidden: true
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]
export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})