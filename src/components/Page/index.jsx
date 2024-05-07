import { useEffect } from 'react';
import PageContent from '../pageContent';

import { capitalizeFirstLetter } from '../../utils/helper.js';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;
