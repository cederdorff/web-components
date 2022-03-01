class VCard extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });

        this.heading = this.getAttribute("heading");
        this.initials = this.getAttribute("initials");
        this.position = this.getAttribute("position");
        this.image = this.getAttribute("image");

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
      <style>
        img{ 
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        article{
          padding: 1em;
        }
        h2{
          font-weight: 400;
          letter-spacing: 0.5px;
        }
      </style>

      <article>
        <img src="${this.image}">
        <h2>${this.heading}</h2>
        <p>${this.position}</p>
        <p><a href="mailto:${this.getMail()}">${this.getMail()}</a></p>
      </article>
      `;
    }

    getMail() {
        return `${this.initials}@eaaa.dk`;
    }
}

customElements.define("v-card", VCard);
