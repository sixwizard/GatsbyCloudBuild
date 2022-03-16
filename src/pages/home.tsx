import * as React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query HomeQuery {
    contentfulLandingPage(name: { eq: "Demo Home" }) {
      name
      seoDescription {
        seoDescription
      }
      seoTitle
      widgets {
        componentId
        id
        name
      }
    }
  }
`;

const HomePage = (props: any) => {
    const {
        contentfulLandingPage: {
            seoTitle
        },
    } = props.data;

    return (
        <>
            <div id="top-section">
                {seoTitle}{`  time stamp : ${new Date()}`}
            </div>
        </>
    );
};

export default HomePage;
