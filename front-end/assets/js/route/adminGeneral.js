import acceuil from "../pagesDashboard/adminGeneral/acceuil.js";
import ajouteAdmin from "../pagesDashboard/adminGeneral/ajouteAdmin.js";
import promotion from "../pagesDashboard/adminGeneral/promotion.js";


 const route=(route)=>{
     
    const routes = [
        { path: "acceuil", view: acceuil },
        { path: "ajouteAdmin", view: ajouteAdmin },
        { path: "promotion", view: promotion }
    ];
    

    let findView = routes.find(element => element.path === route);

    
     return  findView.view.getHtml();
   
}
export default route


