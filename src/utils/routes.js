import { BOARDS_ROUTE, TODO_ROUTE, CREATE_ROUTE, PAGE_404 } from './constants';

import BoardsPage from '../pages/BoardsPage';
import CreatePage from '../pages/CreatePage';
import TodoPage from '../pages/TodoPage';
import Page404 from '../pages/Page404';

export const routes = [
    {
        path: BOARDS_ROUTE,
        Component: BoardsPage
    },
    {
        path: TODO_ROUTE + "/:id",
        Component: TodoPage
    },
    {
        path: CREATE_ROUTE,
        Component: CreatePage
    },
    {
        path: PAGE_404,
        Component: Page404
    }
]