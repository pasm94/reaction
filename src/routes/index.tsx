import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Pagination from '../pages/Pokemon/pagination';
import Performance from '../pages/Pokemon/performance';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/pokemon/pagination' component={Pagination} />
    <Route path='/pokemon/performance' component={Performance} />
  </Switch>
);

export default Routes;
