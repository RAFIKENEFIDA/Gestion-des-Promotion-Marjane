export default class responsableRayon  {
  
    static getHtml() {
        return `
        <div class="container-xl table-admin-centre">
        <div class="table-responsive">
            <div class="table-wrapper">

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>categorie</th>
                            <th>Actions</th>
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