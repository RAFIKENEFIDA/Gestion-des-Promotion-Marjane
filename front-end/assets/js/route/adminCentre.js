import acceuil from "../pagesDashboard/adminCentre/acceuil.js";
import ajouteResponsableRayon from "../pagesDashboard/adminCentre/ajouteResponsableRayon.js";
import promotion from "../pagesDashboard/adminCentre/promotion.js";
import responsablesrayon from "../pagesDashboard/adminCentre/responsablesRayon.js";
import ajoutePromotion from "../pagesDashboard/adminCentre/ajoutePromotion.js";


 const route=(route)=>{
     
    const routes = [
        { path: "acceuil", view: acceuil },
        { path: "ajouteResponsableRayon", view: ajouteResponsableRayon },
        { path: "promotion", view: promotion },
        { path: "responsablesrayon", view: responsablesrayon },
        { path: "addPromotion", view: ajoutePromotion },
    ];
    

    let findView = routes.find(element => element.path === route);

    
     return  findView.view.getHtml();
   
}
export default route
