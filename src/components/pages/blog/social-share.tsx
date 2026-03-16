"use client"; 

import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const SocialShare = ({ slug, ttle, categories }: {slug: string, ttle: string, categories: string[]}) => {
  const url = `https://oceannurturenetwork.org/blogs/${slug}`;
  const title = ttle;
  const hashtags = categories; 

  return (
    <div className="social-share-buttons flex items-center gap-2">
      <EmailShareButton subject={title} body={url} url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>

      <FacebookShareButton url={url} hashtag={`#${hashtags.join(' #')}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title} summary={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title} hashtags={hashtags}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
