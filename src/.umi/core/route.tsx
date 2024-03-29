// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"login","path":"/user/login","parentId":"1","id":"2"},"3":{"path":"/welcome","name":"welcome","icon":"smile","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/schemes","name":"Schemes","icon":"smile","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/user-lists","name":"UsersLIst","icon":"smile","parentId":"ant-design-pro-layout","id":"5"},"6":{"path":"/new-user","name":"New User","icon":"smile","parentId":"ant-design-pro-layout","id":"6"},"7":{"path":"/admin","name":"admin","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"7"},"8":{"path":"/admin","redirect":"/admin/sub-page","parentId":"7","id":"8"},"9":{"path":"/admin/sub-page","name":"sub-page","parentId":"7","id":"9"},"10":{"name":"list.table-list","icon":"table","path":"/list","parentId":"ant-design-pro-layout","id":"10"},"11":{"path":"/","redirect":"/welcome","parentId":"ant-design-pro-layout","id":"11"},"12":{"path":"*","layout":false,"id":"12"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Welcome" */'@/pages/Welcome.tsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__Schemes" */'@/pages/Schemes.tsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__UsersList" */'@/pages/UsersList.jsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__CreateUser" */'@/pages/CreateUser.jsx')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import( './EmptyRoute')),
'9': React.lazy(() => import(/* webpackChunkName: "p__Admin" */'@/pages/Admin.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__TableList__index" */'@/pages/TableList/index.tsx')),
'11': React.lazy(() => import( './EmptyRoute')),
'12': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/home/makini/Desktop/react-antdPro/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/home/makini/Desktop/react-antdPro/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
