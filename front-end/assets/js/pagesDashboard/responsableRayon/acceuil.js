export default class acceuil  {
  
    static getHtml() {
        return `
        <div class="container-xl table-admin-centre">
        <div class="table-responsive">
            <div class="table-wrapper">

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            
                            <th>Nom</th>
                            <th>Produit</th>
                            <th>Categorie</th>
                            <th>Status</th>
                            <th>Pourcentage</th>
                            <th>Pointfidelite</th>
                            <th>Quantite</th>
                            <th>Date de fin de la promotion</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                  
                    </tbody>
                </table>
            
        </div>   
        
        
     
      
      <div class="modal fade" id="modalValidPromotion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            <select class="form-select" id="selectPromo" aria-label="Default select example">
            <option selected>Choisir une option pour la promotion</option>
            <option value="invalider">Non Valider</option>
            <option value="valider"> Valider</option>
            
            </select>

            <div class="input-group mb-3" style="margin-top: 30px;">
           <span class="input-group-text" id="inputGroup-sizing-default">Commentaire</span>
            <input type="text" id="commentairePromo" class="form-control" aria-label="Laisser un commentaire" aria-describedby="inputGroup-sizing-default">
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary updateStatusPromo">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
        `;
    }
}