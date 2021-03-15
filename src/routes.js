import loadable from '@loadable/component';

const CardContainer = loadable(() => import('./components/Card/CardContainer'));
const Post = loadable(() => import('./components/Post/Post'));

const routes = [
    { path: "/", exact: true, component: CardContainer },
    { path: "/:markdown", component: Post }
];

export default routes;
  