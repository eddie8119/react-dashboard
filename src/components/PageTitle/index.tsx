import { FC } from 'react';

interface PageTitleProps {
  title: string;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h1 className="text-gray">{title}</h1>;
};

export default PageTitle;
