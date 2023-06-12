import Home from '@/views/Home';
import Following from '@/views/Following';

const publicRoutes = [
    {path:"/", component:Home},
    {path:"/following", component:Following},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
