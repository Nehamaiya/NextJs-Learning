import { Fragment } from 'react';
import { getFeaturedEvents } from '../aarpdata';
import EventList from '../components/events/event-list'

import Listsearch from '../components/events/listsearch'
function Home() {
    const featuredEvents = getFeaturedEvents();
  
    return (
      <Fragment>
          <Listsearch/>
        <EventList items={featuredEvents} />
      </Fragment>
    );
  }
  
  export default Home;