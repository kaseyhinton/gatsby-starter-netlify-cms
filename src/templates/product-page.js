import React from 'react';
import graphql from 'graphql';

export const ProductPageTemplate = ({image, title, heading, description}) => (
  <section className="section">
    <div className="container page-margin-top">
        <h2>
          {title}
        </h2>
        <div style={{
          backgroundImage: `url(${image})`
        }}></div>
        <div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
    </div>
  </section>
);

export default({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (<ProductPageTemplate
    image={frontmatter.image}
    title={frontmatter.title}
    heading={frontmatter.heading}
    description={frontmatter.description}/>);
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
      }
    }
  }
`;
