import Repo from '../assets/repo.svg';
import styles from './overview-element.module.css';

interface OverviewItem {
  title: string;
  description: string;
}

interface OverviewSection {
  name?: string;
  items: OverviewItem[];
}

export const OverViewElement = ({ sections }: { sections: OverviewSection[] }) => (
  <ul>
    {sections.map((section, key) => (
      <li key={key}>
        <div className={styles.subheading}>{section.name}</div>
        <div className={styles.linklist}>
          {section.items.map((item, itemKey) => (
            <a
              key={itemKey}
              className={styles.linkItem}
              href="https://storybook.js.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Repo} alt="repo" />
              <span>
                <strong>{item.title}</strong>
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </li>
    ))}
  </ul>
);
