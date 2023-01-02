import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">
            It's all about building real world, production ready apps.
          </h2>
          <section className="introduction-container">
            <img className="introduction-logo" src={useBaseUrl('/img/realworld-logo.png')} alt="" />
            <div>
              <p className="introduction-content">
                While most "todo" demos provide an excellent cursory glance at a framework's
                capabilities, they typically don't convey the knowledge & perspective required to
                actually build real applications with it. That's why we, with the help of open
                source experts, design and serve as exemplary real world applications for each
                framework.
              </p>
              <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to="https://demo.realworld.io">
                  discover our demo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </header>
      <section className={styles.codebaseshowContainer}>
        <h2 className={styles.codebaseshowTitle}>More than 150 implementations already...</h2>
        <img
          className={styles.codebaseshowLogo}
          src={useBaseUrl('/img/codebaseshow-logo.png')}
          alt=""
        />
        <a className={styles.codebaseshowLink} href="https://codebase.show/projects/realworld">
          Discover them on CodebaseShow
        </a>
      </section>
      <section className={styles.wipContainer}>
        <h2 className={styles.wipTitle}>...and counting!</h2>
        <div className={styles.wipListContainer}>
          <div>
            <p className={styles.wipDescription}>
              Discover upcoming implementations from our community:
            </p>
            <ul className={styles.wipList}>
              <li>
                <a href="https://github.com/gothinkster/realworld/discussions/1009" target="_blank">
                  Spring Boot + Spring JPA + Vue3 + Vuex + Vite
                </a>
                by{' '}
                <a href="https://github.com/kkminseok" target="_blank">
                  minseokkang
                </a>
              </li>
              <li>
                <a href="https://github.com/gothinkster/realworld/discussions/1082" target="_blank">
                  Next.js 13+ & Server Components & Layouts & Streaming
                </a>
                by{' '}
                <a href="https://github.com/Dima-Abramenko" target="_blank">
                  Dmitry Abramenko
                </a>
              </li>
              <li>
                <a href="https://github.com/gothinkster/realworld/discussions/1047" target="_blank">
                  Actix + Tera + SQLx
                </a>
                by{' '}
                <a href="https://github.com/Bechma" target="_blank">
                  Bechma
                </a>
              </li>
              <li>
                <a href="https://github.com/gothinkster/realworld/discussions/963" target="_blank">
                  TypeScript + React + Recoil
                </a>
                by{' '}
                <a href="https://github.com/sukam09" target="_blank">
                  Seungwon Lee
                </a>
              </li>
              <li>
                <a href="https://github.com/gothinkster/realworld/discussions/1010" target="_blank">
                  .NET implementation - JS, AWS, Pulumi
                </a>
                by{' '}
                <a href="https://github.com/JustJordanT" target="_blank">
                  Jordan Taylor
                </a>
              </li>
            </ul>
          </div>
          <img className={styles.wipListImage} src={useBaseUrl('/img/spaceship.png')} alt="" />
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome on ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
