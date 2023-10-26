import React from 'react';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import ItemTile from '@components/ItemTile';
import useSiteMap from '@hooks/useSiteMap';
import * as styles from '@styles/pages/index.module.scss';
import PageHeader from '@components/PageHeader';
import ContentWrapper from '@components/ContentWrapper';
import { QuizAlert } from '@components/replacements';
import useSiteMetadata from '@hooks/useSiteMetaData';
import SEO from '@components/SEO';

const LandingPage = () => {
  const siteMap = useSiteMap();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader>{t('landingPageTitle')}</PageHeader>
      <ContentWrapper className={styles.content}>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{
            __html: marked.parse(t('landingPageContent'), { headerIds: false, mangle: false })
          }}
        />
        <h2>Modules</h2>
        <div className={styles.tileContainer}>
          {siteMap
            .filter(({ children = [] }) => children.length > 0)
            .map((item, index) => {
              const { children } = item;
              const lastUpdated = children.sort((a, b) => b.updated?.localeCompare(a.updated))[0];
              const timeNeeded = children.reduce((acc, curr) => acc + curr.timeToComplete, 0);

              return (
                <ItemTile
                  lastUpdated={lastUpdated?.updated}
                  timeNeeded={timeNeeded}
                  key={index}
                  {...item}
                  className={styles.tile}
                />
              );
            })}
        </div>
      </ContentWrapper>
    </>
  );
};

// SEO
export const Head = () => {
  const { title } = useSiteMetadata();
  return <SEO {...{ pathname: '/', title }} />;
};

export default LandingPage;
