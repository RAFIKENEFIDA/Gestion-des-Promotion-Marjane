export default class ajoutePromotion  {
  
    static getHtml() {
        return `
        <div class="container-form-dashboard">
              <h4>Ajoute une promotion</h4>

              <div class="input-login">
              <div class="label-pour-input">
                <label for="nom">Nom de la promotion</label><span>*</span>
              </div>
              <input type="nom" id="nom" placeholder="nom" />
              <p class="error-nom" style="color: red"></p>
            </div>

         
    

            <div class="input-login">
            <div class="label-pour-input">
            <label for="categorie"> choix une categorie</label><span>*</span>
            </div>
             <select name="pets" id="categorie">
             <option value="">--Choisir une categorie-</option>
             <option value="dog">multimedia</option>
             <option value="cat">sport</option>
               </select>
            </div>  

            
            <button type="click" id="button-ajoute-responsable-rayon" >Ajouter la promotion</button>
             
             </div>
        `;
    }
}