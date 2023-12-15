// RenderHTMLContent.tsx

import React from 'react';

interface Props {
  body: string; 
}

const RenderHTMLContent: React.FC<Props> = ({ body }) => {
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
};

export default RenderHTMLContent;
