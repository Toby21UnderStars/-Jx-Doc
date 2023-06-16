import React, { useEffect } from 'react';
import { useLatestVersion } from '@docusaurus/plugin-content-docs/lib/client/index.js';
import { useHistory } from '@docusaurus/router';

export default function Home(): JSX.Element {
  const { mainDocId } = useLatestVersion(undefined);
  const history = useHistory();

  useEffect(() => {
    if (mainDocId) {
      history.replace(mainDocId);
    }
  }, []);

  return null;
}
