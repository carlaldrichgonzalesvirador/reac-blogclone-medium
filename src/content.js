import React from "react";

import imageFirst from "./assets/image/firstPicture.png";
import imageSecond from "./assets/image/secondPicture.png";
import imageThird from "./assets/image/thirdPicture.png";
import imageFourth from "./assets/image/fourthPicture.png";
import imageFifth from "./assets/image/fifthPicture.png";
import imageSixth from "./assets/image/sixthPicture.png";
import imageSeventh from "./assets/image/seventhPicture.png";
import imageEight from "./assets/image/eightPicture.png";
import imageNinth from "./assets/image/ninthPicture.png";
import imageTenth from "./assets/image/tenthPicture.png";

import ContentSection from "./contentSection";

const contentComponent = [
  {
    title: "1. Can I Use",
    paragraph: 1,
    description:
      " If youve ever wondered about browser compatibility for any web APIs(e.g.: local storage), Can I use is the place to go. It offers updated support tables to determine the support of APIs for desktop and mobile browsers.",
    image: imageSecond
  },

  {
    title: "2. Unminify",
    paragraph: 2,
    description:
      "Unminify.com is a free online tool to unminify (unpack, deobfuscate) JavaScript, CSS, and HTML code, making it readable and pretty. It’s one of the most-used websites for code beautification.",
    description2:
      "Finding it hard to read someone’s code with no indentation or a file that contains only one line of unreadable code? Just copy-paste your code to Unminify and make it readable in less than a second.",
    image: imageThird
  },

  {
    title: "3. Compressor ",
    paragraph: 2,
    description:
      " Image sizes can be a major factor that determines the load time of your website.",
    description2: "Compressor.io is an online tool for reducing the size of your images without losing image quality. The tool is so good that there is almost no difference before and after compression of the image.",
      image: imageFourth 
  },

  {
    title: "4. Cloudcraft ",
    paragraph: 2,
    description:
      " Cloudcraft helps you design and budget your cloud. It has a very cool drag and drop interface to create 3D diagrams, by connecting different cloud infrastructure services (currently only for AWS).",
    description2: "Here’s a list of online tools that can come in handy for any developer out there (sorted in no particular order).",
      image: imageFifth 
  },

  {
    title: "5. Repl.it ",
    paragraph: 2,
    description: "Repl.it is the perfect online IDE that you have been looking for, all those years. You can boot any programming environment for your favorite language or tech stack in less than two seconds.",
    description2: "It supports all modern languages such as Python, Kotlin, Ruby, and JS. You can install libraries or packages and use them directly, without having to download or manage them.",
    description3: "You can share your code directly by sharing the repl.it link and also embed a repl.it for your users to interact with the code.",
    image: imageSixth
  },

  {
    title: "6. RequestBin ",
    paragraph: 2,
    description: "RequestBin gives you an instant HTTP endpoint that will collect all the requests sent so that you can interpret them easily to check and validate data.",
    description2: "It can be really useful when you have to debug webhook requests from various websites and you don’t know the exact structure or type of data that you might receive.",
    image: imageSeventh
  },

  {
    title: "7. Web Code",
    paragraph: 2,
    description: "Web Code is one of the best code generators out there. You can generate code for various basic and advanced needs by just entering your requirements",
    description2: "This is very useful for web developers who are not familiar with playing around with HTML and CSS.",
    image: imageEight
  },

  {
    title: "8. BundlePhobia",
    paragraph: 2,
    description: "Ever since modern front-end frameworks have come into the picture, people have wanted to keep their bundle size as low as possible to reduce page load time for users.",
    description2: "BundlePhobia helps you analyze how much size an npm package can add to your project.",
    description3: "You can upload your package.json file directly to the website to get an analysis of all the packages in the project or search for individual package details.",
    image: imageNinth
  },

  {
    title: "9. Fingerprint.js",
    paragraph: 2,
    description: "Been there, done that. Getting a list of unique identifiers from browsers through a website is no easy task.",
    description2: "Fortunately, this awesome library produces a distinctive browser identifier without the use of cookies or any data that a malicious user can reset readily. It quickly extracts numerous properties from a web browser, which can be used separately, or to create a hash which can be used to identify a unique user.",
    description3: "It’s the closest replacement to device UUID on a mobile devic, that you can get for your web project. You can use it over CDN or install it using the npm package.",
    image: imageTenth
  },

];

const content = props => {
  return (
    <div style={{ padding: "100px" }}>
      <div style={{ padding: "100px" }}>
        <div style={{ padding: "100px" }}>
          <h1>
            Developer Tools to Increase Your <br />
            Productivity
          </h1>

          <p style={{ color: "grey" }}>9 tools that’ll make your life easier</p>
        </div>

        <div style={{ padding: "100px" }}>
          <img src={imageFirst} width="100%" height="50%" />
          <p>
            The internet is not just here to help you learn how to code, there
            are a lot of useful online tools that can help you during various
            stages of development and save you precious time spent on each task.
            <br />
            <br />
            Here’s a list of online tools that can come in handy for any
            developer out there (sorted in no particular order).
          </p>

          {contentComponent.map(function(item, index) {
            return (
              <ContentSection
                title={item.title}
                description={item.description}
                description2={item.description2}
                description3={item.description3}  // reusable code
                image={item.image}
              />
            );
          })}

        </div>
      </div>
    </div>
  );
};
export default content;
