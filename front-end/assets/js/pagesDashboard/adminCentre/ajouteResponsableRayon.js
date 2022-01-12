export default class ajouteAdmin {
  
    static getHtml() {
        return `
             <div class="container-form-dashboard">
              <h4>Ajoute un responsable d'un rayon</h4>

              <div class="input-login">
              <div class="label-pour-input">
                <label for="nom">Nom</label><span>*</span>
              </div>
              <input type="nom" id="nom" placeholder="nom" />
              <p class="error-nom" style="color: red"></p>
            </div>

         
            <div class="input-login">
            <div class="label-pour-input">
              <label for="prenom">prenom</label><span>*</span>
            </div>
            <input type="prenom" id="prenom" placeholder="prenom" />
            <p class="error-prenom" style="color: red"></p>
          </div>


              <div class="input-login">
              <div class="label-pour-input">
                <label for="email">Email</label><span>*</span>
              </div>
              <input type="email" id="email" placeholder="Email" />
              <p class="error-email" style="color: red"></p>
            </div>

            <div class="input-login">

            <div class="label-pour-input">
            <label for="centre"> choix une categorie</label><span>*</span>
          </div>

             <input list="centres" name="centre" id="categorie" placeholder="Categorie">
            <datalist id="centres">
              <option value="multimedia">
              <option value="sport">
            
            </div>  

            <button type="click" id="button-ajoute-responsable-rayon" >Ajouter</button>
             
             </div>
        `;
    }
}