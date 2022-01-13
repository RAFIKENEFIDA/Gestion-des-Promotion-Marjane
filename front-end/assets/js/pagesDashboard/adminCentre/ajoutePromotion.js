export default class ajoutePromotion  {
  
    static getHtml() {
        return `
        <div class="container-form-dashboard">
              <h4>Ajoute une promotion</h4>

              <div class="input-login">
              <div class="label-pour-input">
                <label for="nom">Nom de la promotion</label><span>*</span>
              </div>
              <input type="nom" id="nomPromotion" placeholder="nom" />
              <p class="error-nom" style="color: red"></p>
            </div>

            
            <div class="input-login">
            <div class="label-pour-input">
            <label for="categorieProduit">  Categorie</label><span>*</span>
            </div>
             <select name="pets" id="categorieProduit">
   
               </select>
            </div>  


            <div class="input-login">
            <div class="label-pour-input">
            <label for="produit">  Produit</label><span>*</span>
            </div>
             <select name="pets" id="produit">
            
               </select>
            </div>  

            

            <div class="input-login">
            <div class="label-pour-input">
            <label for="expiration">   Date d'expiration </label><span>*</span>
            </div>
             <select name="pets" id="expiration">
             <option value="">choix une date d'expiration</option>
             <option value="7">7</option>
             <option value="15">15</option>
             <option value="20">20</option>
             
               </select>
            </div>  

            
            <div class="input-login">
            <div class="label-pour-input">
              <label for="pourcentagePromo">Le pourcentage de la promotion </label><span>*</span>
            </div>
            <input type="number" id="pourcentagePromo" placeholder="Pourcentage en %"  max="100"  />
            <p class="error-nom" style="color: red"></p>
             </div>

                  
            <div class="input-login">
            <div class="label-pour-input">
              <label for="pourcentagePromo">Les points de fidilite </label><span>*</span>
            </div>
            <input type="number" id="pourcentagePointsFidilite" placeholder="Points de fidelité en %"  max="100"  />
            <p class="error-nom" style="color: red"></p>
             </div>
          
            <button type="click" id="button-ajoute-promotion" >Ajouter la promotion</button>
             
             </div>
        `;
    }
}