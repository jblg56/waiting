import React, { useState, useEffect } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const IndexPage = () => {
  const [formHtml, setFormHtml] = useState("");

  useEffect(() => {
    const fetchFormHtml = async () => {
      try {
        const response = await fetch("https://fece86da.sibforms.com/serve/MUIFALCEOjJcFELySrQQLJAmJhKErRz3oFvIh2cysOUw5ZEY-byALLDuZyTMn2DAx-KEJvFevRbwou1mpueFqAjap5KQptrjD-RhkBaknsaYOtd_p5vLMGF4kIBHh6NA756fak3h92Y1xwVYKYEGjSjYubQbt7SO3EOEQzwUOq5aRUMKLgTAsClgPMJkadyoYYpzSV-gHMfGmX9r");
        const html = await response.text();
        setFormHtml(html);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };

    fetchFormHtml();
  }, []);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Bricolib est très visité en ce moment et nous limitons le nombre de visiteurs sur la plateforme. Pour ne pas rater votre place, inscrivez-vous sur ce formulaire : <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: formHtml }} />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/21FfqgGV10Y?si=88VLzi45JVEe90Zf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
