class TeacherCard extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });

        this.name = this.getAttribute("name");
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
          padding: 1.5em;
          box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
        }
        
        h2{
          font-weight: 400;
          letter-spacing: 0.5px;
        }
      </style>

      <article>
        <img src="${this.image}" alt="${this.name}">
        <h2>${this.name}</h2>
        <p>${this.position}</p>
        <p><a href="mailto:${this.getMail()}">${this.getMail()}</a></p>
      </article>
      `;
    }

    getMail() {
        return `${this.initials}@eaaa.dk`;
    }
}

customElements.define("teacher-card", TeacherCard);
