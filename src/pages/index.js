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
      {/* Début du formulaire Brevo */}
      <div class="sib-form" style={{ textAlign: "center", backgroundColor: "#EFF2F7" }}>
        <div id="sib-form-container" class="sib-form-container">
          <div
            id="sib-container"
            class="sib-container--large sib-container--vertical"
            style={{ textAlign: "center", backgroundColor: "rgba(255,255,255,1)", maxWidth: "540px", borderRadius: "3px", borderWidth: "1px", borderColor: "#C0CCD9", borderStyle: "solid" }}
          >
            <form id="sib-form" method="POST" action="URL_DE_VOTRE_FORMULAIRE">
              <div style={{ padding: "8px 0" }}>
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row ">
                      <label class="entry__label" style={{ fontWeight: 700, textAlign: "left", fontSize: "16px", fontFamily: "Helvetica, sans-serif", color: "#3c4858" }} for="EMAIL" data-required="*">
                        Veuillez renseigner votre adresse email pour vous inscrire
                      </label>

                      <div class="entry__field">
                        <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                      </div>
                    </div>

                    <label class="entry__error entry__error--primary" style={{ fontSize: "16px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949" }}></label>
                    <label class="entry__specification" style={{ fontSize: "12px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#8390A4", textAlign: "left" }}>
                      Veuillez renseigner votre adresse email pour vous inscrire. Ex. : abc@xyz.com
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div class="sib-optin sib-form-block">
                  <div class="form__entry entry_mcq">
                    <div class="form__label-row ">
                      <div class="entry__choice" style={{}}>
                        <label>
                          <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" />
                          <span class="checkbox checkbox_tick_positive" style={{ marginLeft: "" }}></span>
                          <span style={{ fontSize: "14px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#3C4858", backgroundColor: "transparent" }}>
                            <p>J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</p>
                          </span>
                        </label>
                      </div>
                    </div>
                    <label class="entry__error entry__error--primary" style={{ fontSize: "16px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949" }}></label>
                    <label class="entry__specification" style={{ fontSize: "12px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#8390A4", textAlign: "left" }}>
                      Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div class="sib-form__declaration" style={{ direction: "ltr" }}>
                  <div class="declaration-block-icon">
                    <svg class="icon__SVG" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      {/* Votre SVG */}
                    </svg>
                  </div>
                  <div style={{ fontSize: "14px", textAlign: "left", fontFamily: "Helvetica, sans-serif", color: "#687484", backgroundColor: "transparent" }}>
                    <p>
                      Nous utilisons Brevo en tant que plateforme marketing. En soumettant ce formulaire, vous acceptez que les données personnelles que vous avez fournies soient transférées à Brevo pour être traitées conformément à la politique de confidentialité de Brevo. <a href="https://www.brevo.com/fr/legal/privacypolicy/" target="_blank">Politique de confidentialité de Brevo</a>
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div class="sib-form-block" style={{ textAlign: "left" }}>
                  <button class="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: "16px", textAlign: "left", fontWeight: 700, fontFamily: "Helvetica, sans-serif", color: "#FFFFFF", backgroundColor: "#3E4857", borderRadius: "3px", borderWidth: "0px" }} form="sib-form" type="submit">
                    S'INSCRIRE
                  </button>
                </div>
              </div>
              <input type="text" name="email_address_check" value="" class="input--hidden" />
              <input type="hidden" name="locale" value="fr" />
              <input type="hidden" name="webform_id" value="webform_id" />
            </form>
          </div>
        </div>
      </div>
      {/* Fin du formulaire Brevo */}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
