import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShareButtons.css";

import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

const ShareButtons = ({ imageUrl, isDrawButtonLoading }) => {
  const [url, setUrl] = useState(imageUrl);

  // Shortening the URL to share to Whatsapp
  useEffect(() => {
    axios
      .get(`https://tinyurl.com/api-create.php?url=${url}`)
      .then((response) => setUrl(response.data))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <div class="shareButtonsMain">
      <p class="shareButtonsDesc">Share your artwork: </p>
      <div class="shareButtons">
        {/* Facebook share button */}
        <FacebookShareButton
          url={url}
          hashtag="#createartwithai"
          disabled={isDrawButtonLoading}
        >
          <FacebookIcon size={42} round />
        </FacebookShareButton>

        {/* Whatsapp share button */}
        <WhatsappShareButton
          url={url}
          title="Check out my artwork created using 'Create Art With AI'! (https://ai-creates-art.web.app/) here"
          separator=" :: "
          disabled={isDrawButtonLoading}
        >
          <WhatsappIcon size={42} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
