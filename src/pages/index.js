import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Bricolib est très visité en ce moment et nous limitons le nombre de visiteurs sur la plateforme. Pour ne pas rater votre place, inscrivez-vous sur ce formulaire :  
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <iframe width="540" height="305" src="https://fece86da.sibforms.com/serve/MUIFALCEOjJcFELySrQQLJAmJhKErRz3oFvIh2cysOUw5ZEY-byALLDuZyTMn2DAx-KEJvFevRbwou1mpueFqAjap5KQptrjD-RhkBaknsaYOtd_p5vLMGF4kIBHh6NA756fak3h92Y1xwVYKYEGjSjYubQbt7SO3EOEQzwUOq5aRUMKLgTAsClgPMJkadyoYYpzSV-gHMfGmX9r" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
