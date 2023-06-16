import { useLatestVersion } from '@docusaurus/plugin-content-docs/lib/client/index.js';

export const useMainDocId = () => {
  const { mainDocId } = useLatestVersion(undefined);
  return mainDocId;
};
