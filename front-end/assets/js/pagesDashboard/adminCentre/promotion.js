export default class promotion  {
  
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
                            <th>Commentaire</th>
                            <th>Quantite</th>
                            <th>Date de fin de la promotion</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                  
                    </tbody>
                </table>
            
        </div>        
    </div>
        `;
    }
}