// blog content 

import React from 'react';
import { PortableText } from '@portabletext/react';
import { SectionContainer } from '@/components/utils';

interface BlockContentProps {
  body?: any; // The block content from Sanity
}

const BlockContentComponent: React.FC<BlockContentProps> = ({ body }) => {
  return (
    <SectionContainer className='lg:max-w-[70%]'>
        <div className="text-justify !leading-6 !text-md !lg:text-base !flex !flex-col !gap-3">
        <PortableText
            value={body}
            components={{
            block: {
                normal: ({ children }) => (
                <p
                    style={{
                    textAlign: "justify",
                    lineHeight: "1.5rem",
                    fontSize: ".9rem"
                    }}
                >
                    {children}
                </p>
                ),
            },
            types: {
                image: ({ value }) => (
                <img src={value.asset.url} alt={value.alt || 'Image'} />
                ),
            },
            marks: {
                link: ({ children, value }) => (
                <a href={value.href} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
                ),
            },
            }}
        />
        </div>
    </SectionContainer>

  );
};

export default BlockContentComponent;