import { Meta, StoryFn } from '@storybook/react';

import { decorators } from 'src/components/providers/StorybookProvider';

const meta: Meta = {
  title: 'Texts',
  decorators,
};

export default meta;

type Styles = {
  style: string;
  class: string;
  description: string;
  backgroundColor?: string;
};

const generalStyles: Styles[] = [
  {
    style: '.title',
    class: 'title',
    description: 'Title: lorem ipsum dolor',
  },
  {
    style: '.subtitle',
    class: 'subtitle',
    description: 'Subtitle: lorem ipsum dolor',
  },
  {
    style: '.text',
    class: 'text',
    description:
      'Text: lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    style: '.subtext',
    class: 'subtext',
    description:
      'Subtext: lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

const additionalStyles: Styles[] = [
  {
    style: '.text-style-dark-gray',
    class: 'text text-style-dark-gray',
    description: 'Changes color to dark gray',
  },
  {
    style: '.text-style-pale',
    class: 'text text-style-pale',
    description: 'Changes color to dark pale',
  },
  {
    style: '.text-style-white',
    class: 'text text-style-white',
    backgroundColor: 'var(--COLOR_ARTICLES)',
    description: 'Changes color to dark white',
  },
  {
    style: '.text-style-red',
    class: 'text text-style-red',
    description: 'Changes color to dark red',
  },
  {
    style: '.text-style-system-blue',
    class: 'text text-style-system-blue',
    description: 'Changes color to dark blue',
  },
  {
    style: '.text-style-uppercase',
    class: 'text text-style-uppercase',
    description: 'Transforms text to uppercase',
  },
  {
    style: '.text-style-centered',
    class: 'text text-style-centered',
    description: 'Aligns text to the center',
  },
];

const RenderTable: React.FC<{ styles: Styles[] }> = ({ styles }) => (
  <>
    {styles.map((item) => (
      <li className="sb-table-row" key={item.style}>
        <div className="sb-table-column_left">
          <p>{item.style}</p>
        </div>
        <div className="sb-table-column_right">
          <p
            className={item.class}
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.description}
          </p>
        </div>
      </li>
    ))}
  </>
);

export const TextStyles: StoryFn = () => (
  <>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <RenderTable styles={generalStyles} />

      <li
        style={{
          backgroundColor: 'var(--COLOR_SUBTEXT)',
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--COLOR_STROKE_LIGHT)',
        }}
      >
        <p className="subtitle text-style-white">Additional classes</p>
      </li>

      <RenderTable styles={additionalStyles} />
    </ul>
  </>
);
