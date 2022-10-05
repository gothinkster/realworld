import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h2 className="hero__title">
                    It's all about building real world, production ready apps.
                </h2>
                <section className="introduction-container">
                    <img className="introduction-logo" src={useBaseUrl('/img/realworld-logo.png')} alt=""/>
                    <div>
                        <p className="introduction-content">
                            While most "todo" demos provide an excellent cursory glance at a framework's capabilities,
                            they
                            typically don't convey the knowledge & perspective required to actually build real
                            applications
                            with it. That's why we, with the help of open source experts, design and serve as exemplary
                            real world applications for each framework.
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--primary button--lg"
                                to="https://demo.realworld.io">
                                discover our demo
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome on ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
        </Layout>
    );
}
