import { FC } from 'react';

interface PageTitleProps {
  title: string;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <header className="text-black">
      <h1>{title}</h1>
    </header>
  );
};

export default PageTitle;
