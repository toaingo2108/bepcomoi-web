"use client";

import Wrapper from "@/components/global/Wrapper";
import React from "react";

const BlogsPage = () => {
  if (process.env.NODE_ENV === "development") {
    return <></>;
  }

  return (
    <Wrapper className="py-10">
      <div className="flex gap-4 justify-center flex-wrap">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid028giwd3ujwp4ktTDZP2x9asXmK845YxJEkjo4wUbjXyw6xnZ3cdLfUp2GmSNN8TM4l%26id%3D61569239116841&width=552&show_text=true&appId=590134493394375&height=679"
          width="552"
          height="679"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02DhDoaSawtTfxFmcr1ThDj5kPfvgU5rQJf7yRESeGgci83GmBttA6DbVSS4KfLB3hl%26id%3D61569239116841&width=500&show_text=true&appId=590134493394375&height=796"
          width="500"
          height="796"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid06gdgs8cAzxHmbwy9nunLvD6uhNasYV2cLrCdNBaBCGJxnsQxZZxiJnwqXHqMcUGHl%26id%3D61569239116841&width=500&show_text=true&appId=590134493394375&height=709"
          width="500"
          height="709"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0noMYxCshkcExXvqsH2RjfwtcM6Wa3zZ1ZkqYkSGTeycskmMup59BosYCbzntpYBdl%26id%3D61569239116841&width=500&show_text=true&appId=590134493394375&height=699"
          width="500"
          height="699"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default BlogsPage;
