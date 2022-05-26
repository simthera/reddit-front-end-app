/*
 *
 * Home
 *
 */

import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../../components/header";
import { PAGE_TITLE_HOME } from "../../utils/constants";
import Subshreddits from "../../components/subshreddits";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ResponseData {
  data: {
    children: [
      {
        data: {
          title: string;
          display_name_prefixed: string;
          public_description: string;
          created: string;
          banner_img: string;
        };
      }
    ];
  };
}

interface Data {
  data: {
    title: string;
    display_name_prefixed: string;
    public_description: string;
    created: string;
    banner_img: string;
  };
}

const Home: FC = () => {
  const [posts, setPosts] = useState<Data[]>();
  const history = useHistory();

  const handleApiCall = async () => {
    const response = await fetch(
      "https://www.reddit.com/subreddits/search.json?q=trending_subreddits"
    );
    const finalData: ResponseData = await response.json();
    console.log(finalData);

    if (finalData && finalData.data && finalData.data.children) {
      return setPosts(finalData.data.children);
    }
  };
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleLearnMore = (selectedData: Data) => {
    history.push("/post/details", selectedData);
  };

  const handleGoHome = () => {
    history.push("/");
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>

      <Header title={PAGE_TITLE_HOME} onGoHome={handleGoHome} />

      {posts &&
        posts.length > 0 &&
        posts.map(
          (
            {
              data: {
                title,
                display_name_prefixed,
                public_description,
                created,
                banner_img,
              },
            },
            index
          ) => (
            <Subshreddits
              key={index}
              title={title}
              display_name_prefixed={display_name_prefixed}
              public_description={public_description}
              created={created}
              handleLearnMore={handleLearnMore}
              banner_img={banner_img}
            />
          )
        )}
      {posts && !posts && <h2>Sorry, No subs for you</h2>}
    </div>
  );
};

export default Home;
