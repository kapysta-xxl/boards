import { BOARDS_ROUTE, TODO_ROUTE, CREATE_ROUTE } from './constants';

import BoardsPage from '../pages/BoardsPage';
import CreatePage from '../pages/CreatePage';
import TodoPage from '../pages/TodoPage';

export const routes = [
  {
    path: BOARDS_ROUTE,
    Component: BoardsPage,
    title: 'issue Boards',
  },
  {
    path: TODO_ROUTE + '/:id',
    Component: TodoPage,
    title: 'issue',
  },
  {
    path: CREATE_ROUTE,
    Component: CreatePage,
    title: 'Create',
  },
  {
    path: '*',
    Component: BoardsPage,
    title: 'issue Boards',
  },
];
