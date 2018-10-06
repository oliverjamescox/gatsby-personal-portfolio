import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from "gatsby"

import poundSign from '../images/general-icons/oc-poundsign.svg'
import customiseIcon from '../images/general-icons/oc-customisation.svg'
import monthlyCost from '../images/general-icons/oc-monthlycost.svg'
import wwwIcon from '../images/general-icons/oc-www.svg'
import wysiwyg from '../images/general-icons/oc-wysiwyg.svg'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="cs-body--background">
      
      
      <div className="cs--intro-block">
        <div className="intro-block--sec1">
          <div className="ib-sec1--category">
            Case Study
          </div>
          <div className="ib-sec1--title">
            Event web app
          </div>
          <div className="ib-sec1--subtitle">
            The cost of small bespoke web apps can widely vary in price, with monthly subscriptions and hosting costs. I helped address such pain points and created a statically generated app. Key features included the ability to gather RSVP responses, provide day information and an integrated image gallery.
          </div>
          <button className="ib-sec1--cta-btn">
            <a href="https://ryanandchristie.co.uk" target="_blank" rel="noopener noreferrer">View project &rarr; </a>
          </button>
        </div>
      </div>


      <div className="cs--skills-block">
        Built with GatsbyJS, hosted with Netlify.
      </div>


      <div className="cs--problem-block">
        <div className="problem-block--sec1">
          The need to create a cost effective solution with little to no overhead with customisability to satisfy personal requirements.
        </div>
        <div className="problem-block--sec2">
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
              <img className="general-icon" src={poundSign} alt="poundSign logo" />
            </div>
            <div className="pb-block--subheader">
              Running costs
            </div>
            <div className="pb-block--body">
              With the site going up prior to the wedding, an estimated monthly rolling cost just covering the hosting would accrue in the run up to the event. Beyond that if the site provides a gallery the hosting would need to run indefinitely unless moved to another solution.
            </div>
          </div>
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
              <img className="general-icon" src={customiseIcon} alt="customised logo" />
            </div>
            <div className="pb-block--subheader">
              Customisation
            </div>
            <div className="pb-block--body">
              A lot of the sites that take the hassle away from hosting and provide a platform to create a personal site are typically geared towards blogging and e-commerce. There are services specific to creating websites such as Riley &amp; Grey who offer bespoke site design but at a much higher monthly cost of $35.
            </div>
          </div>

        </div>
      </div>

      <div className="cs--findings-block">
        <div className="findings-block--sec1">
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              <img className="general-icon" src={wwwIcon} alt="world wide web icon" />
            </div>
            <div className="fb-sec1--block-copy">
              Personalising the site with a custom domain has an initial outlay and every year thereafter. Domain names of combined client names are reasonably priced due to the scarcity of demand.
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              <img className="general-icon" src={wysiwyg} alt="wysiwyg logo" />
            </div>
            <div className="fb-sec1--block-copy">
              WSIWYG builders that handle the hosting typically run a monthly fee, alternative options such as Wordpress can require separate hosting if not opting to host with their platform.
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              <img className="general-icon" src={monthlyCost} alt="Monthly cost logo" />
            </div>
            <div className="fb-sec1--block-copy">
              Exploring options such as Wix, Squarespace on the surface you would often have to pay a monthly fee for features you don’t necessarily need and can include ads unless you pay more.
            </div>
          </div>
        </div>
        <div className="findings-block--sec2">
          <div className="fb-sec2--conclusion">
            WSIWYG builders can get you up and running with ease but at a varying level of cost and may not offer the level of customisation required by the client.
          </div>
          <div className="fb-sec2--image">
            <Img fluid={data.image2.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          Based on findings the proposal is for a statically generated site that can be hosted for free on a cloud services such as Netlify. Negating the issue of monthly billing costs and continued site overhead.
        </div>
      </div>

      <div className="cs--explore-block">
        <div className="explore-block-sec1">
          <div className="eb-sec1-header">
            Exploring ideas about the big day and what’s important to the guests and the bridal party.
          </div>
          <div className="eb-sec1-subheader">
            The initial brief was to adopt the pre-existing styling from the save the date stationary and create a solution where guests could RSVP, read important information about the day and explore the possibility of image uploading.
          </div>
          <div className="eb-sec1-image">
          <Img fluid={data.image3.childImageSharp.fluid} />
          </div>
          <div className="eb-sec1-body">
            Started by exploring what information beyond those specified could elevate the app's usefulness and pre-emptively incorporate features that had yet to be realised. I looked into pre-existing solutions provided as a service and looked for examples of actual sites to draw insight into commonly requested and desirable features.
          </div>
        </div>
        <div className="explore-block-sec2">
          <div className="eb-sec2-image">
          <Img fluid={data.image5.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Building the wireframes</h2>
          <p>I had ideas of how I was going to design the app based around the existing stationary and made a habit of sketching by hand before moving to digital mock-ups.</p>
          <p>I used Adobe Illustrator to create the wireframes and prototypes. I use it everyday for work, so is extremely easy for me to create the visuals. The mock-ups were a great visual aid for the client, a lot of decisions and improvements were discussed with important information prioritised.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image7.childImageSharp.fluid} />
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Mapping the features &amp; interactions</h2>
          <p>Collated both as the app has only a few elements of interaction and mostly serves as a hub of information. With the ideas generated from previous stages I mapped out a feature flow chart. It served as blueprint for the app structure with each page broken down and going into all the details required for each page</p>
          <p>The interactions are only present on the index and photos page. The goal of the site besides providing information is for guests to easily correspond to the RSVP. The Instagram API is called on every page refresh and highlighted for visibility. Building a diagram helps me keep track of all the components and provides value when communicating the proposals to the client.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image1.childImageSharp.fluid} />
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Visual Design</h2>
          <p>I set up a Trello board (web-based project management app) to provide instant feedback with the design going through several iterations. Trello provided granular feedback and reduced time between client inputs.</p>
          <p>Below are some of the resulting visuals.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image8.childImageSharp.fluid} />
        </div>
      </div>

      <div className="cs--core-block">
        <div className="core-block-sec1">
          <div className="cb-sec1-heading">
            Conversation with the client enabled discussion and feedback on the proposed features, redefining and finalising the project deliverables.
          </div>
        </div>
      </div>

      <div className="cs--brand-block">
        <div className="brand-block--sec1">
          <div className="bb-sec1--slug">
            Key Feature
          </div>
          <div className="bb-sec1--title">
            Instagram Integration
          </div>
          <div className="bb-sec1--body">
            <p>One of the initial requirements was for the ability to upload images to the site and host them, the proposed solution instead uses the Instagram API to pull images from either a specific hashtag or user account.</p>
          </div>
          <div className="bb-sec1--quoteblock">
          Wedding parties are capturing their own images, with 60% of brides using social media on their wedding day, 76% taking a wedding selfie – affectionately coined the ‘welfie’, and an average of 3,400 photos being taken at each wedding by guests alone. 57% now use a wedding hashtag – an increase of over 40% from the year before.
          </div>
          <div className="bb-sec1--quoteblock-author">
            - bridebook.co.uk
          </div>
          <div className="bb-sec1--body">
            <p>Having all the guests upload their photos to the site; although possible would have created a poor user experience. Using Instagram and adding a hashtag has the images  pulled down in real time and the site can be used instead to check the collection of photos.</p>
          </div>
        </div>
        <div className="brand-block--sec2">
          <div className="bb-sec2--image">
            <Img fluid={data.image6.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image4.childImageSharp.fluid} />
        </div>
      </div>

      <div className="cs--feedback-block">
        <p>Oliver went above and beyond with our wedding website. From drafting out the initial pages to final detailing and revisions, he was helpful, knowledgeable and was able to take our input and weave it into exactly what we wanted. The resulting website was great - better than we were hoping for. The RSVP forms have allowed us to plan easily, and our guests kept commenting how nice it looked and how simple it was for them to respond.</p> 
        <p>I'd recommend Oliver's services to anyone. He delivered us a great website that we really felt a part of.</p>
        <p className="fb-block-sig">- Ryan Hunt</p>
      </div>

      <div className="cs--links-block">
        <button className="links--cta-btn">
          <a href="https://ryanandchristie.co.uk" target="_blank" rel="noopener noreferrer">View project &rarr; </a>
        </button>
      </div>

    </div>
  </Layout>
  
)

export default IndexPage

export const query = graphql`
  query cs1Query {
    image2: file(relativePath: { regex: "/rc--wix-pricing-table/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/rc-weddinginvite/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image5: file(relativePath: { regex: "/rc-mockups-alt/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image6: file(relativePath: { regex: "/rc-iphone-mockup2/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image4: file(relativePath: { regex: "/rc-room-mockup/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(relativePath: { regex: "/rc-feature-flowchart/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { regex: "/rc-wireframes/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { regex: "/rc-visual-designs/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }    
  }
`